import React from "react";

// I might have to take the function from InputField and put it here and just pass the props down.
interface MadLibStoryProps {
  noun: string;
  verb: string;
  adjective: string;
}

const MadLibStory = ({ noun, verb, adjective }: MadLibStoryProps) => {
  return <div>MadLibStory</div>;
};

export default MadLibStory;
