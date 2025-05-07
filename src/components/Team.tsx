import { Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

const Team = () => {
    const t = useTranslations('HomePage');

  return (
    <section className="container mx-auto px-4 py-16 text-center mb-36">
      <h3 className="text-sm text-[#278783] mb-2">{t('Team.knowUs')}</h3>
      <h2 className="text-3xl font-bold mb-2">{t('Team.title')}</h2>
      <p className="text-[#141414]/80 mb-8">{t('Team.subtitle')}</p>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-6xl gap-6 mx-auto">
          {/* {[
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
          ))} */}
          <div className="bg-white p-6 rounded-xl shadow-md text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 border-2 border-[#278783] rounded-full">
                  <img
                    src="/assets/images/bujujan.png"
                    alt="Abdellah Boujoujan"
                    className="w-full h-full object-cover rounded-full z-10"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{t('Team.members.abdellah.name')}</h4>
                  <p className="text-sm text-[#141414]/60">{t('Team.members.abdellah.title')}</p>
                </div>
              </div>
              <p className="text-sm text-[#141414]/80">{t('Team.members.abdellah.bio')}</p>
              <div className="flex gap-2 mt-4">
              <a
                href="https://www.linkedin.com/in/abdellah-boujoujan"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Linkedin className="w-6 h-6 text-[#141414] group-hover:text-[#0077B5] transition-colors duration-200" />
              </a> 
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 border-2 border-[#278783] rounded-full">
                  <img
                    src="/assets/images/ryad.png"
                    alt="Ryad Benmanser"
                    className="w-full h-full object-cover rounded-full z-10"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{t('Team.members.ryad.name')}</h4>
                  <p className="text-sm text-[#141414]/60">{t('Team.members.ryad.title')}</p>
                </div>
              </div>
              <p className="text-sm text-[#141414]/80">{t('Team.members.ryad.bio')}</p>
              <div className="flex gap-2 mt-4">
              <a
                href="https://www.linkedin.com/in/ryad-benmanser"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Linkedin className="w-6 h-6 text-[#141414] group-hover:text-[#0077B5] transition-colors duration-200" />
              </a> 
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Team