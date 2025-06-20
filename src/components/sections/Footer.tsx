import Link from 'next/link';
import { Facebook, Instagram, TestTube2 } from 'lucide-react'; 
import Logo from '@/components/Logo';

const navItems = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Location', href: '#location' },
  { label: 'Contact Us', href: '#contact' },
];

const socialLinks = [
  { icon: <Facebook className="h-7 w-7" />, href: 'https://www.facebook.com/citykalrapathologylaboratory', label: 'Facebook' },
  { icon: <Instagram className="h-7 w-7" />, href: 'https://www.instagram.com/citykalrapathologylaboratory/', label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return ( 
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-16 mb-8 pb-8 border-b border-primary-foreground/20 items-start md:text-left text-center">
          {/* Column 1: Logo and About */}
          <div>
            <Logo className="text-primary-foreground mb-4" iconSize="h-8 w-8" textSize="text-2xl" />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              City Kalra Pathology Laboratory is dedicated to providing precise diagnostic services with a focus on patient care and technological advancement.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-1 md:mt-0 text-left">
            <h3 className="text-lg font-semibold mb-2 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2 text-left p-0">
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
          <div className="md:mt-0 text-left">
            <h3 className="text-lg font-semibold mb-2 text-primary-foreground">Social Links</h3>
            <div className="mt-2 flex space-x-3 justify-start p-0">
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

const mobileLeftAlignStyles = `
  @media (max-width: 767px) {
    margin-left: 0 !important;
    text-align: left !important;

    * {
        text-align: left !important;
    }
  }
`;

if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = mobileLeftAlignStyles;
  document.head.appendChild(styleSheet);
}
