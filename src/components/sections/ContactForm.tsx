
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const handleClientSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    const emailTo = "Satnamalhan@gmail.com";
    const emailSubject = `Contact Form: ${data.subject}`;
    
    const bodyLines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Message: ${data.message}`
    ];
    const emailBody = bodyLines.join('\n');

    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    try {
      window.location.href = mailtoLink;
      toast({
        title: "Success!",
        description: "Your email client should open shortly to send the message. Please complete sending it from there.",
      });
      form.reset();
    } catch (error) {
      console.error("Failed to open mailto link:", error);
      toast({
        title: "Error",
        description: "Could not open email client. Please try copying the details manually.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (type === 'change' && name && form.formState.errors[name]) {
        form.clearErrors(name as keyof ContactFormData);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);


  return (
    <form onSubmit={form.handleSubmit(handleClientSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-foreground/90">Full Name</Label>
          <Input id="name" placeholder="John Doe" {...form.register('name')} className="bg-background border-border focus:ring-primary" />
          {form.formState.errors.name && <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="text-foreground/90">Email Address</Label>
          <Input id="email" type="email" placeholder="john.doe@example.com" {...form.register('email')} className="bg-background border-border focus:ring-primary" />
          {form.formState.errors.email && <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone" className="text-foreground/90">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="(123) 456-7890" {...form.register('phone')} className="bg-background border-border focus:ring-primary" />
          {form.formState.errors.phone && <p className="text-sm text-destructive mt-1">{form.formState.errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="subject" className="text-foreground/90">Subject</Label>
          <Input id="subject" placeholder="Inquiry about services" {...form.register('subject')} className="bg-background border-border focus:ring-primary" />
          {form.formState.errors.subject && <p className="text-sm text-destructive mt-1">{form.formState.errors.subject.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="message" className="text-foreground/90">Message</Label>
        <Textarea id="message" placeholder="Your message..." rows={5} {...form.register('message')} className="bg-background border-border focus:ring-primary" />
        {form.formState.errors.message && <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>}
      </div>
      <div>
        <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto" size="lg">
          {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {isSubmitting ? 'Processing...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
