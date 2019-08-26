import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div>I'm Home</div>
      <button onClick={() => console.log("clicked")}>Click Me</button>
    </div>
  );
};

export default Home;
