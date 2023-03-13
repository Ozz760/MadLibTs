import React from "react";
import InputField from "./components/InputField";

const App: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline flex flex-col items-center justify-center">
        Hello World
      </h1>
      <h2 className="text-2xl font-semibold underline flex flex-col items-center justify-center">
        What's up?
      </h2>
      <InputField />
    </div>
  );
};

export default App;
