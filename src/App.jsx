import { useState } from "react";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="flex flex-col items-center gap-8">
      <nav className="w-full flex justify-between text-white px-[2em]">
        <button className="font-normal focus:font-bold text-[2.5rem]">
          Home
        </button>
        <button className="font-normal focus:font-bold text-[2.5rem]">
          Bookmarks
        </button>
      </nav>
      <Quote />
      <div className="flex flex-col gap-16">
        <select name="tags" className="bg-[#D9D9D9] rounded-[1.9rem] py-2 border-r-[16px] border-transparent">
          <option value="all">&nbsp;&nbsp;Choose a tag</option>
        </select>
        <button className="bg-[#009C51] text-white rounded-[1.9rem] px-8 py-2 font-normal text-[2.5rem]">
          Next Quote
        </button>
      </div>
    </div>
  );
}

export default App;
