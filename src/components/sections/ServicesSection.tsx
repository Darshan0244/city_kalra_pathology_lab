import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TestTube2, FlaskConical, Microscope, HeartPulse, Bone, ShieldCheck } from 'lucide-react'; // Added Bone, ShieldCheck

const services = [
  {
    icon: <TestTube2 className="h-10 w-10 text-accent" />,
    title: 'Blood Tests',
    description: 'Comprehensive blood analysis for various health markers, including CBC, lipid profiles, and hormonal assays.',
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-accent" />,
    title: 'Urine Analysis',
    description: 'Detailed urine tests to detect and manage a wide range of disorders, such as urinary tract infections and kidney disease.',
  },
  {
    icon: <Microscope className="h-10 w-10 text-accent" />,
    title: 'Biopsy & Cytology',
    description: 'Microscopic examination of tissues and cells to diagnose cancers and other pathological conditions.',
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-accent" />,
    title: 'ECG & Cardiac Markers',
    description: 'Electrocardiograms and blood tests for assessing heart health and diagnosing cardiac conditions.',
  },
  {
    icon: <Bone className="h-10 w-10 text-accent" />, // Placeholder for X-Ray / Radiology, as Lucide doesn't have a direct X-ray icon.
    title: 'Digital X-Ray',
    description: 'High-quality digital X-ray imaging for bone fractures, chest examinations, and other diagnostic needs.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'Health Packages',
    description: 'Customized health check-up packages for comprehensive wellness assessments and early disease detection.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We offer a wide array of diagnostic tests to cater to all your health needs, performed with precision and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4 inline-block">
                  {service.icon}
                </div>
                <CardTitle className="text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center text-foreground/90 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
