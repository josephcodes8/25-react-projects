import { useState } from "react";

const ColorGenerator = () => {
  const [color, setColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#333333");
  const [colorType, setColorType] = useState("Hex");

  const randomNumber = () => Math.trunc(Math.random() * 16);

  const generateHexColor = () => {
    if (color !== "#FFFFFF") setTextColor("#FFFFFF");
    const values = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    setColorType("Hex");
    setColor(
      `#${[
        values[randomNumber()],
        values[randomNumber()],
        values[randomNumber()],
        values[randomNumber()],
        values[randomNumber()],
        values[randomNumber()],
      ]
        .join("")
        .toUpperCase()}`
    );
  };

  const generateRGBColor = () => {
    setColorType("RGB");
    const r = Math.trunc(Math.random() * 256);
    const g = Math.trunc(Math.random() * 256);
    const b = Math.trunc(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  const generateRandomColor = () => {
    if (Math.trunc(Math.random() * 2) == 0) {
      generateHexColor();
    } else {
      generateRGBColor();
    }
  };

  return (
    <div
      className={`w-full h-full flex  items-center justify-center relative`}
      style={{ backgroundColor: color }}
    >
      <div className="flex space-x-4 gap-y-2 justify-center mt-4 md:mt-10 absolute top-5 flex-wrap">
        <button
          onClick={generateHexColor}
          className="border py-2 px-4 rounded-md transition-all bg-white hover:bg-slate-50 active:scale-95"
        >
          Create Hex Color
        </button>
        <button
          onClick={generateRGBColor}
          className="border py-2 px-4 rounded-md transition-all bg-white hover:bg-slate-50 active:scale-95"
        >
          Create RGB Color
        </button>
        <button
          onClick={generateRandomColor}
          className="border py-2 px-4 rounded-md transition-all bg-white hover:bg-slate-50 active:scale-95"
        >
          Generate Random Color
        </button>
      </div>
      <div className="text-center">
        <h1
          className={`text-[72px] font-bold text-[#333] mb-10`}
          style={{ color: textColor }}
        >
          {colorType} Color
        </h1>
        <p
          className={`text-[56px] font-bold text-[#333]`}
          style={{ color: textColor }}
        >
          {color}
        </p>
      </div>
    </div>
  );
};

export default ColorGenerator;
