'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, type ContactFormState } from '@/app/actions';
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
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto" size="lg">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

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

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        form.reset(); // Reset form on successful submission
      } else {
        toast({
          title: "Error",
          description: state.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);
  
  // Update form errors from server action state
  useEffect(() => {
    if (state.errors) {
      const errors = state.errors;
      (Object.keys(errors) as Array<keyof ContactFormData>).forEach((key) => {
        if (errors[key] && errors[key]!.length > 0) {
          form.setError(key, { type: 'server', message: errors[key]![0] });
        }
      });
    }
  }, [state.errors, form]);


  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-foreground/90">Full Name</Label>
          <Input id="name" name="name" placeholder="John Doe" {...form.register('name')} className="bg-background border-border focus:ring-primary" />
          {form.formState.errors.name && <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="text-foreground/90">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="john.doe@example.com" {...form.register('email')} className="bg-background border-border focus:ring-primary" />
          {form.formState.errors.email && <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone" className="text-foreground/90">Phone Number (Optional)</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" {...form.register('phone')} className="bg-background border-border focus:ring-primary" />
          {form.formState.errors.phone && <p className="text-sm text-destructive mt-1">{form.formState.errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="subject" className="text-foreground/90">Subject</Label>
          <Input id="subject" name="subject" placeholder="Inquiry about services" {...form.register('subject')} className="bg-background border-border focus:ring-primary" />
          {form.formState.errors.subject && <p className="text-sm text-destructive mt-1">{form.formState.errors.subject.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="message" className="text-foreground/90">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message..." rows={5} {...form.register('message')} className="bg-background border-border focus:ring-primary" />
        {form.formState.errors.message && <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>}
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
