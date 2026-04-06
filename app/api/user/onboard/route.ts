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
    const { role, isAddicted, addictionType, reason, referral } = data;
    const userId = session.user.id;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        role,
        isAddicted,
        addictionType,
        reason,
        referral,
      },
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Onboarding Update Error:", error);
    return NextResponse.json({ error: "Failed to save secure onboarding data." }, { status: 500 });
  }
}
