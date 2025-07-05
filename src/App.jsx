import { useState } from "react";
import { Form } from "./Components/Form";
import { Main } from "./Components/Main";
import { Navbar } from "./Components/Navbar";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <Navbar />
      <Form text={text} setText={setText} />
      <Main text={text} />
    </>
  );
}

export default App;
