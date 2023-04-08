import React, { useState } from "react";

const InputText: React.FC = () => {
  const [inputValues, setInputValues] = useState({
    noun: "",
    verb: "",
    adjective: "",
  });
  // Have a state to show the input fields for each word.
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
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "noun" && e.target.value) {
      setShowInput(true);
    }

    if (e.target.name === "verb" && e.target.value) {
      setShowInputA(true);
    }

    if (e.target.name === "adjective" && e.target.value) {
      setMadLib(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleFormSubmit}>
        <input
          className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="noun"
          placeholder="noun"
          onChange={handleInputChange}
          value={inputValues.noun}
        />
        {showInput && (
          <input
            className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
            type="text"
            name="verb"
            placeholder="Verb"
            onChange={handleInputChange}
            value={inputValues.verb}
          />
        )}
        {showInputA && (
          <input
            className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
            type="text"
            name="adjective"
            placeholder="Adjective"
            onChange={handleInputChange}
            value={inputValues.adjective}
          />
        )}
        {madLib && (
          <div className="flex flex-col">
            <button className="bg-white rounded-full p-3" type="submit">
              Make a MadLib!
            </button>
          </div>
        )}
        <div className="p-5 flex items-center justify-center">{story}</div>
      </form>
    </div>
  );
};

export default InputText;
