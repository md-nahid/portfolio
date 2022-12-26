import { HiSun } from "react-icons/hi";
import { BsMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { CURSOR_SIZE_MEDIUM, CURSOR_SIZE_DEFAULT } from "./contexts/cursorConstants";
import { useUI } from "./contexts/cursorContext";

export default function DarkMood() {
  let { setCursorSize } = useUI();
  const [state, setState] = useState(false);
  return (
    <div className="fixed top-3 right-3 z-20">
      <button
        className=" w-14 h-14 rounded-full hover:shadow-md hover:shadow-indigo-200 flex justify-center items-center text-2xl text-white bg-indigo-700"
        onClick={() => setState(!state)}
        onMouseEnter={() => setCursorSize(CURSOR_SIZE_MEDIUM)}
        onMouseLeave={() => setCursorSize(CURSOR_SIZE_DEFAULT)}
      >
        {state && <HiSun />}
        {!state && <BsMoonStarsFill />}
      </button>
    </div>
  );
}
