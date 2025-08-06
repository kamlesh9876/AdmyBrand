import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with error handling
let resend;
try {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not set in environment variables');
  }
  resend = new Resend(process.env.RESEND_API_KEY);
} catch (error) {
  console.error('Failed to initialize Resend:', error);
}

export async function POST(request: Request) {
  try {
    if (!resend) {
      throw new Error('Email service is not properly configured');
    }

    const { name, email, subject, message } = await request.json();
    
    console.log('Received form submission:', { name, email, subject });

    // Basic validation
    if (!name || !email || !subject || !message) {
      console.error('Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Validation failed: Invalid email format');
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    try {
      // Send email to admin
      const adminEmailResponse = await resend.emails.send({
        from: 'AdmyBrand <noreply@admybrand.com>',
        to: process.env.ADMIN_EMAIL || 'admin@admybrand.com',
        subject: `New Contact Form: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 6px;">
              <p style="margin: 0; white-space: pre-line;">${message}</p>
            </div>
          </div>
        `,
      });
      console.log('Admin email sent:', adminEmailResponse);

      // Send confirmation email to user
      const userEmailResponse = await resend.emails.send({
        from: 'AdmyBrand <noreply@admybrand.com>',
        to: email,
        subject: 'Thank you for contacting AdmyBrand',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937;">
            <h2 style="color: #2563eb;">Thank you for reaching out, ${name}!</h2>
            <p>We've received your message and our team will get back to you within 24-48 hours.</p>
            <div style="margin: 30px 0; padding: 20px; background-color: #f3f4f6; border-radius: 6px;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Your Message:</p>
              <p style="margin: 0; white-space: pre-line;">${message}</p>
            </div>
            <p>Best regards,<br>The AdmyBrand Team</p>
          </div>
        `,
      });
      console.log('Confirmation email sent:', userEmailResponse);

      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      );

    } catch (emailError) {
      console.error('Email sending error:', emailError);
      throw new Error(`Failed to send email: ${emailError.message}`);
    }

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
