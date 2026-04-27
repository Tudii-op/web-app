import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const packagesDir = path.join(process.cwd(), "public", "packages");

  if (!fs.existsSync(packagesDir)) {
    return NextResponse.json([]);
  }

  const files = fs.readdirSync(packagesDir).filter(f => f.endsWith(".zip"));

  const packages = files.map((file, index) => {
    const name = file.replace(".zip", "");
    return {
      id: String(index + 1),
      name,
      description: "",
      downloadUrl: `/packages/${file}`,
    };
  });

  return NextResponse.json(packages);
}