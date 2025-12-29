// app/api/investroute/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { product, name, phone, termsAccepted } = await req.json();

    // Basic validation
    if (!product || !name || !phone || !termsAccepted) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    // 🔹 SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true ONLY if port = 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 🔹 Send mail
    await transporter.sendMail({
      from: `"Investroute Leads" <${process.env.SMTP_USER}>`,
      to: "sales@investroutecapital.com", // 👈 CHANGE THIS
      subject: "New Lead from Investroute",
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> +91 ${phone}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email API error:", error);
    return NextResponse.json(
      { error: "Email failed" },
      { status: 500 }
    );
  }
}
