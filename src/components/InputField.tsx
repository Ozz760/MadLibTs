import React, { useState } from "react";
import InputText from "./InputText";
import MadLibStory from "./MadLibStory";

const InputField: React.FC = () => {
  const [noun, setNoun] = useState<string>("");
  const [verb, setVerb] = useState<string>("");
  const [adjective, setAdjective] = useState<string>("");
  let [story, setStory] = useState<string>("");

  // Function to make a MabLib.
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

  // Function to restart the story.
  const restartStory = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setStory("");
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
      <MadLibStory
        handleFormSubmit={handleFormSubmit}
        restartStory={restartStory}
        story={story}
      />
      {/* Working on the switch cases */}
      <InputText />
    </div>
  );
};

export default InputField;
