import React, { useEffect, useState } from "react";
import AudioLogo from "../assets/icon-play.svg?react";
import { ItemList } from "../util/ItemList";
import NewIconWindow from "../assets/icon-new-window.svg?react";
export const Main = ({ text }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [audioPlay, setAudioPlay] = useState(null);
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;

  useEffect(() => {
    if (!text) return;
    let active = true;
    setIsLoading(true);
    setError(false);
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        const audio = data[0]?.phonetics[data[0]?.phonetics.length - 1]?.audio;
        if (active) {
          setIsLoading(false);
          setList(data);
          setAudioPlay(audio);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => (active = false);
  }, [url, text]);

  function handlePlay() {
    if (audioPlay) {
      const audio = new Audio(audioPlay);
      audio.play().catch((err) => console.error(err));
    }
  }

  if (isLoading)
    return (
      <div className='container mt-10 flex justify-center'>
        <span className='loader '></span>
      </div>
    );

  if (error)
    return (
      <div className='container mt-10 flex flex-col justify-center items-center text-center gap-3'>
        <p className='text-[5rem]'>😐</p>
        <p className='text-faint-black font-bold text-[20px] dark:text-white'>
          No Definitions Found
        </p>
        <p className='text-gray'>
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    );
  if (!text)
    return (
      <div className='container mt-10 flex flex-col justify-center items-center text-center gap-3'>
        <p className='text-[5rem]'>😊</p>
        <p className='text-faint-black font-bold text-[20px] dark:text-white'>
          Search for a word
        </p>
      </div>
    );
  return (
    <main className='container mt-6'>
      <section className='flex items-center justify-between'>
        <div>
          <h1 className=' text-heading-l-small-screen lg:text-heading-l-large-screen md:text-heading-l-tablet text-faint-black font-bold dark:text-white'>
            {list[0]?.word}
          </h1>
          <p className='text-purple dark:text-purple'>{list[0]?.phonetic}</p>
        </div>
        {audioPlay && (
          <AudioLogo className='cursor-pointer' onClick={handlePlay} />
        )}
      </section>
      <section className='mt-6 flex flex-col gap-5'>
        {list[0]?.meanings?.map((item) => (
          <ItemList key={item.definitions[0].definition} item={item} />
        ))}
        <section className=' mt-5 '>
          <p className='text-gray flex gap-7'>
            Source{" "}
            <a
              href={list[0]?.sourceUrls}
              target='_blank'
              className='text-black dark:text-white flex items-center gap-3'
            >
              {list[0]?.sourceUrls}
              <NewIconWindow />
            </a>
          </p>
        </section>
      </section>
    </main>
  );
};
