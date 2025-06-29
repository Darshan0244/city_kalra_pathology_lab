'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, TestTube2 } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Test Tube Icon */}
        <Link href="#home" className="hover:opacity-80 transition-opacity">
          <div className="flex items-center space-x-1">
            <TestTube2 className="h-8 w-8 text-primary" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary leading-tight">
                City Kalra
                <br />
                <span className="text-xs font-medium text-accent">Pathology Laboratory</span>
              </h1>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} legacyBehavior>
              <a className="text-foreground hover:text-primary transition-colors font-medium text-base relative group py-2">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </Link>
          ))}
          <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
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
            <SheetContent side="right" className="w-[300px] bg-white/90 backdrop-blur-xl p-6">
              <SheetTitle>
                <div className="flex items-center space-x-2">
                  <TestTube2 className="h-7 w-7 text-primary" />
                  <div>
                    <h1 className="text-lg font-bold text-primary">City Kalra</h1>
                    <span className="text-sm text-accent">Pathology Laboratory</span>
                  </div>
                </div>
              </SheetTitle>
              <div className="flex flex-col space-y-4 mt-8">
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