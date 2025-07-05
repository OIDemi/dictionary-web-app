import { useEffect, useState } from "react";
import { Form } from "./Components/Form";
import { Main } from "./Components/Main";
import { Navbar } from "./Components/Navbar";

function App() {
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (theme === "dark") document.body.classList.add("dark");
    return () => document.body.classList.remove("dark");
  }, [theme]);
  return (
    <>
      <Navbar setTheme={setTheme} theme={theme} />
      <Form text={text} setText={setText} />
      <Main text={text} />
    </>
  );
}

export default App;
