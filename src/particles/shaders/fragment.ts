export const fragment = `
uniform sampler2D uTexture;
uniform sampler2D uTexture2;
uniform vec2 uResolution;
uniform vec3 colorA;
uniform vec3 colorB;
uniform vec3 colorC;
uniform vec3 colorD;
uniform float uGlobalRadius; // Radius of the global gradient
uniform float uRadius; // Radius of the local gradient
uniform int uGradientType; // 0 for radial, 1 for linear
uniform vec3 uGradientDirection; // Direction for linear gradient
uniform float uDisperse; // Dispersion amount
uniform float uOpacity; // Opacity of the particles
uniform vec3 uPoint; // Point for radial gradient
uniform float uCircleWidth; // Width of the central circle
uniform float uCircleHeight; // Height of the central circle
varying float vDistanceToMouse;
varying float vDistanceToCenter;

varying float vVisible;
varying vec3 vPosition; // Receive position from vertex shader
varying vec3 vLocalPosition; // Receive local position from vertex shader

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void main() {
	// if ( floor(vVisible + 0.1) == 0.0 ) discard;

	vec2 st = gl_FragCoord.xy / uResolution.xy;
	vec3 color = vec3(0.0);
	vec3 pct = vec3(st.y);
	color = mix(colorA, colorB, pct);	// Local particle gradient
	vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);

	float localDist = distance(uv, vec2(0.5, 0.5));
	float localBrightness = 1. - smoothstep(0.0, 0.5, localDist);

	// Global shape gradient calculation
	float globalDist;
	float gradientFactor;
	
		// Linear gradient
		// Project the position onto the gradient direction vector and normalize
		globalDist = dot(normalize(vLocalPosition.xyz), normalize(uGradientDirection)) * 0.5 + 0.5; // Map from [-1,1] to [0,1]
		gradientFactor = smoothstep(0.0, uRadius, globalDist);
		float globalBrightness = 1.0 - smoothstep(0.0, 1.0, (length(vLocalPosition.xyz) / uGlobalRadius));
	
	vec3 finalColor = colorA;

	// When uDisperse is high, increase the brightness and make it more uniform
	float disperseBoost = mix(0.0, 0.8, uDisperse); // Additional brightness based on dispersion
	float baseMultiplier = mix(0.2, 0.6, uDisperse); // Increase base brightness with dispersion
	
	// Combined brightness with dispersion effect
	float brightness = localBrightness * (baseMultiplier + globalBrightness * mix(0.5, 0.9, uDisperse)) + disperseBoost;
	
	// Apply brightness to color with increased intensity when dispersed
	float intensityMultiplier = mix(4.0, 6.0, uDisperse); // More intensity when dispersed
	finalColor = finalColor * brightness * intensityMultiplier;
	
	// Sample local texture for particle mask
	vec4 particleTexture = texture2D(uTexture, uv);
		// Sample global texture using normalized local position coordinates
	// We scale by 0.5 and offset by 0.5 to center it
	vec2 globalUV = (vLocalPosition.xy / uGlobalRadius) * 0.5 + 0.5;
	vec4 globalTexture = texture2D(uTexture2, globalUV);
		// Combine the particle color with the global texture
	// When dispersed, reduce the effect of the global texture to keep particles visible
	float globalTextureInfluence = mix(1.0, 0.5, uDisperse); 
	
	// Blend between global texture and a constant value of 1.0 based on dispersion
	vec3 effectiveGlobalTexture = mix(globalTexture.rgb, vec3(1.0), uDisperse * 0.7);
	
	vec3 col = finalColor * (1.0 - particleTexture.rgb); 

	vec3 finalRGB = finalColor * (1.0 - particleTexture.rgb); 

	if(uDisperse >= 0.3) {
		finalRGB = smoothstep(col, vec3(1.0, 0., 0.), vec3(uDisperse));
	}
	finalRGB = mix(colorB * 1.5, finalRGB, vDistanceToMouse);	// Make the center of the MODEL use colorB and blend with gradient
	// Use vLocalPosition which is the model's local coordinates
	// Offset the center downward by subtracting from Y coordinate
	vec2 offsetCenter = vLocalPosition.xy - vec2(0.0, -80.0); // Move center down by 70 units
	
	// Create elliptical bounds using separate width and height controls
	float normalizedX = offsetCenter.x / (uCircleWidth * 0.5);
	float normalizedY = offsetCenter.y / (uCircleHeight * 0.5);
	float ellipticalDistance = sqrt(normalizedX * normalizedX + normalizedY * normalizedY);
	
	if (ellipticalDistance <= 1.0) {
		// Create smooth blend factor based on elliptical distance from center
		float blendFactor = 1.0 - smoothstep(0.0, 1.0, ellipticalDistance);
		finalRGB.xyz = mix(finalRGB.xyz, colorB * 1.5, blendFactor * 0.8);
	}

	gl_FragColor = vec4(finalRGB, particleTexture.a * uOpacity * 2.);
}`;
