console.log("Video Capture Package Loaded!");
function captureInfo() {
  return {
    name: "Video Capture Test Package",
    version: "0.1.0",
    description: "This is just a test package for your Tauri store"
  };
}
module.exports = { captureInfo };
console.log(captureInfo());