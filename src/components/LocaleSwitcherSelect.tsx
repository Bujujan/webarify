'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { Locale } from 'next-intl';
import { useTransition } from 'react';


const LocaleSwitcherSelect = () => {

  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const currentLocale = params.locale as Locale;
  const nextLocale: Locale = currentLocale === 'en' ? 'fr' : 'en';

  function handleSwitch() {
    startTransition(() => {
      router.replace(
        // @ts-expect-error acceptable for i18n routing
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      className="uppercase text-sm cursor-pointer font-medium hover:underline disabled:opacity-50"
    >
      {currentLocale}
    </button>
  );
}; export default LocaleSwitcherSelect;


