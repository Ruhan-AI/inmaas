import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

const INMAAS_ORDERS_EMAIL = 'inmaasorderspk@gmail.com';

interface OrderItem {
  productName: string;
  variantLabel: string;
  pack?: string;
  quantity: number;
  price: number;
}

interface OrderPayload {
  customerName: string;
  phone: string;
  email?: string;
  city: string;
  address?: string;
  notes?: string;
  items: OrderItem[];
  totalAmount: number;
}

function buildEmailHtml(order: OrderPayload): string {
  const itemsHtml = order.items
    .map(
      (item) => `
      <tr style="border-bottom: 1px solid #E2EDF8;">
        <td style="padding: 12px 8px; font-weight: 600; color: #1D2638;">
          ${item.productName}
          <div style="font-size: 12px; font-weight: 400; color: #5B6B84;">
            ${item.variantLabel} ${item.pack ? `• ${item.pack}` : ''}
          </div>
        </td>
        <td style="padding: 12px 8px; text-align: center; color: #1D2638; font-weight: 600;">
          ${item.quantity}
        </td>
        <td style="padding: 12px 8px; text-align: right; color: #1D2638; font-weight: 600;">
          Rs. ${item.price.toLocaleString()}
        </td>
        <td style="padding: 12px 8px; text-align: right; color: #0070BA; font-weight: 700;">
          Rs. ${(item.price * item.quantity).toLocaleString()}
        </td>
      </tr>
    `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New INMAAS Product Order</title>
      </head>
      <body style="margin: 0; padding: 24px 12px; background-color: #F4F8FB; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #E2EDF8; box-shadow: 0 4px 20px rgba(0, 112, 186, 0.08);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1B2A4A 0%, #2E56A6 100%); padding: 28px 24px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase;">
              INMAAS
            </h1>
            <div style="font-size: 11px; font-weight: 700; color: #8EC5FC; letter-spacing: 0.2em; text-transform: uppercase; margin-top: 4px;">
              Health Care
            </div>
            <div style="margin-top: 14px; display: inline-block; background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 20px; padding: 4px 14px; font-size: 12px; font-weight: 600;">
              🛒 New Product Order / Inquiry
            </div>
          </div>

          <!-- Content Body -->
          <div style="padding: 24px;">
            
            <!-- Customer Details Card -->
            <div style="background: #F8FBFE; border: 1px solid #DCEBF9; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
              <h3 style="margin: 0 0 12px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; color: #0070BA;">
                👤 Customer Information
              </h3>
              <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 4px 0; color: #5B6B84; width: 35%;">Customer Name:</td>
                  <td style="padding: 4px 0; color: #1D2638; font-weight: 700;">${order.customerName}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0; color: #5B6B84;">Phone / WhatsApp:</td>
                  <td style="padding: 4px 0; color: #0070BA; font-weight: 700;">
                    <a href="tel:${order.phone}" style="color: #0070BA; text-decoration: none;">${order.phone}</a>
                  </td>
                </tr>
                ${
                  order.email
                    ? `
                <tr>
                  <td style="padding: 4px 0; color: #5B6B84;">Email Address:</td>
                  <td style="padding: 4px 0; color: #1D2638; font-weight: 600;">${order.email}</td>
                </tr>`
                    : ''
                }
                <tr>
                  <td style="padding: 4px 0; color: #5B6B84;">City:</td>
                  <td style="padding: 4px 0; color: #1D2638; font-weight: 600;">${order.city}</td>
                </tr>
                ${
                  order.address
                    ? `
                <tr>
                  <td style="padding: 4px 0; color: #5B6B84;">Delivery Address:</td>
                  <td style="padding: 4px 0; color: #1D2638; font-weight: 600;">${order.address}</td>
                </tr>`
                    : ''
                }
                ${
                  order.notes
                    ? `
                <tr>
                  <td style="padding: 4px 0; color: #5B6B84; vertical-align: top;">Customer Notes:</td>
                  <td style="padding: 4px 0; color: #1D2638; font-style: italic;">${order.notes}</td>
                </tr>`
                    : ''
                }
              </table>
            </div>

            <!-- Ordered Items Table -->
            <h3 style="margin: 0 0 12px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; color: #0070BA;">
              📦 Order Summary
            </h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
              <thead>
                <tr style="background: #EAF4FE; color: #0070BA; text-align: left; font-size: 12px; text-transform: uppercase;">
                  <th style="padding: 8px; border-radius: 6px 0 0 6px;">Product</th>
                  <th style="padding: 8px; text-align: center;">Qty</th>
                  <th style="padding: 8px; text-align: right;">Unit Price</th>
                  <th style="padding: 8px; text-align: right; border-radius: 0 6px 6px 0;">Total</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" style="padding: 14px 8px; text-align: right; font-weight: 700; font-size: 15px; color: #1D2638;">
                    Total Estimated Amount:
                  </td>
                  <td style="padding: 14px 8px; text-align: right; font-weight: 800; font-size: 18px; color: #0070BA;">
                    Rs. ${order.totalAmount.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>

            <!-- Quick Action Links -->
            <div style="text-align: center; margin-top: 28px; padding-top: 20px; border-top: 1px solid #E2EDF8;">
              <a href="https://wa.me/${order.phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 24px; font-weight: 700; font-size: 13px; margin: 4px;">
                💬 Message Customer on WhatsApp
              </a>
              <a href="tel:${order.phone}" style="display: inline-block; background: #0070BA; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 24px; font-weight: 700; font-size: 13px; margin: 4px;">
                📞 Call Customer
              </a>
            </div>

          </div>

          <!-- Footer -->
          <div style="background: #F8FBFE; border-top: 1px solid #E2EDF8; padding: 16px 24px; text-align: center; font-size: 12px; color: #8C9BAE;">
            This order inquiry was submitted automatically from INMAAS Health Care Portal (<a href="https://inmaaspk.com" style="color: #0070BA; text-decoration: none;">inmaaspk.com</a>).
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    const body: OrderPayload = await request.json();

    if (!body.customerName || !body.phone || !body.city || !body.items || body.items.length === 0) {
      return NextResponse.json(
        { error: 'Missing required order fields: name, phone, city, or items.' },
        { status: 400 }
      );
    }

    const emailHtml = buildEmailHtml(body);
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn(
        '⚠️ RESEND_API_KEY is not configured in environment. Logging order inquiry to console fallback:'
      );
      console.log('Order Details:', JSON.stringify(body, null, 2));

      return NextResponse.json({
        success: true,
        message: 'Order received successfully (Demo/Local Mode). Please configure RESEND_API_KEY for live delivery.',
        order: {
          customerName: body.customerName,
          phone: body.phone,
          itemsCount: body.items.length,
          totalAmount: body.totalAmount,
        },
      });
    }

    const resend = new Resend(apiKey);

    const emailResponse = await resend.emails.send({
      from: 'INMAAS Orders <onboarding@resend.dev>',
      to: [INMAAS_ORDERS_EMAIL],
      subject: `New Order: ${body.customerName} - ${body.city} (Rs. ${body.totalAmount.toLocaleString()})`,
      html: emailHtml,
      replyTo: body.email || undefined,
    });

    if (emailResponse.error) {
      console.error('Resend API error:', emailResponse.error);
      return NextResponse.json(
        { error: `Failed to send email via Resend: ${emailResponse.error.message}` },
        { status: 500 }
      );
    }

    // If customer provided an email address, send them an order confirmation copy as well
    if (body.email) {
      try {
        await resend.emails.send({
          from: 'INMAAS Health Care <onboarding@resend.dev>',
          to: [body.email],
          subject: 'Order Confirmation — INMAAS Health Care',
          html: emailHtml,
        });
      } catch (custError) {
        console.warn('Could not send confirmation copy to customer email:', custError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Order submitted successfully and forwarded to inmaasorderspk@gmail.com',
      data: emailResponse.data,
    });
  } catch (error: any) {
    console.error('Error processing order submission:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error while processing order' },
      { status: 500 }
    );
  }
}
