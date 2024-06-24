import { google } from "googleapis";

export default async function fetchDataFromGoogleSheets(range: string) {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({
            version: "v4",
            auth,
        });

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range,
        });

        return response.data.values;
    } catch (e) {
        console.error("Error fetching Google Sheet data:", e);
        throw new Error("Error fetching data from Google Sheets");
    }
}
