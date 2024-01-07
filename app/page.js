"use client";

import { useState } from "react";
import Joke from "./components/joke";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };

  return (
    <main>
      <h1 className="flex justify-center text-4xl">
        Programa conciliador de Nayelis
      </h1>
      <div className="flex justify-center ">
        {show === true ? <Joke></Joke> : null}
      </div>
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center cursor-pointer">
        <button onClick={handleClick}>Haga click para comenzar</button>
      </div>
    </main>
  );
}
