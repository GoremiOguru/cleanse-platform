import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendPasswordResetEmail(email: string, token: string) {
  if (!resend) {
    console.error("RESEND_API_KEY is not set. Email not sent.");
    return;
  }
  
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/auth/reset-password?token=${token}&email=${encodeURIComponent(email)}`;
  
  try {
    await resend.emails.send({
      from: 'Cleanse <onboarding@resend.dev>',
      to: email,
      subject: 'Reset your password',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e4e4e7; border-radius: 12px; padding: 24px; text-align: center;">
          <h1 style="color: #059669; font-size: 24px; margin-bottom: 8px;">cleanse.</h1>
          <h2 style="color: #18181b; font-size: 20px; font-weight: 600; margin-bottom: 16px;">Password Reset Request</h2>
          <p style="color: #52525b; font-size: 16px; margin-bottom: 24px;">
            You requested to reset your password. Click the button below to choose a new password. This link will expire in 2 hours.
          </p>
          <a href="${resetLink}" style="display: inline-block; background-color: #059669; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 16px;">
            Reset Password
          </a>
          <p style="color: #a1a1aa; font-size: 14px; margin-top: 24px;">
            If you didn't request this, you can safely ignore this email.
          </p>
        </div>
      `
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}
