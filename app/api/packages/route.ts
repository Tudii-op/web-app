import { NextRequest, NextResponse } from "next/server";
type Package = {
  id: string;
  name: string;
  description: string;
  downloadUrl: string;
};

// Dummy package data — replace with real data later
const packages: Package[] = [
  {
    id: "1",
    name: "Video Capture Test",
    description: "A dummy package for testing video capture.",
    downloadUrl: "/packages/video_capture.zip",
  }
];

export async function GET(req: NextRequest) {
  return NextResponse.json(packages);
}