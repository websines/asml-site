import { NextRequest, NextResponse } from "next/server";

interface ContactRequest {
  name: string;
  email: string;
  company: string;
  country: string;
  interest: string;
  timeline: string;
  summary: string;
  timestamp: string;
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactRequest = await request.json();

    // Basic validation
    if (!data.email || !data.name || !data.company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the request for development
    console.log("Contact form submission:", {
      ...data,
      ip: request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip"),
      userAgent: request.headers.get("user-agent"),
    });

    // TODO: Replace with actual implementations

    // 1. Database storage
    // await db.contactSubmissions.create({ data: {
    //   ...data,
    //   status: 'new',
    //   priority: calculatePriority(data.interest, data.summary)
    // }});

    // 2. Email routing based on interest
    const routingEmail = getRoutingEmail(data.interest);
    const priority = getPriority(data.interest, data.summary);

    console.log("Contact routing preview:", { routingEmail, priority });

    // await emailService.sendTemplate({
    //   templateId: 'contact-notification',
    //   to: routingEmail,
    //   data: {
    //     submission: data,
    //     priority: getPriority(data.interest, data.summary)
    //   }
    // });

    // 3. Auto-reply to submitter
    // await emailService.sendTemplate({
    //   templateId: 'contact-auto-reply',
    //   to: data.email,
    //   data: {
    //     name: data.name,
    //     interest: data.interest,
    //     nextSteps: getNextSteps(data.interest)
    //   }
    // });

    // 4. Slack/Teams notification
    // await slackClient.postMessage({
    //   channel: '#contact-forms',
    //   text: `New contact from ${data.name} at ${data.company} - Interest: ${data.interest}`
    // });

    // 5. CRM integration (HubSpot, Zoho, etc.)
    // await crmClient.createContact({
    //   firstName: data.name.split(' ')[0],
    //   lastName: data.name.split(' ').slice(1).join(' '),
    //   email: data.email,
    //   company: data.company,
    //   phone: data.phone,
    //   customFields: {
    //     country: data.country,
    //     interest: data.interest,
    //     timeline: data.timeline,
    //     project_summary: data.summary,
    //     source: data.source
    //   }
    // });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      nextSteps: "We'll respond within one business day with next steps and optional call slots.",
      referenceId: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function getRoutingEmail(interest: string): string {
  const routingMap: Record<string, string> = {
    "Logistics & freight": "logistics@aslmllc.net",
    "Global sourcing": "sourcing@aslmllc.net",
    "LLC & payments": "llc@aslmllc.net",
    "Events & brand activation": "events@aslmllc.net",
    "Renewables & watersports": "renewables@aslmllc.net",
    "Vehicle imports": "imports@aslmllc.net",
  };

  return routingMap[interest] || "info@aslmllc.net";
}

function getPriority(interest: string, summary: string): 'high' | 'medium' | 'low' {
  // Simple priority scoring based on interest and summary keywords
  const highPriorityKeywords = ['urgent', 'asap', 'immediately', 'emergency', 'critical'];
  const summaryLower = summary.toLowerCase();

  if (highPriorityKeywords.some(keyword => summaryLower.includes(keyword))) {
    return 'high';
  }

  // Medium priority for LLC and logistics (typically higher value)
  if (interest.includes('LLC') || interest.includes('Logistics')) {
    return 'medium';
  }

  return 'low';
}