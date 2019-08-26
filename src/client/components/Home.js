import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>I am Home</h1>
      <button onClick={() => console.log("clicked")}>Click Me</button>
    </div>
  );
};

export default Home;
