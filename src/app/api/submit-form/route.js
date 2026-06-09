import { NextResponse } from "next/server";
import { getSheetsClient } from "@/lib/googleSheets";
import { sendMail } from "@/lib/sendSubmitMail";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, postcode, type, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !postcode || !type || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 },
      );
    }

    // Normalize phone
    const cleanedPhone = phone.toString().trim();

    // Phone validation (7–11 digits)
    if (cleanedPhone.length < 7 || cleanedPhone.length > 11) {
      return NextResponse.json(
        { success: false, error: "Enter a valid phone number" },
        { status: 400 },
      );
    }

    const sheets = await getSheetsClient();
    console.log("Sheets", sheets)

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet2!A:G",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            name.trim(),
            email.trim(),
            cleanedPhone,
            postcode,
            type,
            message,
            new Date().toISOString(),
          ],
        ],
      },
    });

    console.log("Data added in google sheet");

    try {
      await sendMail({
        name,
        email,
        phone: cleanedPhone,
        postcode,
        type,
        message,
      });
    } catch (mailError) {
      console.error("Email failed:", mailError);
    }
    console.log("Mail send successfully");

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
