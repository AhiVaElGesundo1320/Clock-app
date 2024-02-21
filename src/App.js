import "./App.css";

import { Main } from "./Components/Main";
import { ThemeContext } from "./Components/ThemeContext/ThemeContext";

function App() {
  return (
    <div className="App h-screen flex flex-col justify-center bg-gradient-to-r from-teal-300 to-cyan-500 dark:bg-gradient-to-r dark:from-cyan-950 dark:to-teal-700 text-white">
      <ThemeContext>
      <Main />
      </ThemeContext>
    </div>
  );
}

export default App;
