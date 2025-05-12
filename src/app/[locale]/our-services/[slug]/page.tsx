import Image from "next/image"
import { notFound } from "next/navigation"
import { services } from "@/lib/services-data"
import ButtonSlug from "@/components/ui/buttonslug"
import ButtonCustom from "@/components/ui/buttonCustom"
import Breadcrumps from "@/components/Breadcrumps"


function getServiceBySlug(slug: string) {
    return services.find((service) => service.slug === slug);
}

// export function generateStaticParams() {
//   return services.map((service) => ({
//     slug: service.slug,
//   }))
// }

export default async function ServicePage({params}: {params: Promise<{slug: string}>}) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const service = getServiceBySlug(slug);

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-[80px]">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative">
        
        <Breadcrumps service = {service}/>

        {/* Service Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#278783] text-sm uppercase">{service.category}</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-8">{service.title}</h1>
          <p className="text-lg leading-relaxed">{service.description}</p>
        </div>

        {/* Hero Image */}
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-16">
          <Image src={service.heroImage || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
        </div>

        {/* Service Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-xl mb-4">{feature.title}</h3>
                <p className="text-[#141414]/80 mb-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <div key={index} className="flex mb-8">
                <div className="mr-6">
                  <div className="w-10 h-10 bg-[#278783] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-[#141414]/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Plans */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Packages</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {service.packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  pkg.popular ? "md:scale-105 relative" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[#278783] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <div className="mt-4 flex items-end">
                    <span className="text-4xl font-bold">${pkg.price}</span>
                    <span className="text-[#141414]/60 ml-2">/ {pkg.billing}</span>
                  </div>
                  <p className="mt-2 text-[#141414]/70">{pkg.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-[#278783] mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button text="Start my project" className="w-full"/>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="bg-[#278783] text-white rounded-xl p-8 max-w-4xl mx-auto mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how our {service.title.toLowerCase()} services can help your business grow.
            </p>
            {/* <Button href="/contact" className="bg-white text-[#278783] hover:bg-white/90 hover:text-[#278783]">
              Contact Us
            </Button> */}
            <ButtonCustom text="Contact" className="w-full"/> 
          </div>
        </section>

        {/* FAQ Section */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-[#141414]/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Related Services</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 2)
              .map((relatedService) => (
                <div
                  key={relatedService.slug}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="h-40 relative">
                    <Image
                      src={relatedService.image || "/placeholder.svg"}
                      alt={relatedService.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                    <p className="text-[#141414]/70 mb-4">{relatedService.shortDescription}</p>
                    <ButtonSlug href={`/our-services/${relatedService.slug}`} variant="primary">
                      Learn More
                    </ButtonSlug>
                  </div>
                </div>
              ))}
          </div>
        </section>

        
      </main>
    </div>
  )
}
