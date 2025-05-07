import React from 'react'
import ButtonCustom from './ui/buttonCustom'
import { useTranslations } from 'next-intl';

const CallToAction = () => {
    const t = useTranslations('ServicesPage');
  return (
    
    <section className="bg-[#278783] text-white w-[95%] rounded-xl p-8 max-w-4xl mx-auto mb-20">
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="mb-6 max-w-lg mx-auto">
            {t('cta.subtitle')}
            </p>
            <ButtonCustom text="Start my project" className="w-full"/> 
        </div>
  </section>
  )
}

export default CallToAction