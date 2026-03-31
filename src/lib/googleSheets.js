import { google } from "googleapis";

export async function getSheetsClient() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  auth.gap = 5 * 60;

  await auth.authorize();

  return google.sheets({ version: "v4", auth });
}
