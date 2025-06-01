import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About City Kalra Pathology Laboratory
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Dedicated to providing accurate and timely diagnostic services to our community with state-of-the-art technology and a compassionate approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-foreground text-left leading-relaxed">
              City Kalra Pathology Laboratory has been a cornerstone of health in our community for over a decade. Founded on the principles of precision, reliability, and patient-centric care, we strive to deliver the highest quality diagnostic services. Our team of experienced pathologists and technicians are committed to utilizing the latest advancements in medical technology to ensure you receive the most accurate results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Target className="h-10 w-10 text-accent mb-3" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
                  <p className="text-sm text-foreground/90">
                    To provide accessible, high-quality diagnostic services that empower patients and physicians with critical health information.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-accent mb-3" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Our Team</h3>
                  <p className="text-sm text-foreground/90">
                    A dedicated group of certified professionals passionate about accuracy and patient well-being.
                  </p>
                </CardContent>
              </Card>
            </div>
             <p className="text-foreground text-left leading-relaxed">
              We believe in continuous improvement and adhere to stringent quality control measures to maintain the highest standards of service. Your health is our utmost priority.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl aspect-video">
            <Image
              src="https://placehold.co/600x450.png"
              alt="City Kalra Pathology Laboratory interior"
              width={600}
              height={450}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              data-ai-hint="modern lab team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
