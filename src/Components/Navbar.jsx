import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import VerticalLine from "../assets/vertical-line.svg?react";
import Moon from "../assets/icon-moon.svg?react";
import DownArrow from "../assets/icon-arrow-down.svg?react";

export const Navbar = () => {
  const [selectedFont, setSelectedFont] = useState("sans-serif");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    document.body.classList.add(selectedFont);
    return () => document.body.classList.remove(selectedFont);
  }, [selectedFont]);

  useEffect(() => {
    if (isChecked) document.body.classList.add("dark");
    return () => document.body.classList.remove("dark");
  }, [isChecked]);

  return (
    <header className='container flex justify-between items-center py-10'>
      <img src={Logo} alt='Dictionary Logo' />
      <div className='flex justify-between items-center gap-4'>
        <div className='flex items-center gap-4'>
          <div className='dropdown dropdown-end '>
            <div
              tabIndex={0}
              role='button'
              className={`btn m-1 ${
                isChecked ? "bg-black text-white" : "bg-white text-black"
              }  border-none shadow-none px-4 py-2`}
            >
              <p>
                {selectedFont === "sans-serif" ? (
                  <>Sans Serif</>
                ) : selectedFont === "serif" ? (
                  <>Serif</>
                ) : (
                  <>Mono</>
                )}
              </p>
              <DownArrow />
            </div>
            <ul
              tabIndex={0}
              className={`dropdown-content menu ${
                isChecked
                  ? "bg-black text-white shadow-purple"
                  : "bg-white text-black"
              } rounded-box z-1 w-52 p-2 shadow-md`}
            >
              <li>
                <a onClick={() => setSelectedFont("sans-serif")}>Sans Serif</a>
              </li>
              <li>
                <a onClick={() => setSelectedFont("serif")}>Serif</a>
              </li>
              <li>
                <a onClick={() => setSelectedFont("mono")}>Mono</a>
              </li>
            </ul>
          </div>
        </div>
        <VerticalLine />

        <input
          type='checkbox'
          value={isChecked}
          defaultChecked={false}
          className='toggle toggle-md text-white bg-purple border-purple checked:bg-purple checked:border-purple'
          onChange={() => setIsChecked((check) => !check)}
        />
        <Moon className={`${isChecked ? "text-purple" : "#838383"}`} />
      </div>
    </header>
  );
};
