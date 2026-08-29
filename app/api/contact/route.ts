import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const INMAAS_CONTACT_EMAIL = 'inmaaspk@gmail.com';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

function buildContactEmailHtml(data: ContactPayload): string {
  const phoneClean = data.phone ? data.phone.replace(/[^0-9+]/g, '') : '';
  const waUrl = phoneClean
    ? `https://wa.me/${phoneClean.startsWith('0') ? '92' + phoneClean.slice(1) : phoneClean}`
    : '';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message — INMAAS Health Care</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F4F8FC; font-family: 'Segoe UI', Arial, sans-serif; color: #1D2638;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F4F8FC; padding: 30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 112, 186, 0.08); border: 1px solid #DCEBF9;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0070BA 0%, #004D80 100%); padding: 28px 32px; text-align: left;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <span style="display: inline-block; background-color: rgba(255,255,255,0.18); color: #FFFFFF; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 20px; margin-bottom: 8px;">
                      Website Contact Form
                    </span>
                    <h1 style="margin: 0; color: #FFFFFF; font-size: 22px; font-weight: 800; line-height: 1.2;">
                      New Message Received
                    </h1>
                    <p style="margin: 6px 0 0 0; color: #D6E8FA; font-size: 13px;">
                      From: ${data.name} &bull; ${data.subject}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 28px 32px;">
              
              <!-- Sender Details Box -->
              <div style="background-color: #F8FBFE; border: 1px solid #E2EDF8; border-radius: 12px; padding: 18px 20px; margin-bottom: 24px;">
                <h3 style="margin: 0 0 12px 0; color: #0070BA; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                  Sender Information
                </h3>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="4" border="0" style="font-size: 14px;">
                  <tr>
                    <td width="30%" style="color: #5B6B84; font-weight: 600;">Full Name:</td>
                    <td width="70%" style="color: #1D2638; font-weight: 700;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="color: #5B6B84; font-weight: 600;">Email Address:</td>
                    <td style="color: #1D2638;"><a href="mailto:${data.email}" style="color: #0070BA; text-decoration: none; font-weight: 600;">${data.email}</a></td>
                  </tr>
                  ${
                    data.phone
                      ? `
                  <tr>
                    <td style="color: #5B6B84; font-weight: 600;">Phone / WhatsApp:</td>
                    <td style="color: #1D2638; font-weight: 600;">${data.phone}</td>
                  </tr>`
                      : ''
                  }
                  <tr>
                    <td style="color: #5B6B84; font-weight: 600;">Subject / Interest:</td>
                    <td style="color: #1D2638; font-weight: 600;">${data.subject}</td>
                  </tr>
                </table>
              </div>

              <!-- Message Body -->
              <h3 style="margin: 0 0 10px 0; color: #1D2638; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                Message Content:
              </h3>
              <div style="background-color: #FFFFFF; border: 1px solid #DCEBF9; border-left: 4px solid #0070BA; border-radius: 8px; padding: 18px 20px; font-size: 14px; line-height: 1.6; color: #2D3748; white-space: pre-wrap; margin-bottom: 24px;">${data.message}</div>

              <!-- Action Buttons -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top: 20px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)} - INMAAS Health Care" style="display: inline-block; background-color: #0070BA; color: #FFFFFF; font-weight: 700; font-size: 14px; text-decoration: none; padding: 12px 26px; border-radius: 30px; margin-right: 10px; margin-bottom: 10px;">
                      Reply via Email
                    </a>
                    ${
                      waUrl
                        ? `
                    <a href="${waUrl}" style="display: inline-block; background-color: #25D366; color: #FFFFFF; font-weight: 700; font-size: 14px; text-decoration: none; padding: 12px 26px; border-radius: 30px; margin-bottom: 10px;">
                      Message on WhatsApp
                    </a>`
                        : ''
                    }
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #F8FBFE; padding: 18px 32px; border-top: 1px solid #E2EDF8; text-align: center; font-size: 12px; color: #5B6B84;">
              <p style="margin: 0 0 4px 0; font-weight: 600; color: #1D2638;">INMAAS Health Care (Pvt.) Ltd.</p>
              <p style="margin: 0;">This contact inquiry was submitted on the official INMAAS website.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailHtml = buildContactEmailHtml(body);
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn(
        '⚠️ RESEND_API_KEY is not configured in environment. Logging contact inquiry to console fallback:'
      );
      console.log('Contact Message:', JSON.stringify(body, null, 2));

      return NextResponse.json({
        success: true,
        message: 'Message received (Demo mode). Please configure RESEND_API_KEY for live delivery.',
      });
    }

    const resend = new Resend(apiKey);
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'INMAAS Contact <onboarding@resend.dev>';
    const isSandbox = fromAddress.includes('onboarding@resend.dev');

    // In Resend sandbox mode (onboarding@resend.dev), Resend only permits delivery to account email (inmaasorderspk@gmail.com).
    // Once a custom domain is verified at resend.com/domains, it delivers directly to inmaaspk@gmail.com.
    const recipientEmail = isSandbox ? 'inmaasorderspk@gmail.com' : INMAAS_CONTACT_EMAIL;

    const emailResponse = await resend.emails.send({
      from: fromAddress,
      to: [recipientEmail],
      subject: `[Contact Form] ${body.name}: ${body.subject}`,
      html: emailHtml,
      replyTo: body.email,
    });

    if (emailResponse.error) {
      console.error('Resend API contact email error:', emailResponse.error);
      return NextResponse.json(
        { error: `Failed to send email via Resend: ${emailResponse.error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Message sent successfully to ${INMAAS_CONTACT_EMAIL}`,
      data: emailResponse.data,
    });
  } catch (error: any) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error while sending message' },
      { status: 500 }
    );
  }
}
