
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters long." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const validatedFields = contactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // In a real app, you would process the data.
  console.log("Contact form submitted:", validatedFields.data);

  // TODO: Implement actual email sending logic here.
  // This would involve using a service like Nodemailer (with an SMTP provider like Gmail/Outlook, or a transactional email service),
  // SendGrid, Resend, AWS SES, etc. You'll need to install their SDK, configure API keys/credentials securely (e.g., via environment variables),
  // and then call their API to send the email.
  //
  // Conceptual example (this will NOT actually send an email):
  //
  // import nodemailer from 'nodemailer'; // You would need to `npm install nodemailer`
  //
  // async function sendEmailToAdmin(data: z.infer<typeof contactFormSchema>) {
  //   // const transporter = nodemailer.createTransport({
  //   //   service: 'YourEmailServiceProvider', // e.g., 'gmail'
  //   //   auth: {
  //   //     user: process.env.EMAIL_USER,
  //   //     pass: process.env.EMAIL_PASS,
  //   //   },
  //   // });
  //   //
  //   // const mailOptions = {
  //   //   from: process.env.EMAIL_FROM, // Your 'from' address
  //   //   to: 'Satnamalhan@gmail.com', // Admin's email
  //   //   subject: `New Contact Form Submission: ${data.subject}`,
  //   //   text: `
  //   //     Name: ${data.name}
  //   //     Email: ${data.email}
  //   //     Phone: ${data.phone}
  //   //     Subject: ${data.subject}
  //   //     Message: ${data.message}
  //   //   `,
  //   //   // html: "<p>HTML version of the message</p>" // Optional
  //   // };
  //   //
  //   // await transporter.sendMail(mailOptions);
  //   // console.log('Email sent to admin (simulated).');
  // }
  //
  // try {
  //   // await sendEmailToAdmin(validatedFields.data);
  // } catch (error) {
  //   console.error("Failed to send contact form email (simulated):", error);
  //   // Optionally, you could return a specific error message to the user
  //   // or log this error to a monitoring service.
  // }
  // For now, we are only logging to the console.


  // Simulate an API call or database operation
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you for your message! We will get back to you soon.",
    success: true,
  };
}
