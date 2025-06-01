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
uniform float uPointerActive; // Controls whether hover effect is active
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

	// Constant brightness without disperse effects
	float baseMultiplier = 0.2; // Constant base brightness
	
	// Combined brightness without dispersion effect
	float brightness = localBrightness * (baseMultiplier + globalBrightness * 0.5);
	
	// Apply brightness to color with constant intensity
	float intensityMultiplier = 4.0; // Constant intensity
	finalColor = finalColor * brightness * intensityMultiplier;
		// Sample local texture for particle mask
	vec4 particleTexture = texture2D(uTexture, uv);
		// Sample global texture using normalized local position coordinates
	// We scale by 0.5 and offset by 0.5 to center it
	vec2 globalUV = (vLocalPosition.xy / uGlobalRadius) * 0.5 + 0.5;
	vec4 globalTexture = texture2D(uTexture2, globalUV);
			vec3 finalRGB = finalColor * (1.0 - particleTexture.rgb);
	
	// When particles are dispersed, use only colorA uniformly
	if (uDisperse > 0.0) {
		// Override all color effects and use only colorA when dispersed
		finalRGB = colorA * 1.8 * brightness * intensityMultiplier * (1.0 - particleTexture.rgb);
	} else {
		// Normal behavior when not dispersed
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
	}

	gl_FragColor = vec4(finalRGB, particleTexture.a * uOpacity * 2.);
}`;
