import Image from "next/image"
// import { Star } from "lucide-react"
import Button from "../components/ui/button"
import ButtonSecondary from "../components/ui/buttonSecondary"
import { Linkedin } from 'lucide-react';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Webarify | Agence Web, Branding & Solutions Digitales au Maroc",
  description: "Webarify is a creative web design and branding agency based in Morocco, serving businesses worldwide. We craft fast, responsive websites, build unique brand identities, and develop smart digital solutions like chatbots and SEO strategies to help brands grow online. | Webarify est une agence créative de design web et de branding basée au Maroc, au service des entreprises du monde entier. Nous concevons des sites web rapides et responsives, créons des identités de marque uniques, et développons des solutions digitales intelligentes telles que des chatbots et des stratégies SEO pour aider les marques à se développer en ligne.",
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
  return (
    <div className="min-h-screen">

      {/* Hero Section */}  
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-2">
          <div className="flex">
            {/* <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> */}
          </div>
        </div>
        <h1 className="text-5xl md:text-8xl font-extrabold max-w-5xl mx-auto leading-tight">
          We Bring Your Digital Vision to Life
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-[#141414]/80">
          We craft fast, modern, and stunning websites that help businesses grow. From sleek web apps to powerful online
          platforms—carefully bring your vision to life.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button text="Start my project" className="w-full"/>
          <ButtonSecondary text="Contact Us"/>
        </div>

        {/* Product Showcase */}
        <section className="">
          <div className="flex justify-center w-full ">
            <Image
              src="/assets/images/heroimages.png"
              alt="Banking app showcase"
              width={1400}
              height={800}
            />
          </div>
        </section>

      </section>


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
          <h3 className="text-sm text-[#278783] mb-2">Why choose us?</h3>
          <h2 className="text-3xl font-bold">The benefits</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-end">
          {/* Before Column */}
          <div>
            <h4 className="mb-4 text-[#141414]/60 text-center">Before</h4>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="space-y-6">
                {[
                  "Custom Solutions - Every project is unique to your unique needs",
                  "Speed & Performance - Optimized websites that load instantly",
                  "Modern Technologies - Built with the latest frameworks",
                  "Mobile-First Approach - Fully responsive designs for all devices",
                  "SEO-Optimized - Websites designed with search engines in mind",
                  "Secure Development - Implementing best security practices",
                  "Ongoing Support - Regular maintenance to keep your website running",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="min-w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p className="text-sm">
                      <span className="font-bold">{item.split(" - ")[0]}</span> - {item.split(" - ")[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* After Column */}
          <div>
            <div className="flex flex-col mb-4 w-full justify-center items-center">
              <h4 className="mb-4 text-[#141414]/60">After</h4>
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
                {[
                  "Custom Solutions - Every project is unique to your unique needs",
                  "Speed & Performance - Optimized websites that load instantly",
                  "Modern Technologies - Built with the latest frameworks",
                  "Mobile-First Approach - Fully responsive designs for all devices",
                  "SEO-Optimized - Websites designed with search engines in mind",
                  "Secure Development - Implementing best security practices",
                  "Ongoing Support - Regular maintenance to keep your website running",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="min-w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-sm">
                      <span className="font-bold">{item.split(" - ")[0]}</span> - {item.split(" - ")[1]}
                    </p>
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
            Your Website, Your Brand, Your Success - We Make It Happen!
          </h2>
          <p className="mt-4 mb-4 text-[#141414]/80">
            Don&apos;t settle for average. Let&apos;s craft a stunning, fast, and scalable website tailored to your business
            needs!
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
        <h3 className="text-sm text-[#278783] mb-2 text-center">Our Process</h3>
        <h2 className="text-3xl font-bold text-center mb-12">How we work</h2>

        <div className="max-w-3xl mx-auto space-y-12">
          {[
            {
              title: "Discovery & Planning",
              description:
                "We begin by understanding your vision and goals. Through collaborative strategy discussions, we ensure we're aligned with your goals and set clear objectives for the project.",
            },
            {
              title: "Design & Development",
              description:
                "Our team brings your ideas to life with creative and functional designs. We use modern technologies to develop clean, efficient code that perfectly represents your brand.",
            },
            {
              title: "Testing & Refinement",
              description:
                "We rigorously test the product to ensure it meets our high standards. Based on your feedback, we refine the solution to make sure it aligns perfectly with your expectations.",
            },
            {
              title: "Launch & Support",
              description:
                "We carefully deploy and launch your product. We also provide ongoing support to ensure it continues to perform and evolve as your business grows.",
            },
          ].map((step, index) => (
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
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-sm text-[#278783] mb-2">Get to know us</h3>
        <h2 className="text-3xl font-bold mb-2">Our Team</h2>
        <p className="text-[#141414]/80 mb-8">Meet the creative minds behind our exceptional projects</p>

        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-6xl gap-6 mx-auto">
            {[
              {
                image: "/assets/images/bujujan.png",
                name: "Abdellah Boujoujan",
                role: "Founder & Software Engineer",
                bio: '"I am a Software Engineering student and UI/UX designer, passionate about building seamless digital experiences. I focus on crafting visually engaging and highly functional websites, blending design and development to create user-friendly, high-performance solutions."',
                linkedin: "https://www.linkedin.com/in/abdellah-boujoujan",
              },
              {
                image: "/assets/images/ryad.png",
                name: "Ryad Benmanser",
                role: "Co-Founder & Lead Developer",
                bio: '"I am a Software Engineering student with a strong passion for backend development. I focus on building scalable, efficient, and secure systems to power great web applications. Always looking for new challenges and ways to optimize performance."',
                linkedin: "https://www.linkedin.com/in/ryad-benmanser",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-300 border-2 border-[#278783] rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full z-10"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{member.name}</h4>
                    <p className="text-sm text-[#141414]/60">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-[#141414]/80">{member.bio}</p>
                <div className="flex gap-2 mt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Linkedin className="w-6 h-6 text-[#141414] group-hover:text-[#0077B5] transition-colors duration-200" />
                </a> 
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}
