import React, { useState } from "react";

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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    let num = Math.floor(Math.random() * 2);
    if (num === 0) {
      story = `The ${inputValues.noun} ${inputValues.verb} the ${inputValues.adjective} dog.`;
    } else {
      story = `The ${inputValues.noun} ${inputValues.verb} the ${inputValues.adjective} cat.`;
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
        <div className="p-5 text-center text-2xl text-slate-700">{story}</div>
      </form>
    </div>
  );
};

export default InputText;
