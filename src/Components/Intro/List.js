import React from "react";

const List = ({ items, children }) => {
  return (
    <div>
      <ul>
        {items.map((item, ind) => (
          <li key={ind}>{item}</li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default List;
