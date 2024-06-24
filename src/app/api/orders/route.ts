import fetchDataFromGoogleSheets from "@/actions/fetchDataFromGoogleSheets";
import { NextResponse } from "next/server";

export async function GET() {
    const range = 'Orders!A:Z';

    try {
        const data = await fetchDataFromGoogleSheets(range);
        return NextResponse.json(data);
    } catch (e) {
        return new Response("Error fetching data", { status: 500 });
    }
}
