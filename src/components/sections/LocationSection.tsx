import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LocationSection() {
  const labAddress = "City Kalra Pathology Laboratory, Sirsa Rd, opposite civil hospital, Sector 14, Hisar, Haryana 125001";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(labAddress)}`;

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
                <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent/10 hover:text-accent">
                  <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </Link>
                </Button>
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
                <span className="text-foreground/90">info@kalrapathlab.com</span>
              </div>
              <div className="flex items-start">
                <Clock className="mr-3 h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Operating Hours</h3>
                  <p className="text-foreground/90">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-foreground/90">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-foreground/90">Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="rounded-lg overflow-hidden shadow-xl aspect-square md:aspect-auto">
            <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Lab Location Map"
                width={600}
                height={600}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                data-ai-hint="city map location pin"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
