import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import VerticalLine from "../assets/vertical-line.svg?react";
import Moon from "../assets/icon-moon.svg?react";
import DownArrow from "../assets/icon-arrow-down.svg?react";
import { ConfigProvider, Switch } from "antd";
export const Navbar = ({ theme, setTheme }) => {
  const [selectedFont, setSelectedFont] = useState("sans-serif");
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
    setIsChecked((check) => !check);
    if (checked) {
      setTheme("dark");
    } else setTheme("");
  };

  useEffect(() => {
    document.body.classList.add(selectedFont);
    return () => document.body.classList.remove(selectedFont);
  }, [selectedFont]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#a445ed",
        },
      }}
    >
      <header className='container flex justify-between items-center py-10'>
        <img src={Logo} alt='Dictionary Logo' />
        <div className='flex justify-between items-center gap-4'>
          <div className='flex items-center gap-4'>
            <select
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
              className='outline-none text-[18px] text-faint-black font-bold appearance-none dark:text-white'
            >
              <option value='sans-serif'>Sans Serif</option>
              <option value='serif'>Serif</option>
              <option value='mono'>Mono</option>
            </select>
            <DownArrow />
          </div>
          <VerticalLine />
          <Switch checked={isChecked} onChange={onChange} />
          <Moon className={`${theme ? "text-purple" : "#838383"}`} />
        </div>
      </header>
    </ConfigProvider>
  );
};
