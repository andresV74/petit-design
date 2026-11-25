import { Heart, MapPin, Shield } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { ContactForm } from '../ContactForm.tsx';

export function WhyChooseUsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Heart,
      title: t('benefits.personalization'),
      description: t('benefits.personalization.desc'),
    },
    {
      icon: MapPin,
      title: t('benefits.handmade'),
      description: t('benefits.handmade.desc'),
    },
    {
      icon: Shield,
      title: t('benefits.materials'),
      description: t('benefits.materials.desc'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-background">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12">
          {t('benefits.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<ContactForm />

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl bg-white border border-border/50 shadow-sm"
              >
                <div className="shrink-0 p-3 h-fit rounded-full bg-mint/10 text-mint-dark">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
