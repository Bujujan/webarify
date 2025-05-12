import Image from "next/image"

import { services } from "@/lib/services-data"
import ButtonSlug from "@/components/ui/buttonslug"
import { useLocale, useTranslations } from "next-intl";
import CallToAction from "@/components/CallToAction";

export default function OurServices() {

  const t = useTranslations('ServicesPage');

  const locale = useLocale();

  const benefits = [
    {
      title:t("whyChooseWebarify.benefits.1.title"),
      description:t("whyChooseWebarify.benefits.1.description")
    },
    {
      title:t("whyChooseWebarify.benefits.2.title"),
      description:t("whyChooseWebarify.benefits.2.description")
    },
    {
      title:t("whyChooseWebarify.benefits.3.title"),
      description:t("whyChooseWebarify.benefits.3.description")
    },
    {
      title:t("whyChooseWebarify.benefits.4.title"),
      description:t("whyChooseWebarify.benefits.4.description")
    },
    
  ];


  return (
    <div className="min-h-screen pt-[80px]">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative">
        {/* Services Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#278783] text-sm uppercase">{t('hero.title')}</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-8">{t('hero.headline')}</h1>
          <p className="text-lg leading-relaxed">
          {t('hero.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-48 relative">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-[#141414]/70 mb-4">{service.shortDescription}</p>
                <ButtonSlug href={`/${locale}/our-services/${service.slug}`} className="">
                    {t('learnmore')}
                </ButtonSlug>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">{t('whyChooseWebarify.title')}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-[#141414]/80">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <CallToAction />
      </main>
    </div>
  )
}
