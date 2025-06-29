import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TestTube2, FlaskConical, Microscope, HeartPulse, Bone, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <TestTube2 className="h-12 w-12 text-accent" />,
    title: 'Blood Tests',
    description: 'Comprehensive blood analysis for various health markers, including CBC, lipid profiles, and hormonal assays.',
  },
  {
    icon: <FlaskConical className="h-12 w-12 text-accent" />,
    title: 'Urine Analysis',
    description: 'Detailed urine tests to detect and manage a wide range of disorders, such as urinary tract infections and kidney disease.',
  },
  {
    icon: <Microscope className="h-12 w-12 text-accent" />,
    title: 'Biopsy & Cytology',
    description: 'Microscopic examination of tissues and cells to diagnose cancers and other pathological conditions.',
  },
  {
    icon: <HeartPulse className="h-12 w-12 text-accent" />,
    title: 'ECG & Cardiac Markers',
    description: 'Electrocardiograms and blood tests for assessing heart health and diagnosing cardiac conditions.',
  },
  {
    icon: <Bone className="h-12 w-12 text-accent" />,
    title: 'Digital X-Ray',
    description: 'High-quality digital X-ray imaging for bone fractures, chest examinations, and other diagnostic needs.',
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-accent" />,
    title: 'Health Packages',
    description: 'Customized health check-up packages for comprehensive wellness assessments and early disease detection.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We offer a wide array of diagnostic tests to cater to all your health needs, performed with precision and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="group shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transform hover:-translate-y-2">
              <CardHeader className="items-center text-center pb-4">
                <div className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-foreground/90 leading-relaxed text-base">
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