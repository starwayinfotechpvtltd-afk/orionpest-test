// import { NextResponse } from "next/server";
// import { getSheetsClient } from "@/lib/googleSheets";
// import { sendMail } from "@/lib/sendServiceMail";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, phone, location, service } = body;


//     // Normalize phone
//     const cleanedPhone = phone.toString().trim();

//     // Phone validation (7–11 digits)
//     if (cleanedPhone.length < 7 || cleanedPhone.length > 11) {
//       return NextResponse.json(
//         { success: false, error: "Enter a valid phone number" },
//         { status: 400 }
//       );
//     }

//     // const sheets = await getSheetsClient();

//     // await sheets.spreadsheets.values.append({
//     //   spreadsheetId: process.env.GOOGLE_SHEET_ID,
//     //   range: "Sheet2!A:F",
//     //   valueInputOption: "RAW",
//     //   insertDataOption: "INSERT_ROWS",
//     //   requestBody: {
//     //     values: [
//     //       [
//     //         name.trim(),
//     //         cleanedPhone,
//     //         location,
//     //         service,
//     //         new Date().toISOString()
//     //       ]
//     //     ],
//     //   },
//     // });

//     await sendMail({name, phone, location, service})

//     return NextResponse.json({ success: true });

//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }




import { NextResponse } from "next/server";
import { sendMail } from "@/lib/sendServiceMail";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      service,
      location,
      message,
      pageUrl,
      captchaToken, // <-- 1. Receive token
    } = body;

    // 2. Validate token presence
    if (!captchaToken) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification is required" },
        { status: 400 }
      );
    }

    // 3. Verify token with Google's verification API
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      }
    );
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification failed. Bot suspected." },
        { status: 403 }
      );
    }

    // 4. Validate form fields
    if (!fullName || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const cleanedPhone = phone.toString().trim();

    // 5. Send Mail
    const mailResult = await sendMail({
      fullName,
      email,
      phone: cleanedPhone,
      service,
      location,
      message,
      pageUrl,
    });

    return NextResponse.json({
      success: mailResult.success,
      mailResult,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}