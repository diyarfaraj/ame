import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const {
      name,
      email,
      phone,
      projectType,
      spaceType,
      squareFootage,
      timeline,
      budgetRange,
      selectedPackage,
      stylePreferences,
      inspirations,
      message,
      selectedInspirationImages,
    } = formData;

    const emailHtml = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #FAF9F7;">
        <div style="background-color: white; padding: 40px; border-radius: 4px;">
          <h1 style="color: #292524; font-size: 28px; font-weight: 400; margin-bottom: 30px; border-bottom: 1px solid #e7e5e4; padding-bottom: 20px;">
            New Consultation Request
          </h1>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #78716c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Contact Information</h2>
            <p style="color: #292524; margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="color: #292524; margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="color: #292524; margin: 5px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #78716c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Project Details</h2>
            <p style="color: #292524; margin: 5px 0;"><strong>Project Type:</strong> ${projectType}</p>
            <p style="color: #292524; margin: 5px 0;"><strong>Space Type:</strong> ${spaceType}</p>
            <p style="color: #292524; margin: 5px 0;"><strong>Square Footage:</strong> ${squareFootage || "Not provided"}</p>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #78716c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Timeline & Budget</h2>
            <p style="color: #292524; margin: 5px 0;"><strong>Timeline:</strong> ${timeline}</p>
            <p style="color: #292524; margin: 5px 0;"><strong>Budget Range:</strong> ${budgetRange}</p>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #78716c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Package & Style</h2>
            <p style="color: #292524; margin: 5px 0;"><strong>Selected Package:</strong> ${selectedPackage}</p>
            <p style="color: #292524; margin: 5px 0;"><strong>Style Preferences:</strong> ${stylePreferences || "None selected"}</p>
          </div>

          ${selectedInspirationImages && selectedInspirationImages !== "None selected" ? `
          <div style="margin-bottom: 30px;">
            <h2 style="color: #78716c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;">Inspiration Images Selected</h2>
            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
              ${selectedInspirationImages.split(", ").reduce((rows: string[], img: string, index: number) => {
                if (index % 2 === 0) {
                  rows.push(`<tr>`);
                }
                rows.push(`
                  <td style="width: 50%; padding: 8px; vertical-align: top;">
                    <a href="https://ame-studio.com/images/inspiration/${img}.png" style="display: block; text-decoration: none;">
                      <img
                        src="https://ame-studio.com/images/inspiration/${img}.png"
                        alt="${img.replace(/-/g, ' ')}"
                        width="250"
                        style="width: 100%; max-width: 250px; height: auto; border-radius: 4px; display: block;"
                      />
                      <p style="color: #78716c; font-size: 11px; margin: 8px 0 0 0; text-align: center;">${img.replace(/-/g, ' ')}</p>
                    </a>
                  </td>
                `);
                if (index % 2 === 1 || index === selectedInspirationImages.split(", ").length - 1) {
                  if (index % 2 === 0) {
                    rows.push(`<td style="width: 50%;"></td>`);
                  }
                  rows.push(`</tr>`);
                }
                return rows;
              }, []).join("")}
            </table>
          </div>
          ` : ""}

          ${inspirations && inspirations !== "None" ? `
          <div style="margin-bottom: 30px;">
            <h2 style="color: #78716c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Inspirations & Notes</h2>
            <p style="color: #292524; margin: 5px 0;">${inspirations}</p>
          </div>
          ` : ""}

          ${message && message !== "None" ? `
          <div style="margin-bottom: 30px;">
            <h2 style="color: #78716c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Additional Message</h2>
            <p style="color: #292524; margin: 5px 0;">${message}</p>
          </div>
          ` : ""}

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e7e5e4;">
            <p style="color: #78716c; font-size: 12px; margin: 0;">
              This consultation request was submitted via the Amé Studio website.
            </p>
          </div>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Amé Studio <onboarding@resend.dev>",
      to: [process.env.NOTIFICATION_EMAIL || "diyar.faraj@gmail.com"],
      replyTo: email,
      subject: `New Consultation Request from ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
