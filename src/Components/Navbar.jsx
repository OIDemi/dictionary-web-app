import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import VerticalLine from "../assets/vertical-line.svg?react";
import Moon from "../assets/icon-moon.svg?react";

export const Navbar = () => {
  const [selectedFont, setSelectedFont] = useState("sans-serif");

  useEffect(() => {
    document.body.classList.add(selectedFont);
    return () => document.body.classList.remove(selectedFont);
  }, [selectedFont]);
  return (
    <header className='container flex justify-between items-center py-10'>
      <img src={Logo} alt='Dictionary Logo' />
      <div className='flex justify-between items-center gap-4'>
        <select
          value={selectedFont}
          onChange={(e) => setSelectedFont(e.target.value)}
          className='outline-none text-[18px] text-faint-black font-bold'
        >
          <option value='sans-serif'>Sans Serif</option>
          <option value='serif'>Serif</option>
          <option value='mono'>Mono</option>
        </select>
        <VerticalLine />
        <Moon />
      </div>
    </header>
  );
};
