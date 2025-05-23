export const vertex = `
attribute vec3 position2;
attribute vec3 normal2;
attribute vec3 aRand;

uniform float uMorph2;
uniform float uSize;
uniform float uDisperse;

varying float vVisible;
varying vec3 vPosition; // Pass position to fragment shader
varying vec3 vLocalPosition; // Pass local position to fragment shader

void main() {
	vec4 modelPosition1 = modelMatrix * vec4(position, 1.0);
	vec4 modelPosition2 = modelMatrix * vec4(position2, 1.0);

	vec4 modelPosition = mix(modelPosition1, modelPosition2, uMorph2); 
	
	// Store local position before dispersion
	vec3 localPos = mix(position, position2, uMorph2);
	vLocalPosition = localPos;
	
	modelPosition.xy += aRand.xy * 500.0 * uDisperse;

	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 projectedPosition = projectionMatrix * viewPosition;

	gl_Position = projectedPosition;
	
	// Pass the model position (world space) to the fragment shader
	vPosition = modelPosition.xyz;

	vec3 currentNormal = mix(normal, normal2 , uMorph2);
	vec3 vNormal = normalize( normalMatrix * currentNormal);

	vec3 vDir = vec3(0, 0, 1);
	vVisible = step( 0., dot( vDir, vNormal ) );

	// if(currentNormal == vec3(0.0, 0.0, 0.0))
	// vVisible = -1.0;

  gl_PointSize = uSize * 2.0 + (aRand.z * uDisperse) * 6.; 
}`;
