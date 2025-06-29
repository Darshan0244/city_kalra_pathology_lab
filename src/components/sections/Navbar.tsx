'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg border-b border-primary/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Text Only */}
        <Link href="#home" className="hover:opacity-80 transition-opacity">
          <div>
            <h1 className="text-xl font-bold text-primary leading-tight">
              City Kalra
              <br />
              <span className="text-sm font-medium text-accent">Pathology Laboratory</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} legacyBehavior>
              <a className="text-foreground hover:text-primary transition-colors font-medium text-sm relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </Link>
          ))}
          <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <Link href="#contact">Book Test</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-6">
              <SheetTitle>
                <div>
                  <h1 className="text-lg font-bold text-primary">City Kalra</h1>
                  <span className="text-xs text-accent">Pathology Laboratory</span>
                </div>
              </SheetTitle>
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <SheetClose key={item.label} asChild>
                    <Link href={item.href} legacyBehavior>
                      <a className="text-lg text-foreground hover:text-primary transition-colors py-2 font-medium border-b border-gray-100 last:border-b-0" onClick={() => setIsMobileMenuOpen(false)}>
                        {item.label}
                      </a>
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-white" onClick={() => setIsMobileMenuOpen(false)}>
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