import React, { useState } from "react";
import InputField from "./components/InputField";
import MadLibStory from "./components/MadLibStory";
// Import a json file that has stories for the MadLib game.

const App: React.FC = () => {
  const [wordsFromUser, setWordsFromUser] = useState<string[]>([]);

  return (
    <div className="">
      <InputField />
      {/* <MadLibStory /> */}
    </div>
  );
};

export default App;
