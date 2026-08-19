"use server";

import { Resend } from "resend";
import { validateContactForm } from "@/lib/validate-contact-form";
import { DEFAULT_EMAIL } from "@/lib/site-config";

export interface ContactActionState {
  status: "idle" | "success" | "error";
  errors: Record<string, string>;
  message?: string;
}

export async function sendContactMessage(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const input = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    message: String(formData.get("message") || ""),
  };

  const validation = validateContactForm(input);
  if (!validation.valid) {
    return { status: "error", errors: validation.errors };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Starkwood Events Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || DEFAULT_EMAIL,
      replyTo: input.email,
      subject: `New enquiry from ${input.name}`,
      text: input.message,
    });
    return { status: "success", errors: {} };
  } catch {
    return {
      status: "error",
      errors: {},
      message: "Something went wrong sending your message — please call or email us directly.",
    };
  }
}
