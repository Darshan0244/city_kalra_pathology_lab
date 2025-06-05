
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
          <div className="rounded-lg overflow-hidden shadow-xl aspect-square">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Placeholder image for lab location"
              width={600}
              height={600}
              className="w-full h-full object-cover"
              data-ai-hint="lab building"
            />
          </div>
          
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

