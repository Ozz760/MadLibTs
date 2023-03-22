import React, { useState } from "react";

const InputField: React.FC = () => {
  const [noun, setNoun] = useState<string>("");
  const [verb, setVerb] = useState<string>("");
  const [adjective, setAdjective] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
            onChange={(e) => setNoun(e.target.value)}
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
            onChange={(e) => setVerb(e.target.value)}
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
            onChange={(e) => setAdjective(e.target.value)}
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
