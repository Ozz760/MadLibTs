import React from "react";

interface MadLibStoryProps {
  noun: string;
  verb: string;
  adjective: string;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  arrayWords: string[];
  setArrayWords: React.Dispatch<React.SetStateAction<string[]>>;
}

const makeMadLib = (noun: string, verb: string, adjective: string) => {
  return `The ${noun} ${verb} the ${adjective} dog`;
};

const MadLibStory: React.FC<MadLibStoryProps> = ({
  noun,
  verb,
  adjective,
  handleFormSubmit,
  arrayWords,
  setArrayWords,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col justify-center items-center m-4">
        <button className="bg-white rounded-full p-2" type="submit">
          Make a MadLib!
        </button>
        <div className="m-4">{makeMadLib(noun, verb, adjective)}</div>
      </div>
    </form>
  );
};

export default MadLibStory;
