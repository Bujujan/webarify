import Image from "next/image"
import { Linkedin } from 'lucide-react';
// import { Button } from "@/components/ui/button-custom"

export default function AboutUs() {
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
          <span className="text-[#278783] text-sm uppercase">ABOUT US</span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mt-4 mb-8">
            Turning Ideas into
            <br />
            Digital Reality
          </h1>
          <p className="text-xs leading-relaxed md:text-xl">
            We are <span className="font-bold">Webarify</span>, a team of{" "}
            <span className="font-bold">software engineering</span> students with a shared passion for building{" "}
            <span className="font-bold">high-quality, scalable, and innovative web solutions</span>. Our journey started
            with a simple idea: to use our technical expertise and creative vision to help businesses{" "}
            <span className="font-bold">establish a strong online presence</span>.
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
                    <span className="text-[#278783] text-sm">How it started</span>
                    <h2 className="text-3xl font-bold mt-2">Our Story</h2>
                </div>
                <div className="md:col-span-2">
                    <p className="text-lg mb-4">
                    <span className="font-bold">Webarify</span> was born from a simple idea—
                    <span className="font-bold">to turn creativity and code into impactful digital experiences</span>. As
                    software engineering students, we saw businesses struggling with outdated websites and ineffective
                    branding. We knew we could do better.
                    </p>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="grid md:grid-cols-3 lg:max-w-[1200px] gap-8 mb-20">
                <div>
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <div className="md:col-span-2">
                    <p className="text-lg mb-4">
                    What started as passion projects became a mission: to{" "}
                    <span className="font-bold">build modern, high-performing web solutions</span> that solve real problems.
                    Today, we help brands and businesses <span className="font-bold">stand out online</span> with sleek,
                    scalable, and innovative <span className="font-bold">web development, UI/UX design, and branding</span>{" "}
                    that elevate their digital presence.
                    </p>
                </div>
            </div>
        </div>

        

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
      </main>
    </div>
  )
}
