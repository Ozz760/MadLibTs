import React, { useState } from "react";

type InputType = "noun" | "verb" | "adjective";

const InputText: React.FC = () => {
  const [activeInput, setActiveInput] = useState<InputType>("noun");
  const [inputValues, setInputValues] = useState({
    noun: "",
    verb: "",
    adjective: "",
  });
  // const [noun, setNoun] = useState("");
  // const [verb, setVerb] = useState("");
  // const [adjective, setAdjective] = useState("");
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
    // setNoun("");
    // setVerb("");
    // setAdjective("");
  };

  const handleNextInput = (): void => {
    switch (activeInput) {
      case "noun":
        setActiveInput("verb");
        break;
      case "verb":
        setActiveInput("adjective");
        break;
      case "adjective":
        break;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValues({
      ...inputValues,
      [activeInput]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {activeInput === "noun" && (
        <input
          className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="input"
          placeholder="Noun"
          onChange={handleInputChange}
          value={inputValues.noun}
        />
      )}
      {activeInput === "verb" && (
        <input
          className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="input"
          placeholder="Verb"
          onChange={handleInputChange}
          value={inputValues.verb}
        />
      )}
      {activeInput === "adjective" && (
        <input
          className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="input"
          placeholder="Adjective"
          onChange={handleInputChange}
          value={inputValues.adjective}
        />
      )}
      <button onClick={handleNextInput}>Next</button>
      <button className="bg-white rounded-full p-3" type="submit">
        Make a MadLib!
      </button>
      <div>{story}</div>
    </form>
  );
};

export default InputText;
