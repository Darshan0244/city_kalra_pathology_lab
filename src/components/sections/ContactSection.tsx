import ContactForm from './ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We're here to help. Send us a message for inquiries, appointments, or any questions you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-white p-10 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-semibold text-primary mb-8">Send Us a Message</h3>
            <ContactForm />
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-semibold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6 text-foreground/90">
                <div className="flex items-start group">
                  <div className="p-3 bg-accent/10 rounded-full mr-4 group-hover:bg-accent/20 transition-colors">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Address</h4>
                    <span className="leading-relaxed">City Kalra Pathology Laboratory, Sirsa Rd, opposite civil hospital, Sector 14, Hisar, Haryana 125001</span>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="p-3 bg-primary/10 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone Numbers</h4>
                    <div className="space-y-1">
                      <p>9896187582</p>
                      <p>9729334048</p>
                      <p>9728368076</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="p-3 bg-accent/10 rounded-full mr-4 group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <span>Satnamalhan@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Business Hours</h3>
              </div>
              <div className="text-foreground/90">
                <p className="text-lg">Monday - Sunday</p>
                <p className="text-2xl font-bold text-primary">8:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}