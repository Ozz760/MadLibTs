import React from "react";

interface MadLibStoryProps {
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  restartStory: (e: React.FormEvent<HTMLFormElement>) => void;
  story: string;
}

const MadLibStory: React.FC<MadLibStoryProps> = ({
  handleFormSubmit,
  restartStory,
  story,
}) => {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col justify-center items-center m-4 text-2xl">
          <button className="bg-white rounded-full p-3" type="submit">
            Make a MadLib!
          </button>
          <div className="m-4">{story}</div>
        </div>
      </form>
      <form onSubmit={restartStory}>
        <div className="flex flex-col justify-center items-center m-4 text-2xl">
          <button className="bg-white rounded-full p-3" type="submit">
            Make another MadLib!
          </button>
        </div>
      </form>
    </div>
  );
};

export default MadLibStory;
