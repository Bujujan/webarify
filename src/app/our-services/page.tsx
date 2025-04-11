'use client'

import { Check, X } from "lucide-react"
import Button from "../components/ui/button"
import ButtonCustom from "../components/ui/buttonCustom"

export default function OurServices() {
  return (
    <div className="bg-gradient-to-b min-h-screen">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative">
        {/* Email sidebar */}
        {/* <div className="absolute left-0 top-1/4 transform -rotate-90 origin-left hidden md:block">
          <a href="mailto:webgrify@gmail.com" className="text-xs text-[#141414]/70">
            Email Us - webgrify@gmail.com
          </a>
        </div> */}

        {/* Services Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#278783] text-sm uppercase">OUR SERVICES</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-8">Elevate Your Digital Presence</h1>
          <p className="text-lg leading-relaxed">
            We offer comprehensive solutions to help your business stand out in the digital landscape. From creating a
            memorable brand identity to developing high-performing websites, we&apos;ve got you covered with packages
            tailored to your needs.
          </p>
        </div>

        {/* Web Development Services */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Web Development</h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              Modern, responsive, and high-performing websites that drive results. Our web development services are
              designed to create seamless user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Package */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold">Basic</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-4xl font-bold">7000 MAD</span>
                  <span className="text-[#141414]/60 ml-2">/ one-time</span>
                </div>
                <p className="mt-2 text-[#141414]/70">Perfect for small businesses just getting started</p>
              </div>
              <div className="p-6 flex flex-col">
                <ul className="space-y-3 mb-6 h-full">
                  {[
                    "5-page responsive website",
                    "Mobile-friendly design",
                    "Basic SEO setup",
                    "Contact form",
                    "Social media integration",
                    "2 weeks delivery",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#278783] mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {["Custom animations", "E-commerce functionality", "Advanced SEO", "Content creation"].map(
                    (feature, index) => (
                      <li key={index} className="flex items-start text-[#141414]/50">
                        <X className="h-5 w-5 text-red-400 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button text="Start my project" className="w-full" onClick={() => window.open(
                    "https://wa.me/+212650661172?text=Hi!%20I'm%20interested%20in%20starting%20a%20project%20with%20you.",
                    "_blank"
                )} />
              </div>
            </div>

            {/* Standard Package */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-lg transform md:scale-105">
              <div className="absolute top-0 right-0 bg-[#278783] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold">Standard</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-4xl font-bold">13000 MAD</span>
                  <span className="text-[#141414]/60 ml-2">/ one-time</span>
                </div>
                <p className="mt-2 text-[#141414]/70">Ideal for growing businesses with specific needs</p>
              </div>
              <div className="p-6 flex flex-col">
                <ul className="space-y-3 mb-6">
                  {[
                    "10-page responsive website",
                    "Mobile-friendly design",
                    "Advanced SEO setup",
                    "Contact form with validation",
                    "Social media integration",
                    "Blog/news section",
                    "Basic animations",
                    "3 rounds of revisions",
                    "1 month of support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#278783] mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {["E-commerce functionality", "Content creation"].map((feature, index) => (
                    <li key={index} className="flex items-start text-[#141414]/50">
                      <X className="h-5 w-5 text-red-400 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button text="Start my project" className="w-full" onClick={() => window.open(
                    "https://wa.me/+212650661172?text=Hi!%20I'm%20interested%20in%20starting%20a%20project%20with%20you.",
                    "_blank"
                )} />
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold">Premium</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-4xl font-bold">On Contact</span>
                  <span className="text-[#141414]/60 ml-2">/ one-time</span>
                </div>
                <p className="mt-2 text-[#141414]/70">Comprehensive solution for established businesses</p>
              </div>
              <div className="p-6 flex flex-col">
                <ul className="space-y-3 mb-6">
                  {[
                    "Unlimited pages",
                    "Custom responsive design",
                    "Advanced SEO optimization",
                    "Custom forms with validation",
                    "Social media integration",
                    "Blog/news section",
                    "Custom animations",
                    "E-commerce functionality",
                    "Content management system",
                    "Performance optimization",
                    "Unlimited revisions",
                    "3 months of support",
                    "Training session",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#278783] mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button text="Start my project" className="w-full" onClick={() => window.open(
                    "https://wa.me/+212650661172?text=Hi!%20I'm%20interested%20in%20starting%20a%20project%20with%20you.",
                    "_blank"
                )} />
              </div>
            </div>
          </div>
        </section>

        {/* Branding Services */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Branding</h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              Create a memorable brand identity that resonates with your audience. Our branding services help you stand
              out in a crowded marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Package */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold">Starter</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-4xl font-bold">3000 MAD</span>
                  <span className="text-[#141414]/60 ml-2">/ one-time</span>
                </div>
                <p className="mt-2 text-[#141414]/70">Essential branding for new businesses</p>
              </div>
              <div className="p-6 flex flex-col">
                <ul className="space-y-3 mb-6">
                  {[
                    "Logo design (2 concepts)",
                    "Color palette",
                    "Typography selection",
                    "Business card design",
                    "Social media profile images",
                    "2 rounds of revisions",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#278783] mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {["Brand guidelines", "Marketing materials", "Brand strategy", "Custom illustrations"].map(
                    (feature, index) => (
                      <li key={index} className="flex items-start text-[#141414]/50">
                        <X className="h-5 w-5 text-red-400 mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
                <Button text="Start my project" className="w-full" onClick={() => window.open(
                    "https://wa.me/+212650661172?text=Hi!%20I'm%20interested%20in%20starting%20a%20project%20with%20you.",
                    "_blank"
                )} />
              </div>
            </div>

            {/* Standard Package */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-lg transform md:scale-105">
              <div className="absolute top-0 right-0 bg-[#278783] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold">Professional</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-4xl font-bold">8000 MAD</span>
                  <span className="text-[#141414]/60 ml-2">/ one-time</span>
                </div>
                <p className="mt-2 text-[#141414]/70">Complete branding package for established businesses</p>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <ul className="space-y-3 flex-1 mb-6">
                  {[
                    "Logo design (4 concepts)",
                    "Color palette",
                    "Typography selection",
                    "Brand guidelines",
                    "Business card design",
                    "Email signature",
                    "Social media profile images",
                    "3 rounds of revisions",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#278783] mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {["Brand strategy", "Custom illustrations"].map((feature, index) => (
                    <li key={index} className="flex items-start text-[#141414]/50">
                      <X className="h-5 w-5 text-red-400 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button text="Start my project" className="w-full" onClick={() => window.open(
                    "https://wa.me/+212650661172?text=Hi!%20I'm%20interested%20in%20starting%20a%20project%20with%20you.",
                    "_blank"
                )} />
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-4xl font-bold">On Contact</span>
                  <span className="text-[#141414]/60 ml-2">/ one-time</span>
                </div>
                <p className="mt-2 text-[#141414]/70">Strategic branding for companies ready to scale</p>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <ul className="space-y-3 mb-6 flex-1">
                  {[
                    "Brand strategy workshop",
                    "Logo design (6 concepts)",
                    "Color palette",
                    "Typography selection",
                    "Comprehensive brand guidelines",
                    "Business card design",
                    "Social media profile & cover images",
                    "Custom illustrations",
                    "Marketing materials (brochure, flyer)",
                    "Presentation template",
                    "Unlimited revisions",
                    "1 month of support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#278783] mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button text="Start my project" className="w-full" onClick={() => window.open(
                    "https://wa.me/+212650661172?text=Hi!%20I'm%20interested%20in%20starting%20a%20project%20with%20you.",
                    "_blank"
                )} />
              </div>
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto mb-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="mb-6">
              Don&apos;t see a package that fits your needs? We offer custom solutions tailored to your specific
              requirements.
            </p>
            <Button text="Start my project" className="w-full" onClick={() => window.open(
                "https://wa.me/+212650661172?text=Hi!%20I'm%20interested%20in%20starting%20a%20project%20with%20you.",
                "_blank"
            )} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-20">
            <div className="text-center">
                <span className="text-[#278783] text-center text-sm uppercase">FAQ</span>
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2> 
            </div>
            

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to complete a project?",
                answer:
                  "Project timelines vary depending on the scope and complexity. Basic websites typically take 2-3 weeks, while more complex projects may take 5-8 weeks. Branding projects usually range from 2-5 weeks. We'll provide a specific timeline during our initial consultation.",
              },
              {
                question: "Do you offer maintenance services after the project is completed?",
                answer:
                  "Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally. These can be discussed after project completion or added to your initial package.",
              },
              {
                question: "What is your payment structure?",
                answer:
                  "We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we may establish a milestone-based payment schedule.",
              },
              {
                question: "Can you help with content creation?",
                answer:
                  "Yes, we offer content creation services including copywriting, photography, and graphic design. These can be added to any package for an additional fee.",
              },
              {
                question: "Do you provide hosting services?",
                answer:
                  "Yes, we offer reliable hosting solutions with regular backups and security monitoring. Hosting is typically billed annually and can be added to any web development package.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-[#141414]/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#278783] text-white rounded-xl p-8 max-w-4xl mx-auto mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Let&apos;s work together to create a stunning brand and website that helps your business stand out and succeed
              online.
            </p>
            {/* <Button href="/contact" className="bg-white text-[#278783] hover:bg-white/90 hover:text-[#278783]">
              Start Your Project
            </Button> */}
            <ButtonCustom text="Start my project" className="w-full" onClick={() => window.open(
                "https://wa.me/+212650661172?text=Hi!%20I'm%20interested%20in%20starting%20a%20project%20with%20you.",
                "_blank"
            )} />
          </div>
        </section>
      </main>
    </div>
  )
}
