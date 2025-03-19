import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../entities/User";
import { randomBytes } from "crypto";
import { getDataSource } from "@/app/lib/db";
import { sendEmail } from "@/app/lib/utils";

// Export POST method as a named export
export async function POST(req: NextRequest) {
  console.log("Request received");

  // Check if method is POST
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
  }

  // Parse incoming JSON request
  const { email } = await req.json();
  
  // Get database connection and repository
  const dataSource = await getDataSource();
  const userRepository = dataSource.getRepository(User);

  // Find user by email
  const user = await userRepository.findOne({ where: { email } });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  console.log({ user });


  const resetToken = randomBytes(32).toString("hex");
  const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour expiry
  user.resetToken = resetToken;
  user.resetTokenExpiry = resetTokenExpiry;
  await userRepository.save(user);

  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}`;

  // Send email with reset link in HTML format
  const htmlContent = `
    <p>Click the link below to reset your password:</p>
    <a href="${resetUrl}" target="_blank">Reset Password</a>
  `;
  await sendEmail(user.email, "Password Reset",htmlContent);


  return NextResponse.json({ message: "Reset link sent" });
}
