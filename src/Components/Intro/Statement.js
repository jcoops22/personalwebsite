import React from "react";

const Statement = ({ text, children }) => {
  return (
    <div className="bg-white radius-full my-6 max-w-md">
      <div>{text}</div>
      {children}
    </div>
  );
};

export default Statement;
