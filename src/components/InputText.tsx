import React, { useState } from "react";

type InputType = "noun" | "verb" | "adjective";

const InputText: React.FC = () => {
  const [activeInput, setActiveInput] = useState<InputType>("noun");
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");
  const [adjective, setAdjective] = useState("");

  const handleNextInput = () => {
    switch (activeInput) {
      case "noun":
        setActiveInput("verb");
        break;
      case "verb":
        setActiveInput("adjective");
        break;
      case "adjective":
        setActiveInput("noun");
        break;
    }
  };

  return (
    <div>
      {activeInput === "noun" && (
        <input type="noun" onChange={(e) => setNoun(e.target.value)} />
      )}
      {activeInput === "verb" && (
        <input type="verb" onChange={(e) => setVerb(e.target.value)} />
      )}
      {activeInput === "adjective" && (
        <input
          type="adjective"
          onChange={(e) => setAdjective(e.target.value)}
        />
      )}
    </div>
  );
};

export default InputText;
