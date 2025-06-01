
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#works' },
  { label: 'Location', href: '#location' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md shadow-md text-primary-foreground"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo iconSize="h-7 w-7" textSize="text-xl" showText={false} />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} legacyBehavior>
              <a className="text-foreground hover:text-primary transition-colors font-medium">
                {item.label}
              </a>
            </Link>
          ))}
          <Button asChild>
            <Link href="#contact">Book Test</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
               <SheetTitle>
                  <Logo iconSize="h-7 w-7" textSize="text-xl" showText={false} />
               </SheetTitle>
              <div className="flex flex-col space-y-6 mt-6">
                {navItems.map((item) => (
                  <SheetClose key={item.label} asChild>
                    <Link href={item.href} legacyBehavior>
                      <a className="text-lg text-foreground hover:text-primary transition-colors py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                        {item.label}
                      </a>
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="#contact">Book Test</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
