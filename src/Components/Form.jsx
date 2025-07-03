import React, { useState } from "react";
import Search from "../assets/icon-search.svg?react";

export const Form = ({ text, setText }) => {
  const [focus, setFocus] = useState(false);
  return (
    <form
      className={`container flex items-center bg-light-gray p-3 rounded-sm ${
        focus ? " outline-purple outline-2" : ""
      }`}
    >
      <input
        type='text'
        placeholder='Search for any word...'
        className='flex-1 outline-none font-bold'
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Search />
    </form>
  );
};
