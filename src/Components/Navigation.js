import React from "react";

const Navigation = () => {
  return (
    <nav>
      <span
        className="fixed top-2 nav_span w-8 cursor-pointer"
        onClick={() => console.log("we clicked")}
      >
        X
      </span>
      <div
        className={`navigation ${`slide-in-blurred-tr`} bg-white fixed w-full h-screen`}
      >
        <p>Home</p>
        <p>About</p>
        <p>Home</p>
        <p>Work</p>
      </div>
    </nav>
  );
};

export default Navigation;
