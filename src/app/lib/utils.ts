// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }
import nodemailer from "nodemailer";

export function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}


// utils/sendEmail.ts

export async function sendEmail(to: string, subject: string, text: string,html:string) {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "15b2f56cf24a07",
      pass: "19672c0386343e"
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER || "al.anas@polygontech.xyz",
    to,
    subject,
    text,
    html
  });
}
