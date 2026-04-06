import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }
    
    const data = await req.json();
    const { status, notes } = data;
    const userId = session.user.id;

    const checkIn = await prisma.checkIn.create({
      data: {
        userId,
        status,
        notes: notes || null,
      },
    });

    return NextResponse.json({ success: true, checkIn });
  } catch (error) {
    console.error("Check-in Error:", error);
    return NextResponse.json({ error: "Failed to save daily check-in." }, { status: 500 });
  }
}
