import Link from 'next/link';
import { Facebook, Instagram, TestTube2 } from 'lucide-react'; // Removed Twitter, Linkedin
import Logo from '@/components/Logo';

const navItems = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Location', href: '#location' },
  { label: 'Contact Us', href: '#contact' },
];

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/citykalrapathologylaboratory', label: 'Facebook' },
  { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/citykalrapathologylaboratory/', label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-primary-foreground/20">
          {/* Column 1: Logo and About */}
          <div>
            <Logo className="text-primary-foreground mb-4" iconSize="h-8 w-8" textSize="text-2xl" />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              City Kalra Pathology Laboratory is dedicated to providing precise diagnostic services with a focus on patient care and technological advancement.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} legacyBehavior>
                    <a className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors">
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Contact Us</h3>
            <address className="not-italic space-y-2 text-primary-foreground/80">
              <p>City Kalra Pathology Laboratory, Sirsa Rd, opposite civil hospital, Sector 14, Hisar, Haryana 125001</p>
              <p>Phone: 9896187582, 9729334048, 9728368076</p>
              <p>Email: info@kalrapathlab.com</p>
            </address>
            <div className="mt-4 flex space-x-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  aria-label={social.label} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-primary-foreground/70">
          <p>&copy; {currentYear} City Kalra Pathology Laboratory. All Rights Reserved.</p>
          <p className="mt-1">
            Designed with care for your health.
          </p>
        </div>
      </div>
    </footer>
  );
}
