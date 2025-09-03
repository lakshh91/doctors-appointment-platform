import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { plan } = body;

    // Get the signed-in user
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: "Not signed in" }, { status: 401 });
    }

    // Update user's selected plan in the database
    await db.user.update({
      where: { id: user.id },
      data: { subscriptionPlan: plan },
    });

    // ✅ Return success JSON
    return NextResponse.json({ message: "Plan selected successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
