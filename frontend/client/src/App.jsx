import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import RoastJoke from "./components/RoastJoke";

function App() {
  const [showJoke, setShowJoke] = useState(false);

  const joke = {
    content: "You're so slow, even a snail sent you a 'hurry up' message!",
    author: "John Doe",
    target: "Lazy Larry",
  };

  return (
    <div>
      <LandingPage onShowJoke={() => setShowJoke(true)} showJoke={showJoke} joke={joke} />
    </div>
  );
}

export default App;
