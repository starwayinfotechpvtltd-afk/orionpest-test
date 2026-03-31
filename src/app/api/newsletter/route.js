import { NextResponse } from "next/server";
import { getSheetsClient } from "@/lib/googleSheets";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 });
    }

    const sheets = await getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[ "", "", "", "", "", email ]],
      },
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Google Sheets Error FULL:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
