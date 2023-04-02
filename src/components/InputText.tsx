import React, { useState } from "react";

type InputType = "noun" | "verb" | "adjective";

const InputText = () => {
  const [activeInput, setActiveInput] = useState<InputType>("noun");

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
        <input type="text" onChange={handleNextInput} />
      )}
    </div>
  );
};

export default InputText;
