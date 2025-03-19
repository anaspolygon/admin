
import { getDataSource } from "@/app/lib/db";
import { User } from "../../../entities/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


export default async function handler(req:NextRequest) {
  if (req.method !== "POST") return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });

  const { token, newPassword } = await req.json();
    const dataSource = await getDataSource();
    const userRepository = dataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { resetToken: token } });

  if (!user || !user.resetTokenExpiry || user.resetTokenExpiry < new Date()) {
    return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
  }

  user.password = await bcrypt.hash(newPassword, 10);
  user.resetToken = null;
  user.resetTokenExpiry = null;

  await userRepository.save(user);

  NextResponse.json({ message: "Password updated successfully" },{status:200});
}
