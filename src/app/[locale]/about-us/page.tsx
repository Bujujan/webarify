import Image from "next/image"
import { Linkedin } from 'lucide-react';
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Team from "@/components/Team";
// import { Button } from "@/components/ui/button-custom"

export const metadata: Metadata = {
  title: "Webarify | Agence Web & Branding au Maroc",
  description: "Learn more about Webarify — a Morocco-based web and branding agency with a global reach. Découvrez Webarify — une agence web et de branding basée au Maroc avec une portée internationale.",
  keywords: [
    // English
    "about Webarify",
    "creative team Morocco",
    "affordable digital solutions",
    "web agency with global reach",
    "branding experts Morocco",
    "website creators Morocco",
    // French
    "à propos de Webarify",
    "équipe créative Maroc",
    "solutions digitales abordables",
    "agence web internationale",
    "experts en branding Maroc",
    "créateurs de sites web Maroc"
  ]
};

export default function AboutUs() {

  const t = useTranslations('AboutPage');

  return (
    <div className="min-h-screen">
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative">
        {/* Email sidebar */}
        {/* <div className="absolute left-0 top-1/4 transform -rotate-90 origin-left hidden md:block">
          <a href="mailto:webgrify@gmail.com" className="text-2XL text-[#141414]/70">
            Email Us - webgrify@gmail.com
          </a>
        </div> */}

        {/* About Us Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#278783] text-sm uppercase">{t('hero.title')}</span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mt-4 mb-8">
            {t('hero.headline')}
          </h1>
          <p className="text-xs leading-relaxed md:text-xl">
            {/* We are <span className="font-bold">Webarify</span>, a team of{" "}
            <span className="font-bold">software engineering</span> students with a shared passion for building{" "}
            <span className="font-bold">high-quality, scalable, and innovative web solutions</span>. Our journey started
            with a simple idea: to use our technical expertise and creative vision to help businesses{" "}
            <span className="font-bold">establish a strong online presence</span>. */}
            {t('hero.description')}
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-20">
          <Image
            src="/assets/images/aboutusimage.png"
            alt="Team working on web development"
            width={600}
            height={400}
            className="max-w-full"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
            {/* Our Story Section */}
            <div className="grid md:grid-cols-3 lg:max-w-[1200px] gap-8 mb-20 justify-end">
                <div>
                    <span className="text-[#278783] text-sm">{t('story.sectionTitle')}</span>
                    <h2 className="text-3xl font-bold mt-2">{t('story.title')}</h2>
                </div>
                <div className="md:col-span-2">
                    <p className="text-lg mb-4">
                    {/* <span className="font-bold">Webarify</span> was born from a simple idea—
                    <span className="font-bold">to turn creativity and code into impactful digital experiences</span>. As
                    software engineering students, we saw businesses struggling with outdated websites and ineffective
                    branding. We knew we could do better. */}
                    {t('story.description')}
                    </p>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="grid md:grid-cols-3 lg:max-w-[1200px] gap-8 mb-20">
                <div>
                    <h2 className="text-3xl font-bold">{t('mission.sectionTitle')}</h2>
                </div>
                <div className="md:col-span-2">
                    <p className="text-lg mb-4">
                    {/* What started as passion projects became a mission: to{" "}
                    <span className="font-bold">build modern, high-performing web solutions</span> that solve real problems.
                    Today, we help brands and businesses <span className="font-bold">stand out online</span> with sleek,
                    scalable, and innovative <span className="font-bold">web development, UI/UX design, and branding</span>{" "}
                    that elevate their digital presence. */}
                    {t('story.description')}
                    </p>
                </div>
            </div>
        </div>

        

        {/* Team Section */}
        <Team />
      </main>
    </div>
  )
}
