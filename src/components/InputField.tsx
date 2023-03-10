import React from "react";

const InputField: React.FC = () => {
  return (
    <form>
      <input type="input" placeholder="Enter task"></input>
      <button type="submit">Go</button>
    </form>
  );
};

export default InputField;
