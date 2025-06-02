
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-background via-secondary/50 to-background pt-20 px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/City_Kalra.png"
          alt="City Kalra Pathology Laboratory health check-up camp"
          fill={true}
               style={{objectFit:"cover", filter: "blur(1.5px)"}}
          priority // Add a slight blur effect
          data-ai-hint="health camp"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        {/* The gradient overlay below was causing the "white foggy type" effect and has been removed.
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        */}
      </div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="text-primary drop-shadow-md">City Kalra</span> <span className="text-accent drop-shadow-md">Pathology Laboratory</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 drop-shadow-sm">
          Precise Diagnostics, Trusted Care. Your Health, Our Priority.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" asChild className="w-full sm:w-auto shadow-lg hover:shadow-primary/30 transition-shadow">
            <Link href="#services">Explore Our Services</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto shadow-lg hover:shadow-accent/30 transition-shadow border-primary">
            <Link href="#contact">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
