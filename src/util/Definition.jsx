import React from "react";

export const Definition = ({ definition }) => {
  return (
    <li className='ml-7 text-faint-black dark:text-white'>
      {definition.definition}
    </li>
  );
};
