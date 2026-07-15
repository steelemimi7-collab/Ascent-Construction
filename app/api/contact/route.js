import { Resend } from 'resend';

// Where inquiries are delivered.
// [CONFIRM PATRICK'S INBOX] Set CONTACT_TO_EMAIL in .env.local and in Vercel.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'pat@ascentconstructiongroup.com';

// The verified "from" address. Use onboarding@resend.dev for testing, or an address
// on a domain verified in Resend once the domain is set up.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Ascent Website <onboarding@resend.dev>';

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { name, phone, email, projectType, message, company } = data;

  // Honeypot: real people never see or fill the "company" field. If it has a value,
  // it is almost certainly a bot. Silently accept and drop it so bots get no feedback.
  if (company) {
    return Response.json({ ok: true });
  }

  // Name and phone are required. Email, project type, and message are optional.
  if (!name || !phone) {
    return Response.json(
      { error: 'Please include your name and phone number.' },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: 'The email service is not configured yet.' },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: `New website inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || '(not provided)'}`,
        `Project type: ${projectType || '(not provided)'}`,
        '',
        'Message:',
        message || '(no message provided)',
      ].join('\n'),
    });

    if (error) {
      return Response.json({ error: 'Your message could not be sent.' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Something went wrong sending your message.' }, { status: 500 });
  }
}
