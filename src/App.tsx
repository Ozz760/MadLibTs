import React from "react";
import InputField from "./components/InputField";

const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline ">Hello World</h1>
      <h2 className="text-2xl font-semibold underline">What's is up?</h2>
      <InputField />
    </div>
  );
};

export default App;
