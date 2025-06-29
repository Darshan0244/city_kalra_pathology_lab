import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react'; 

const navItems = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Location', href: '#location' },
  { label: 'Contact Us', href: '#contact' },
];

const socialLinks = [
  { icon: <Facebook className="h-6 w-6" />, href: 'https://www.facebook.com/citykalrapathologylaboratory', label: 'Facebook' },
  { icon: <Instagram className="h-6 w-6" />, href: 'https://www.instagram.com/citykalrapathologylaboratory/', label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return ( 
    <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-8 border-b border-primary-foreground/20">
          {/* Column 1: About */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">City Kalra</h3>
              <p className="text-lg opacity-90">Pathology Laboratory</p>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed max-w-sm mx-auto md:mx-0">
              City Kalra Pathology Laboratory is dedicated to providing precise diagnostic services with a focus on patient care and technological advancement.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-6 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} legacyBehavior>
                    <a className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all duration-300 inline-block">
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-6 text-primary-foreground">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  aria-label={social.label} 
                  className="p-3 bg-white/10 rounded-full text-primary-foreground hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                > 
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-primary-foreground/80 text-sm">
                📞 9728368076<br />
                📧 Satnamalhan@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-primary-foreground/80">
          <p className="text-lg font-medium">&copy; {currentYear} City Kalra Pathology Laboratory. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            Designed with care for your health • Hisar, Haryana
          </p>
        </div>
      </div>
    </footer>
  );
}