import fetchDataFromGoogleSheets from "@/actions/fetchDataFromGoogleSheets";
import { NextResponse } from "next/server";

export async function GET() {
    const range = 'Targets!A:Z';

    try {
        const data = await fetchDataFromGoogleSheets(range);
        return NextResponse.json(data);
    } catch (e) {
        return new Response("Error fetching targets", { status: 500 });
    }
}
