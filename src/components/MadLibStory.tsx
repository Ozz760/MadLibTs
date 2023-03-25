import React from "react";

interface MadLibStoryProps {
  noun: string;
  verb: string;
  adjective: string;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  arrayWords: string[];
  setArrayWords: React.Dispatch<React.SetStateAction<string[]>>;
}

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
      <div className="flex justify-center items-center m-4">
        <button className="bg-white rounded-full p-2" type="submit">
          Make a MadLib!
        </button>
      </div>
      {/* When the user hits submit this markup will show with the input words. Otherwise this text will the hidden */}
      <div>
        <p>
          This is a test to the MadLib story. {noun}, {verb}, {adjective}
        </p>
      </div>
      {/* /end */}
    </form>
  );
};

export default MadLibStory;
