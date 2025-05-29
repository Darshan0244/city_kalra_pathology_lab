import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Users, TrendingUp } from 'lucide-react';

const achievements = [
  {
    imageSrc: 'https://placehold.co/400x300.png',
    imageAlt: 'Advanced Laboratory Equipment',
    title: 'State-of-the-Art Technology',
    description: 'We continuously invest in the latest diagnostic equipment to ensure unparalleled accuracy and efficiency in our testing processes.',
    dataAiHint: 'lab equipment modern',
    icon: <TrendingUp className="h-5 w-5 text-accent" />
  },
  {
    imageSrc: 'https://placehold.co/400x300.png',
    imageAlt: 'Certified Pathologists Team',
    title: 'Expert Team Accreditation',
    description: 'Our team of pathologists and technicians are highly skilled, certified, and dedicated to maintaining the highest standards of quality.',
    dataAiHint: 'scientists team lab',
    icon: <Users className="h-5 w-5 text-accent" />
  },
  {
    imageSrc: 'https://placehold.co/400x300.png',
    imageAlt: 'Community Health Initiative',
    title: 'Community Health Awards',
    description: 'Recognized for our contributions to community health through various awareness programs and free health camps.',
    dataAiHint: 'medical award community',
    icon: <CheckCircle className="h-5 w-5 text-accent" />
  },
];

export default function WorksSection() {
  return (
    <section id="works" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Milestones & Achievements
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Highlighting our commitment to excellence and patient care through significant accomplishments and advancements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={achievement.imageSrc}
                    alt={achievement.imageAlt}
                    fill={true}
                    style={{objectFit:"cover"}}
                    className="transform hover:scale-105 transition-transform duration-300"
                    data-ai-hint={achievement.dataAiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-xl mb-2 text-primary flex items-center">
                  {achievement.icon} <span className="ml-2">{achievement.title}</span>
                </CardTitle>
                <CardDescription className="text-foreground/90 leading-relaxed">
                  {achievement.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
