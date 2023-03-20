import React, { useState } from "react";

const InputField: React.FC = () => {
  const [noun, setNoun] = useState<string>("");
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl">Enter a noun</h1>
      <div className=" flex flex-col items-center justify-center">
        <input
          className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="input"
          placeholder="Noun"
        ></input>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl">Enter a verb</h1>
        <input
          className=" placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="input"
          placeholder="Verb"
        ></input>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl">Enter a Adjective</h1>
        <input
          className="placeholder:italic placeholder:text-slate-500 border border-slate-200 rounded-md pl-2 pr-3 bg-white m-5 w-full p-1 block shadow-sm focus:outline-none focus:border-black"
          type="text"
          name="input"
          placeholder="Adjective"
        ></input>
      </div>
    </div>
  );
};

export default InputField;
