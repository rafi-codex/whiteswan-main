import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { lane, answers, contact, hidden, result, pitchDeckName } = body;

    const leadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      receivedAt: new Date().toISOString(),
      lane,
      contact: contact || {},
      hidden: hidden || {},
      result: result || {},
      answers: answers || {},
      pitchDeckName: pitchDeckName || null,
    };

    // Log to console for observability
    console.log("[WSA Lead Received]", JSON.stringify(leadRecord, null, 2));

    // Append to local store file safely if possible
    try {
      const dataDir = path.join(process.cwd(), ".data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFile = path.join(dataDir, "leads.jsonl");
      fs.appendFileSync(leadsFile, JSON.stringify(leadRecord) + "\n");
    } catch (fsErr) {
      console.warn("Could not write lead to file:", fsErr);
    }

    return NextResponse.json({
      success: true,
      leadId: leadRecord.id,
      qualified: result?.qualified ?? false,
    });
  } catch (error) {
    console.error("Error processing lead submission:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
