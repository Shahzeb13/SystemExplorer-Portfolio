import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Contact from "@/models/Contact";
import { isContactFormData } from "@/utils/validations";
import { sendContactEmails } from "@/utils/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body)
    // 1. Validation with Type Predicates
    if (!isContactFormData(body)) {
      return NextResponse.json(
        { success: false, message: "Invalid submission data. Please check your inputs." },
        { status: 400 }
      );
    }

    // 2. Database Connection
    await dbConnect();

    // 3. Save to Database
    const newContact = new Contact({
      name: body.name,
      email: body.email,
      message: body.message,
    });
    await newContact.save();

    // 4. Send Emails (Nodemailer)
    try {
      await sendContactEmails(body);
    } catch (emailError) {
      console.error("Email delivery failed:", emailError);
      // We still return success: true because the contact is saved in DB
    }

    return NextResponse.json(
      { success: true, message: "Transmission successful. Link established." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "System error occurred during transmission.", error: error.message },
      { status: 500 }
    );
  }
}
