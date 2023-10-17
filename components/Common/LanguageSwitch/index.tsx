'use client';
import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
//= Components
import DropDown from "@/components/UIs/DropDown/DropDown";
//= Types
import { MenuItem } from './types';
//= Styles
import cls from "./langSwitch.module.scss";


const LangSwitch = () => {
  const pathName = usePathname();
  const router = useRouter();
  const cookies = useMemo(() => new Cookies(), []);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const menu: MenuItem[] = [
    {
      title: `english`,
      method: () => {
        cookies.set('lms-locale', 'en', { path: '/' });
        router.push(redirectedPathName('en'))
      },
      locale: "en",
    },
    {
      title: `arabic`,
      method: () => {
        cookies.set('lms-locale', 'ar', { path: '/' });
        router.push(redirectedPathName('ar'))
      },
      locale: "ar",
    },
  ];

  return (
    <div className={cls.lang}>
      <DropDown menu={menu} />
    </div>
  );
};

export default LangSwitch;
