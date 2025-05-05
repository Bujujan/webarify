import Image from "next/image"
// import { Star } from "lucide-react"
import Button from "../../components/ui/button"
import { Metadata } from "next";
import {useTranslations} from 'next-intl';
import Team from "@/components/Team";
import Hero from "@/components/Hero";


export const metadata: Metadata = {
  title: "Webarify | Agence Web, Branding & Solutions Digitales",
  description: "Webarify est une agence créative de design web et de branding basée au Maroc, au service des entreprises du monde entier. Nous concevons des sites web rapides et responsives, créons des identités de marque uniques, et développons des solutions digitales intelligentes telles que des chatbots et des stratégies SEO pour aider les marques à se développer en ligne. | Webarify is a creative web design and branding agency based in Morocco, serving businesses worldwide. We craft fast, responsive websites, build unique brand identities, and develop smart digital solutions like chatbots and SEO strategies to help brands grow online.",
  keywords: [
    // English
    "web design agency Morocco",
    "affordable web development",
    "professional branding services",
    "creative web agency",
    "global digital agency",
    "responsive website design",
    "custom websites at affordable prices",
    "website and branding solutions",
    "modern web design",
    "business growth online",
    // French
    "agence de design web Maroc",
    "développement web abordable",
    "services de branding professionnels",
    "agence web créative",
    "agence digitale internationale",
    "création de site responsive",
    "sites web personnalisés à prix abordables",
    "solutions de site web et branding",
    "design web moderne",
    "croissance des entreprises en ligne"
  ],
};


export default function Home() {

  const t = useTranslations('HomePage');

  const problems = [
    t("whyChooseUs.pain.1"),
    t("whyChooseUs.pain.2"),
    t("whyChooseUs.pain.3"),
    t("whyChooseUs.pain.4"),
    t("whyChooseUs.pain.5"),
    t("whyChooseUs.pain.6"),
    t("whyChooseUs.pain.7"),
    t("whyChooseUs.pain.8"),
  ];
  const benefits = [
    t("whyChooseUs.benefits.1"),
    t("whyChooseUs.benefits.2"),
    t("whyChooseUs.benefits.3"),
    t("whyChooseUs.benefits.4"),
    t("whyChooseUs.benefits.5"),
    t("whyChooseUs.benefits.6"),
    t("whyChooseUs.benefits.7"),
    t("whyChooseUs.benefits.8"),
  ];

  const processes = [
    {
      title:t("Process.steps.1.title"),
      description:t("Process.steps.1.description")
    },
    {
      title:t("Process.steps.2.title"),
      description:t("Process.steps.2.description")
    },
    {
      title:t("Process.steps.3.title"),
      description:t("Process.steps.3.description")
    },
    {
      title:t("Process.steps.4.title"),
      description:t("Process.steps.4.description")
    },
    
  ];

  

  return (
    <div className="min-h-screen">

      <Hero />


      {/* Trusted By */}
      {/* <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-sm text-[#278783] mb-2">Trusted by</h3>
        <div className="flex justify-center gap-8 mt-4">
          <div className="bg-gray-500 w-16 h-16 rounded"></div>
          <div className="bg-gray-500 w-16 h-16 rounded"></div>
          <div className="bg-gray-500 w-16 h-16 rounded"></div>
          <div className="bg-gray-500 w-16 h-16 rounded"></div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-sm text-[#278783] mb-2">{t('whyChooseUs.title')}</h3>
          <h2 className="text-3xl font-bold">{t('whyChooseUs.subtitle')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-end">
          {/* Before Column */}
          <div>
            <h4 className="mb-4 text-[#141414]/60 text-center">{t('whyChooseUs.before')}</h4>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="space-y-6">
              {problems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-sm font-semibold">{item}</p>
                </div>
              ))}
              </div>
            </div>
          </div>

          {/* After Column */}
          <div>
            <div className="flex flex-col mb-4 w-full justify-center items-center">
              <h4 className="mb-4 text-[#141414]/60">{t('whyChooseUs.after')}</h4>
              <Image
                src="/assets/images/webarifylogo.png"
                alt="Webarify Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="space-y-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-sm font-semibold">{item}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-8">
        <div className="">
          <h2 className="text-4xl md:text-5xl md:max-w-3xl lg:text-7xl font-bold leading-tight">
          {t('cta.title')}
          </h2>
          <p className="mt-4 mb-4 text-[#141414]/80">
            {t('cta.subtitle')}
          </p>
          <Button text="Start my project" className="w-full"/> 
        </div>
        <div className="">
          <Image src="/assets/images/3dthumbsup.png" alt="Thumbs up"
          width={800} height={400} className="w-full h-full" />
        </div>
      </section>

      {/* How We Work */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-sm text-[#278783] mb-2 text-center">{t('Process.title')}</h3>
        <h2 className="text-3xl font-bold text-center mb-12">{t('Process.subtitle')}</h2>

        <div className="max-w-3xl mx-auto space-y-12">
          {processes.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="min-w-8">
                <div className="w-8 h-8 bg-[#278783] text-white flex items-center justify-center rounded">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-[#141414]/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <Team />
    </div>
  )
}
