import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About City Kalra Pathology Laboratory
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Dedicated to providing accurate and timely diagnostic services to our community with state-of-the-art technology and a compassionate approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-foreground text-left leading-relaxed text-lg">
                City Kalra Pathology Laboratory has been a cornerstone of health in our community for over a decade. Founded on the principles of precision, reliability, and patient-centric care, we strive to deliver the highest quality diagnostic services.
              </p>
              <p className="text-foreground text-left leading-relaxed text-lg">
                Our team of experienced pathologists and technicians are committed to utilizing the latest advancements in medical technology to ensure you receive the most accurate results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    To provide accessible, high-quality diagnostic services that empower patients and physicians with critical health information.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-3">Our Team</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    A dedicated group of certified professionals passionate about accuracy and patient well-being.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/4.png"
                alt="City Kalra Pathology Laboratory interior"
                width={600}
                height={450}
                className="w-full h-full object-cover"
                data-ai-hint="modern lab team"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-semibold text-primary">Certified Lab</p>
                  <p className="text-sm text-foreground/70">ISO Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-foreground leading-relaxed max-w-4xl mx-auto">
            We believe in continuous improvement and adhere to stringent quality control measures to maintain the highest standards of service. Your health is our utmost priority, and we're committed to being your trusted partner in healthcare.
          </p>
        </div>
      </div>
    </section>
  );
}