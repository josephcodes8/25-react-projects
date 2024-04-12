import data from "./data";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const toggleMultipleSelection = () => {
    setEnableMultiSelection(!enableMultiSelection);
    setMultiple([]);
    setSelected(null);
  };

  const handleMultiSelection = (id) => {
    const multipleCopy = [...multiple];
    const currentIdIndex = multipleCopy.indexOf(id);

    if (currentIdIndex === -1) multipleCopy.push(id);
    else multipleCopy.splice(currentIdIndex, 1);

    setMultiple(multipleCopy);
    console.log(multipleCopy);
  };

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  return (
    <div className="w-screen h-screen flex mt-10 justify-center ">
      <div className="accordion-container w-[100%] max-w-[500px]">
        <button
          onClick={toggleMultipleSelection}
          className="py-3  px-6 bg-slate-500 font-bold  text-white mb-4 rounded-full"
        >
          Enable Multi Selection
        </button>
        {data.length > 0 ? (
          data.map(({ id, question, answer }) => (
            <div key={id} className="mb-4">
              <button
                className="flex justify-between w-full p-4 bg-slate-100 rounded-t-md"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(id)
                    : () => handleSingleSelection(id)
                }
              >
                <span className="font-bold text-[#555]">{question}</span>
                <span
                  className={` transition-transform ${
                    selected == id && "rotate-180"
                  }`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>
              <div
                className={`bg-slate-50 rounded-b-md opacity transition-all max-h-0 overflow-hidden ${
                  enableMultiSelection
                    ? multiple.includes(id) && "max-h-full p-4"
                    : selected == id && "max-h-full p-4"
                }`}
              >
                <p
                  className={`opacity-0 transition-opacity   ${
                    enableMultiSelection
                      ? multiple.includes(id) && "opacity-100"
                      : selected == id && "opacity-100 "
                  }`}
                >
                  {answer}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No Data to be displayed!</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
