import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Projects/Details";
import { useState } from "react";
import ThemeContext from "./Components/Theme/Theme"
function App() {
  const [theme, setTheme] = useState("light")
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes>

          <Route element={<Home />} path="/"></Route>
          <Route element={<Details />} path="/project-details/:id"></Route>

        </Routes>
      </ThemeContext.Provider>
    </>
  )
}

export default App;
