import React, { useState, useRef } from "react";

const InputText: React.FC = () => {
  const [inputValues, setInputValues] = useState({
    noun: "",
    verb: "",
    adjective: "",
  });

  const [showInput, setShowInput] = useState(false);
  const [showInputA, setShowInputA] = useState(false);
  const [madLib, setMadLib] = useState(false);
  let [story, setStory] = useState("");

  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);
  const input3Ref = useRef<HTMLInputElement>(null);
  const input4Ref = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input1Ref.current) {
        input2Ref.current?.focus();
      }
      if (input2Ref.current) {
        input3Ref.current?.focus();
      }
      if (input3Ref.current) {
        input4Ref.current?.focus();
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    let num = Math.floor(Math.random() * 2);
    if (num === 0) {
      story = `Once upon a time, there was a ${inputValues.noun} named Bob. Bob loved to ${inputValues.verb} every day, but he was a very ${inputValues.adjective} person. One day, Bob decided to ${inputValues.verb} to the top of a nearby mountain. The climb was steep and difficult, but Bob was determined. When he finally reached the top, he was exhausted but elated. The view from the summit was breathtaking! Bob sat down to catch his breath and took in the ${inputValues.adjective} scenery around him. From that day on, Bob made a point to ${inputValues.verb} to the top of that mountain whenever he needed to clear his mind and remind himself that he was capable of achieving great things.`;
    } else {
      story = `There once was ${inputValues.adjective} cat named Fluffy. Fluffy loved to ${inputValues.verb} around the house all day, but sometimes he got bored. One day, he discovered ${inputValues.noun} in the corner of the room. Fluffy was intrigued and began to ${inputValues.verb}with it. Before he knew it, he had created a huge mess! Fluffy's owner walked in and was not happy about the mess, but couldn't help but laugh at the sight of Fluffy covered in ${inputValues.adjective} ${inputValues.noun}. From then on, Fluffy's owner made sure to give him plenty of toys to play with so he wouldn't make any more ${inputValues.adjective} messes.`;
    }

    setStory(story);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "noun") {
      setShowInput(true);
    }

    if (e.target.name === "verb") {
      setShowInputA(true);
    }

    if (e.target.name === "adjective") {
      setMadLib(true);
    }
  };

  return (
    <div className=" h-screen w-full bg-gradient-to-b from-white to-slate-500 pt-2">
      <form onSubmit={handleFormSubmit}>
        <div className="flex items-center justify-center">
          <input
            className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 p-1 focus:outline-none shadow hover:shadow-md hover:shadow-slate-600 focus:shadow-md focus:shadow-slate-600 w-7/12 item-center flex"
            type="text"
            name="noun"
            placeholder="Noun"
            ref={input1Ref}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            value={inputValues.noun}
          />
        </div>
        <div className="flex items-center justify-center">
          {showInput && (
            <input
              className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 p-1 focus:outline-none shadow hover:shadow-md hover:shadow-slate-600 focus:shadow-md focus:shadow-slate-600 w-7/12 item-center flex"
              type="text"
              name="verb"
              placeholder="Verb"
              ref={input2Ref}
              onKeyDown={handleKeyDown}
              onChange={handleInputChange}
              value={inputValues.verb}
            />
          )}
        </div>
        <div className="flex items-center justify-center">
          {showInputA && (
            <input
              className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 p-1 focus:outline-none shadow hover:shadow-md hover:shadow-slate-600 focus:shadow-md focus:shadow-slate-600 w-7/12 item-center flex"
              type="text"
              name="adjective"
              placeholder="Adjective"
              ref={input3Ref}
              onKeyDown={handleKeyDown}
              onChange={handleInputChange}
              value={inputValues.adjective}
            />
          )}
        </div>
        <div className="flex items-center justify-center">
          {madLib && (
            <div className="flex flex-col">
              <button
                className="bg-white rounded-full p-3 w-full m-5 shadow-md shadow-slate-600 hover:shadow-lg hover:shadow-slate-600 transition ease-in-out duration-200 delay-100"
                type="submit"
              >
                MadLib
              </button>
            </div>
          )}
        </div>
        <div className="p-5 text-center text-2xl text-slate-700 m-9">
          {story}
        </div>
      </form>
    </div>
  );
};

export default InputText;
