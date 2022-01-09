import React from "react";
import Box1 from "./Box1/Box1.jsx";
import Box2 from "./Box2/Box2.jsx";
import PastActivity from "./PastActivtyBox/PastActivity.jsx";
import TopBar from "./TopBar.jsx";
function App() {
  return (
    <div>
      <TopBar />
      <div>
        <Box1 />
        <PastActivity />
      </div>
      <Box2 />
    </div>
  );
}

export default App;
