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
  },
  {
    id: "2",
    name: "Sound Mixer",
    description: "Mix and edit audio tracks easily.",
    downloadUrl: "/packages/sound_mixer.zip",
  },
  {
    id: "3",
    name: "Pixel Painter",
    description: "Lightweight image editor for quick edits.",
    downloadUrl: "/packages/pixel_painter.zip",
  },
  {
    id: "4",
    name: "Game Capture Pro",
    description: "Record and stream gameplay effortlessly.",
    downloadUrl: "/packages/game_capture.zip",
  },
  {
    id: "5",
    name: "PDF Wizard",
    description: "Merge, split, and annotate PDF files.",
    downloadUrl: "/packages/pdf_wizard.zip",
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(packages);
}