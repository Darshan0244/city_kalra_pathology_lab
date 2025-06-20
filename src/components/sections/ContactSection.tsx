import ContactForm from './ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We're here to help. Send us a message for inquiries, appointments, or any questions you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 md:gap-12">
          <div className="lg:col-span-3 bg-card p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
          <div className="lg:col-span-2 space-y-8">
             <div className="bg-card p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>
                <div className="space-y-4 text-foreground/90">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-accent flex-shrink-0 mt-1" />
                    <span>City Kalra Pathology Laboratory, Sirsa Rd, opposite civil hospital, Sector 14, Hisar, Haryana 125001</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p>9896187582</p>
                      <p>9729334048</p>
                      <p>9728368076</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                    <span>Satnamalhan@gmail.com</span>
                  </div>
                </div>
             </div>
             <div className="bg-card p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold text-primary mb-4">Business Hours</h3>
                <div className="space-y-1 text-foreground/90">
                    <p>Monday - Sunday: <strong>8:00 AM - 9:00 PM</strong></p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
