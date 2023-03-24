import React from "react";

interface MadLibStoryProps {
  noun: string;
  verb: string;
  adjective: string;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MadLibStory: React.FC<MadLibStoryProps> = ({
  noun,
  verb,
  adjective,
  handleFormSubmit,
}) => {
  return (
    <div>
      <button className="bg-white rounded-full p-2" type="submit">
        Make a MadLib!
      </button>
    </div>
  );
};

export default MadLibStory;
