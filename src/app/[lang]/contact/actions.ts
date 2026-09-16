"use server";

import { needOptions } from "@/data/contact";

/**
 * Sprint 10 project intake — server action.
 *
 * The action mirrors client-side validation and then attempts to deliver
 * the inquiry to a configured webhook (Formspree, Zapier, Resend proxy,
 * a Sehass-owned API — anything that accepts a JSON POST). If no delivery
 * endpoint is configured, the action returns { ok: false, code: "not-configured" }
 * instead of pretending the message was sent.
 *
 * Configure with the following environment variables (server-side only):
 *   CONTACT_WEBHOOK_URL   — required. HTTPS endpoint that receives the JSON payload.
 *   CONTACT_WEBHOOK_TOKEN — optional. Bearer token sent as `Authorization: Bearer <token>`.
 *
 * Never expose these to the client. Never prefix them with NEXT_PUBLIC_.
 */

const MIN_PROBLEM_LENGTH = 20;
const MAX_PROBLEM_LENGTH = 4000;
const MAX_TEXT_LENGTH = 200;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const allowedNeeds = new Set(needOptions.map((o) => o.value));

export type FieldErrors = Partial<
  Record<"name" | "email" | "need" | "problem", string>
>;

export type SubmitResult =
  | { ok: true }
  | { ok: false; code: "validation"; errors: FieldErrors }
  | { ok: false; code: "not-configured" }
  | { ok: false; code: "error"; message?: string };

export type InquiryInput = {
  name: string;
  email: string;
  organization?: string;
  country?: string;
  need: string;
  problem: string;
  stage?: string;
  budget?: string;
  timeline?: string;
  // Honeypot — real users leave this blank; bots often fill it.
  website?: string;
};

function trim(value: unknown, max = MAX_TEXT_LENGTH): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function submitProjectInquiry(
  raw: InquiryInput,
): Promise<SubmitResult> {
  // Silent success for honeypot hits — do not reveal the trap.
  if (raw.website && raw.website.trim().length > 0) {
    return { ok: true };
  }

  const name = trim(raw.name);
  const email = trim(raw.email);
  const need = trim(raw.need, 64);
  const problem = trim(raw.problem, MAX_PROBLEM_LENGTH);
  const organization = trim(raw.organization);
  const country = trim(raw.country);
  const stage = trim(raw.stage, 64);
  const budget = trim(raw.budget, 64);
  const timeline = trim(raw.timeline, 64);

  const errors: FieldErrors = {};
  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter a valid email address.";
  else if (!EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address.";
  if (!need || !allowedNeeds.has(need))
    errors.need = "Please choose what you need.";
  if (!problem)
    errors.problem = "Please tell us what you\u2019re trying to build or solve.";
  else if (problem.length < MIN_PROBLEM_LENGTH)
    errors.problem = `Please add a little more detail (at least ${MIN_PROBLEM_LENGTH} characters).`;

  if (Object.keys(errors).length > 0) {
    return { ok: false, code: "validation", errors };
  }

  const endpoint = process.env.CONTACT_WEBHOOK_URL;
  if (!endpoint) {
    return { ok: false, code: "not-configured" };
  }

  const payload = {
    source: "sehassdigital.com/contact",
    submittedAt: new Date().toISOString(),
    name,
    email,
    organization: organization || null,
    country: country || null,
    need,
    problem,
    stage: stage || null,
    budget: budget || null,
    timeline: timeline || null,
  };

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (process.env.CONTACT_WEBHOOK_TOKEN) {
    headers.Authorization = `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}`;
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (!res.ok) {
      return { ok: false, code: "error" };
    }
    return { ok: true };
  } catch {
    return { ok: false, code: "error" };
  }
}
