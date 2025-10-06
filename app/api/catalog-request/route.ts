import { NextRequest, NextResponse } from "next/server";

interface CatalogRequest {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  country: string;
  phone?: string;
  interests: string[];
  consent: boolean;
  timestamp: string;
  source: string;
}

// In a real implementation, you would:
// 1. Store this in a database (Supabase, MongoDB, etc.)
// 2. Send to your ESP (Mailchimp, Klaviyo, etc.)
// 3. Trigger welcome email sequence
// 4. Store for analytics and lead scoring

export async function POST(request: NextRequest) {
  try {
    const data: CatalogRequest = await request.json();

    // Basic validation
    if (!data.email || !data.firstName || !data.lastName || !data.company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the request for development
    console.log("Catalog request received:", {
      ...data,
      ip: request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip"),
      userAgent: request.headers.get("user-agent"),
    });

    // TODO: Replace with actual implementations

    // 1. Database storage
    // await db.catalogRequests.create({ data: {
    //   ...data,
    //   status: 'new',
    //   score: calculateLeadScore(data)
    // }});

    // 2. ESP integration
    // await espClient.addContact({
    //   email: data.email,
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   company: data.company,
    //   tags: ['catalog_download', ...data.interests],
    //   customFields: {
    //     country: data.country,
    //     phone: data.phone,
    //     source: data.source
    //   }
    // });

    // 3. Trigger welcome email
    // await emailService.sendTemplate({
    //   templateId: 'catalog-welcome',
    //   to: data.email,
    //   data: {
    //     firstName: data.firstName,
    //     catalogUrl: 'https://cdn.aslmllc.net/catalog/global-impact-2025.pdf',
    //     interests: data.interests
    //   }
    // });

    // 4. Slack notification (optional)
    // await slackClient.postMessage({
    //   channel: '#leads',
    //   text: `New catalog request from ${data.firstName} ${data.lastName} at ${data.company} (${data.country})`
    // });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: "Catalog request received successfully",
      downloadUrl: "https://cdn.aslmllc.net/catalog/global-impact-2025.pdf", // Placeholder URL
      requestId: `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

  } catch (error) {
    console.error("Catalog request error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint for testing
export async function GET() {
  return NextResponse.json({
    message: "Catalog request API is running",
    timestamp: new Date().toISOString(),
  });
}