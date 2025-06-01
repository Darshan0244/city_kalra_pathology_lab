import { TestTube2 } from 'lucide-react'; 

interface LogoProps {
  className?: string;
  iconSize?: string; // e.g., "h-8 w-8"
  textSize?: string; // e.g., "text-2xl"
  showText?: boolean; // New prop to control text visibility
}

const Logo = ({ className, iconSize = "h-8 w-8", textSize = "text-2xl", showText = true }: LogoProps) => {
  return (
    <a href="#home" className={`flex items-center space-x-2 font-bold text-primary ${className}`}>
      <TestTube2 className={`${iconSize}`} />
      {showText && <span className={`${textSize}`}>City Kalra Pathology Laboratory</span>}
    </a>
  );
};

export default Logo;
