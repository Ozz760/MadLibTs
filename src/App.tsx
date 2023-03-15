import React, { useState } from "react";
import InputField from "./components/InputField";
// Import a json file that has stories for the MadLib game.

const App: React.FC = () => {
  const [wordsFromUser, setWordsFromUser] = useState<string[]>([]);

  return (
    <div className="">
      <InputField />
    </div>
  );
};

export default App;
