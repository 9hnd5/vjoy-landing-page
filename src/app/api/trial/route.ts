import { addDocument } from "@/utils/firestore";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
export async function POST(request: NextRequest) {
  const data = await request.json();
  const result = await addDocument("trial", data);
  return NextResponse.json(result);
}
