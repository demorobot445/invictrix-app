// // Basic configuration for the application

// // Default sizes for server-side rendering
// const defaultSizes = {
//   width: 1920,
//   height: 1080,
// };

// // Helper function to get window dimensions safely
// const getWindowDimensions = () => {
//   if (typeof window !== "undefined") {
//     return {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   }
//   return defaultSizes;
// };

// export const config = {
//   sizes: getWindowDimensions(),
// };

// // Update sizes on client-side
// if (typeof window !== "undefined") {
//   const updateSizes = () => {
//     config.sizes = getWindowDimensions();
//   };

//   // Update on resize
//   window.addEventListener("resize", updateSizes);
// }
