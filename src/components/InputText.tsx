import React, { useState } from "react";

type InputType = "noun" | "verb" | "adjective";

const InputText: React.FC = () => {
  const [activeInput, setActiveInput] = useState<InputType>("noun");
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");
  const [adjective, setAdjective] = useState("");
  let [story, setStory] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    let num = Math.floor(Math.random() * 2);
    if (num === 0) {
      story = `The ${noun} ${verb} the ${adjective} dog.`;
    } else {
      story = `The ${noun} ${verb} the ${adjective} cat.`;
    }

    setStory(story);
    setNoun("");
    setVerb("");
    setAdjective("");
  };

  const handleNextInput = () => {
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

  return (
    <form onSubmit={handleFormSubmit}>
      {activeInput === "noun" && (
        <input
          className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="input"
          placeholder="Noun"
          value={noun}
          onChange={(e) => setNoun(e.target.value)}
        />
      )}
      {activeInput === "verb" && (
        <input
          className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="input"
          placeholder="Verb"
          value={verb}
          onChange={(e) => setVerb(e.target.value)}
        />
      )}
      {activeInput === "adjective" && (
        <input
          className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="input"
          placeholder="Adjective"
          value={adjective}
          onChange={(e) => setAdjective(e.target.value)}
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
