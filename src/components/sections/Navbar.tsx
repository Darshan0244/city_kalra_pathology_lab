'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
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
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <div className="relative">
            <Image
              src="/images/KalraLabLogo copy.png"
              alt="City Kalra Pathology Laboratory Logo"
              width={50}
              height={50}
              className="rounded-full shadow-md"
            />
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-primary leading-tight">
              City Kalra
              <br />
              <span className="text-sm font-medium text-accent">Pathology Laboratory</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} legacyBehavior>
              <a className="text-foreground hover:text-primary transition-colors font-medium text-sm relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </Link>
          ))}
          <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
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
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/KalraLabLogo copy.png"
                    alt="City Kalra Pathology Laboratory Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h1 className="text-lg font-bold text-primary">City Kalra</h1>
                    <span className="text-xs text-accent">Pathology Laboratory</span>
                  </div>
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
                  <Button asChild className="mt-6" onClick={() => setIsMobileMenuOpen(false)}>
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