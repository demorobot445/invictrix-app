import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const data = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GODADDY_EMAIL_USER,
        pass: process.env.GODADDY_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GODADDY_EMAIL_USER,
      to: process.env.RECEIVE_EMAIL,
      subject: "New Invictrix Connection Request",
      html: `
      <h3>New Submission</h3>
      <ul>
          <li><strong>Salutation:</strong> ${data.salutation}</li>
          <li><strong>Preferred Name:</strong> ${data.name}</li>
          <li><strong>Family Name:</strong> ${data.familyName}</li>
          <li><strong>Phone Number:</strong> ${data.number}</li>
          <li><strong>Email Address:</strong> ${data.email}</li>
          <li><strong>Your Profession:</strong> ${data.yourProfession}</li>
          <li><strong>City of Residence:</strong> ${data.cityOfResidence}</li>
          <li><strong>Current Memberships or Affiliations:</strong> ${data.membershipOrAffiliations}</li>
          <li><strong>How Did You Discover Invictrix?:</strong> ${data.discoverInvictrix}</li>
          <li><strong>Tell Us About Yourself:</strong> ${data.about}</li>
      </ul>
    `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Email sending failed", error);
      res.status(500).json({
        message: "Failed to send email",
        error: (error as { message: string }).message,
      });
    }
  } else if (req.method === "GET") {
    return res.status(200).json({ message: "GET request received" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
