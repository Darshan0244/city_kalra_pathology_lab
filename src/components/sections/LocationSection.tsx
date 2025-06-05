
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LocationSection() {
  const labAddress = "City Kalra Pathology Laboratory, Sirsa Rd, opposite civil hospital, Sector 14, Hisar, Haryana 125001";
  // The Google Maps URL for the iframe src attribute.
  const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.8472749447924!2d75.71555317615224!3d29.16917247537596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232cdbf750a29%3A0xcf8c1e8842b0fdaa!2sCity%20Kalra%20Pathology%20Laboratory!5e0!3m2!1sen!2sin!4v1749102978312!5m2!1sen!2sin";

  return (
    <section id="location" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Visit Our Lab
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Find us easily for all your diagnostic needs. We are conveniently located to serve you better.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Card className="shadow-lg flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Contact & Location Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex-grow">
              <div>
                <div className="flex items-start mb-3">
                  <MapPin className="mr-3 h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Our Address</h3>
                    <p className="text-foreground/90">{labAddress}</p>
                  </div>
                </div>
                {/* Removed Get Directions button as iframe provides this */}
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-accent flex-shrink-0 mt-1" />
                 <div>
                    <p className="text-foreground/90">9896187582</p>
                    <p className="text-foreground/90">9729334048</p>
                    <p className="text-foreground/90">9728368076</p>
                  </div>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground/90">Satnamalhan@gmail.com</span>
              </div>
              <div className="flex items-start">
                <Clock className="mr-3 h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Operating Hours</h3>
                  <p className="text-foreground/90">Monday - Sunday: <strong>8:00 AM - 9:00 PM</strong></p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="rounded-lg overflow-hidden shadow-xl aspect-square md:aspect-auto">
            <iframe
              src={iframeSrc}
              className="w-full h-full"
              style={{ border:0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="City Kalra Pathology Laboratory Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
