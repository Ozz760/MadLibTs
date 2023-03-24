import React from "react";

interface MadLibStoryProps {
  noun: string;
  verb: string;
  adjective: string;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MadLibStory = ({
  noun,
  verb,
  adjective,
  handleFormSubmit,
}: MadLibStoryProps) => {
  return <div>MadLibStory</div>;
};

export default MadLibStory;
