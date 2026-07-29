export const runtime = 'edge';

import { NextRequest, NextResponse } from "next/server";

const ESPO_URL = process.env.ESPOCRM_URL!;
const ESPO_API_KEY = process.env.ESPOCRM_API_KEY!;

interface LeadPayload {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  course?: string;
  workExp?: string;
  city?: string;
  state?: string;
  university?: string;
  qualification?: string;
  formName?: string;
  source?: string;
}

export async function POST(req: NextRequest) {
  let body: LeadPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.email || !body.phone) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  let firstName = body.firstName;
  let lastName = body.lastName;

  if (!firstName && body.fullName) {
    const parts = body.fullName.trim().split(/\s+/);
    firstName = parts[0];
    lastName = parts.length > 1 ? parts.slice(1).join(" ") : parts[0];
  }

  if (!firstName) {
    return NextResponse.json({ ok: false, error: "Name is required" }, { status: 400 });
  }
  if (!lastName) lastName = firstName;

  const payload: Record<string, unknown> = {
    firstName,
    lastName,
    emailAddress: body.email,
    phoneNumber: body.phone.startsWith("+") ? body.phone : `+91${body.phone}`,
    description: `Form: ${body.formName || "Unknown form"} | Source: ${body.source || "Website"}`,
  };

  if (body.course) payload.cCourse = body.course;
  if (body.workExp) payload.cWorkExp = body.workExp;
  if (body.city) payload.addressCity = body.city;
  if (body.state) payload.addressState = body.state;
  if (body.university) payload.cUniversity = body.university;
  if (body.qualification) payload.cQualification = body.qualification;

  try {
    const espoRes = await fetch(`${ESPO_URL}/api/v1/Lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": ESPO_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (espoRes.status === 409) {
      const dupData = await espoRes.json();
      const existingId = Array.isArray(dupData) ? dupData[0]?.id : dupData?.id;

      if (existingId) {
        const updateRes = await fetch(`${ESPO_URL}/api/v1/Lead/${existingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": ESPO_API_KEY,
          },
          body: JSON.stringify(payload),
        });

        if (!updateRes.ok) {
          const errText = await updateRes.text();
          console.error("EspoCRM update error:", updateRes.status, errText);
          return NextResponse.json({ ok: false, error: "CRM update failed" }, { status: 502 });
        }

        const updatedData = await updateRes.json();
        return NextResponse.json({ ok: true, id: updatedData.id, updated: true });
      }
    }

    if (!espoRes.ok) {
      const errText = await espoRes.text();
      console.error("EspoCRM API error:", espoRes.status, errText);
      return NextResponse.json({ ok: false, error: "CRM submission failed" }, { status: 502 });
    }

    const data = await espoRes.json();
    return NextResponse.json({ ok: true, id: data.id });
  } catch (err) {
    console.error("EspoCRM request failed:", err);
    return NextResponse.json({ ok: false, error: "Could not reach CRM" }, { status: 500 });
  }
}