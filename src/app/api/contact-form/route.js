
import { NextResponse } from "next/server";
import { getSheetsClient } from "@/lib/googleSheets";
import { sendMail } from "@/lib/sendSubmitMail";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    console.log(body)

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Normalize phone
    const cleanedPhone = phone.toString().trim();

    // Phone validation (7–11 digits)
    if (cleanedPhone.length < 7 || cleanedPhone.length > 11) {
      return NextResponse.json(
        { success: false, error: "Enter a valid phone number" },
        { status: 400 }
      );
    }

    const sheets = await getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            name.trim(),
            email.trim(),
            cleanedPhone,
            service,
            message,
            new Date().toISOString()
          ]
        ],
      },
    });

    await sendMail({name, email, phone, service, message})

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Google Sheets Error FULL:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
