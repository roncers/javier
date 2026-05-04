import { useState } from "react";
import rayoMcQueen from "./assets/mcqueen.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="overflow-hidden bg-amber-100 h-full">
        <img src={rayoMcQueen} alt="" className="mcQueen" />
        <div className="flex flex-col items-center gap-2 border-t-2 border-black">
          <h1 className="text-3xl font-bold">Soy javier</h1>
          <button
            className="p-2 text-white bg-red-500 cursor-pointer hover:bg-red-600 active:bg-red-700 rounded-sm"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            El contador de chicas guapas que han hecho click en este botón es:{" "}
            {count}
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
