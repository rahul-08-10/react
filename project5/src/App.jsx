import StartGame from "./components/StartGame/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay/GamePlay";

function App() {
  const [IsGameStart, SetGameStart] = useState(true);
  const toggleGame = () => {
    SetGameStart((prev) => !prev);
  };
  return (
    <>
      {IsGameStart ? <GamePlay /> : <StartGame toggle={toggleGame} />}
    </>
  );
} 

export default App
