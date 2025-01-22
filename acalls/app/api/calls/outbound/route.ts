import { NextResponse } from "next/server"
import { z } from "zod"
import { Twilio } from "twilio"

const outboundCallSchema = z.object({
  number: z.string(),
  prompt: z.string(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { number, prompt } = outboundCallSchema.parse(body)

    const twilioClient = new Twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!)

    const call = await twilioClient.calls.create({
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: number,
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/calls/outbound-twiml?prompt=${encodeURIComponent(prompt)}`,
    })

    return NextResponse.json({
      success: true,
      callSid: call.sid,
    })
  } catch (error) {
    console.error("Error initiating outbound call:", error)
    return NextResponse.json({ error: "Failed to initiate call" }, { status: 500 })
  }
}

