import React, { useState } from "react";
import MadLibStory from "./MadLibStory";

const InputField: React.FC = () => {
  const [noun, setNoun] = useState<string>("");
  const [verb, setVerb] = useState<string>("");
  const [adjective, setAdjective] = useState<string>("");
  const [story, setStory] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Display story.
    const story = `The ${noun} ${verb} the ${adjective} dog.`;
    setStory(story);

    setNoun("");
    setVerb("");
    setAdjective("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label className=" flex flex-col items-center justify-center text-2xl">
        Noun:
        <input
          className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="input"
          placeholder="Noun"
          value={noun}
          onChange={(e) => setNoun(e.target.value)}
        ></input>
      </label>
      <label className="flex flex-col items-center justify-center text-2xl">
        Verb:
        <input
          className=" placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="input"
          placeholder="Verb"
          value={verb}
          onChange={(e) => setVerb(e.target.value)}
        ></input>
      </label>
      <label className="flex flex-col items-center justify-center text-2xl">
        Adjective:
        <input
          className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="input"
          placeholder="Adjective"
          value={adjective}
          onChange={(e) => setAdjective(e.target.value)}
        ></input>
      </label>
      {/* View to see values */}
      <MadLibStory handleFormSubmit={handleFormSubmit} story={story} />
    </div>
  );
};

export default InputField;
