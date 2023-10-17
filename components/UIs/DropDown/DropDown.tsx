'use client';
import React, { useState } from "react";
import { MenuItem } from "@/components/Common/LanguageSwitch/types";
//= Styles
import cls from "./dropDown.module.scss";

type Props = {
  menu: MenuItem[];
}

const DropDown = ({ menu }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <div className={cls.dropdown}>
      {openMenu && <div className={cls.overlay} onClick={handleClose}></div>}
      {/* <i className="fa-solid fa-caret-down" onClick={handleClick}></i> */}
      <span onClick={handleClick}>here</span>
      <div className={`${cls.dropdownMenu} ${openMenu ? cls.show : ""} ${cls['en']}`}>
        <ul>
          {menu.map((item) => (
            <li key={item.title} onClick={handleClose}>
              <div onClick={item.method}>
                <p>{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
