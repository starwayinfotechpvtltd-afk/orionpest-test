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
      pageUrl
    } = body;


    if (!fullName || !phone || !email) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email and phone are required",
        },
        { status: 400 }
      );
    }

    const cleanedPhone = phone.toString().trim();

    if (
      cleanedPhone.length < 7 ||
      cleanedPhone.length > 15
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid phone number",
        },
        { status: 400 }
      );
    }


    const mailResult = await sendMail({
      fullName,
      email,
      phone: cleanedPhone,
      service,
      location,
      message,
      pageUrl
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
        stack:
          process.env.NODE_ENV === "development"
            ? error.stack
            : undefined,
      },
      { status: 500 }
    );
  }
}
