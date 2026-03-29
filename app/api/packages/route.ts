// app/api/packages/route.ts
export async function GET() {
  return Response.json([
    {
      id: "1",
      name: "video-capture",
      description: "video-capture version",
      downloadUrl: "https://your-cdn.com/vid_capture.zip",
      imageUrl: "/cool.png"
    }
  ]);
}