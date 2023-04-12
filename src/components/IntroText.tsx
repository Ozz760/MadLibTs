import React from "react";

const IntroText = () => {
  return (
    <div className="w-full h-32 bg-gradient-to-b from-slate-500 to-white">
      <h1 className="text-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-black">
        Mad Libs
      </h1>
      <h3 className="text-center text-3xl font-medium text-slate-600">
        {" "}
        Start the game by giving a noun
      </h3>
    </div>
  );
};

export default IntroText;
