import Image from "next/image"

import { services } from "@/lib/services-data"
import ButtonCustom from "@/components/ui/buttonCustom"
import ButtonSlug from "@/components/ui/buttonslug"

export default function OurServices() {
  return (
    <div className="min-h-screen">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative">
        {/* Services Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#278783] text-sm uppercase">OUR SERVICES</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-8">Elevate Your Digital Presence</h1>
          <p className="text-lg leading-relaxed">
            We offer comprehensive solutions to help your business stand out in the digital landscape. From creating a
            memorable brand identity to developing high-performing websites and AI-powered chatbots, we&apos;ve got you
            covered with services tailored to your needs.
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
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-[#141414]/70 mb-4">{service.shortDescription}</p>
                <ButtonSlug href={`/our-services/${service.slug}`}>
                  Learn More
                </ButtonSlug>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Webarify?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Our team of skilled professionals brings years of experience and expertise to every project.",
              },
              {
                title: "Tailored Solutions",
                description: "We create custom solutions designed specifically for your unique business needs.",
              },
              {
                title: "Modern Technologies",
                description: "We stay at the forefront of technology to deliver cutting-edge solutions.",
              },
              {
                title: "Ongoing Support",
                description: "Our relationship doesn't end at launch - we provide continuous support and maintenance.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-[#141414]/80">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#278783] text-white rounded-xl p-8 max-w-4xl mx-auto mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Let&apos;s work together to create solutions that help your business stand out and succeed online.
            </p>
            <ButtonCustom text="Start my project" className="w-full"/> 
          </div>
        </section>
      </main>
    </div>
  )
}
