import React from "react";
import HorizontaLine from "../assets/horizontal-line.svg?react";
import { Definition } from "./Definition";
export const ItemList = ({ item }) => {
  return (
    <>
      <div className='flex items-center gap-5'>
        <h2 className='text-faint-black dark:text-white'>
          {item.partOfSpeech}
        </h2>
      </div>
      <ul className='flex flex-col gap-3 list-disc marker:text-purple'>
        <h3 className='text-gray'>Meaning</h3>
        {item.definitions.map((definition) => (
          <Definition key={definition.definition} definition={definition} />
        ))}
      </ul>
    </>
  );
};
