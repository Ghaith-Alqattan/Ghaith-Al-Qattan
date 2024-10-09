import { Route, Routes } from "react-router-dom";
import React, { Suspense, useState } from "react";
import ThemeContext from "./Components/Theme/Theme";
import "./App.css"; // This is where your spinner CSS will be

// Lazy loading components
const Home = React.lazy(() => import("./Pages/Home/Home"));
const Details = React.lazy(() => import("./Pages/Projects/Details"));

function App() {
  const [theme, setTheme] = useState("light");

  // A fallback loading component using the provided spinner styling
  const Loading = () => (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Details />} path="/project-details/:id" />
          </Routes>
        </Suspense>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
