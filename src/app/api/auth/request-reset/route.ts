
import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../entities/User";
import { randomBytes } from "crypto";
import { getDataSource } from "@/app/lib/db";
import { sendEmail } from "@/app/lib/utils";



export default async function handler(req:NextRequest) {
  if (req.method !== "POST") return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });

  const { email } = await req.json();
    const dataSource = await getDataSource();
    const userRepository = dataSource.getRepository(User);
  
  const user = await userRepository.findOne({ where: { email } });
  if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

  const resetToken = randomBytes(32).toString("hex");
  const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour expiry

  user.resetToken = resetToken;
  user.resetTokenExpiry = resetTokenExpiry;

  await userRepository.save(user);

  // Send email with reset link
  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}`;
  await sendEmail(user.email, "Password Reset", `Click here to reset: ${resetUrl}`);

  NextResponse.json({ message: "Reset link sent" });
}
