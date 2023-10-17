"use client";
//== Components
import { LanguageSwitch } from '@/components';
//== Styles
import cls from './navbar.module.scss';

export default function Navbar() {

  return (
    <div className={cls.navbar}>
      IBook
      <LanguageSwitch />
    </div>
  )
}
