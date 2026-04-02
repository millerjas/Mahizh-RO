import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, mobile, email, location, intent, message, source } = body;

    // We assume the following env variables are correctly configured
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !sheetId) {
      console.warn("Google Sheets API Environment variables are missing.");
      return NextResponse.json({ 
        success: false, 
        message: 'Server configuration error in Google Sheets configuration.' 
      }, { status: 500 });
    }

    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    // Append to Google Sheets
    // Columns: Date, Full Name, Mobile, Email, Location, Intent/Service, Message, Source Form
    const dateStr = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:H', // Adjust if sheet name is different
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            dateStr,
            fullName || '-',
            mobile || '-',
            email || '-',
            location || '-',
            intent || '-',
            message || '-',
            source || 'Unknown Form'
          ]
        ],
      },
    });

    return NextResponse.json({ success: true, message: 'Message securely saved to Google Sheets.', data: response.data });
  } catch (error: any) {
    console.error('Error saving to Google Sheets:', error);
    return NextResponse.json(
      { success: false, message: 'An extra internal error occurred while trying to save the entry.', error: error.message },
      { status: 500 }
    );
  }
}
