import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-background via-secondary/30 to-background pt-16 px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/City_Kalra.png"
          alt="City Kalra Pathology Laboratory health check-up camp"
          fill={true}
          style={{objectFit:"cover", filter: "blur(1.5px)"}}
          priority
          data-ai-hint="health camp"
        />
        <div className="absolute inset-0 bg-gray-900/60"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-white drop-shadow-lg">City Kalra</span>
          <br />
          <span className="text-accent drop-shadow-lg">Pathology Laboratory</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 drop-shadow-sm max-w-2xl mx-auto leading-relaxed">
          Precise Diagnostics, Trusted Care. Your Health, Our Priority.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
            <Link href="#services">Explore Our Services</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg shadow-xl hover:shadow-accent/30 transition-all duration-300 transform hover:scale-105">
            <Link href="#contact">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}