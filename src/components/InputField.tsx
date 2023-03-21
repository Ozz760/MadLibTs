import React, { useState } from "react";

const InputField: React.FC = () => {
  const [noun, setNoun] = useState<string>("");
  const [verb, setVerb] = useState<string>("");
  const [adjective, setAdjective] = useState<string>("");

  // I might have to have separate input value for each state.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { currentTarget } = e;
    const inputType = currentTarget.name;
    const inputValue = currentTarget.value;

    // This logic is saying that if either one is true place that one on the screen. What I'm trying to do is to have each display on each p tag when I hit the submit button.
    if (inputType === "noun") {
      setNoun(inputValue);
    } else if (inputType === "verb") {
      setVerb(inputValue);
    } else {
      setAdjective(inputValue);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNoun("");
    setVerb("");
    setAdjective("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">Enter a noun</h1>
        <div className=" flex flex-col items-center justify-center">
          <input
            className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
            type="text"
            name="input"
            placeholder="Noun"
            value={noun}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl">Enter a verb</h1>
          <input
            className=" placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
            type="text"
            name="input"
            placeholder="Verb"
            value={verb}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl">Enter a Adjective</h1>
          <input
            className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
            type="text"
            name="input"
            placeholder="Adjective"
            value={adjective}
            onChange={handleInputChange}
          ></input>
        </div>
        <button className="bg-white rounded-full p-2" type="submit">
          Make a MadLib!
        </button>
        {/* View where to see values */}
        <div>
          <p>{noun}</p>
          <p>{verb}</p>
          <p>{adjective}</p>
        </div>
      </div>
    </form>
  );
};

export default InputField;
