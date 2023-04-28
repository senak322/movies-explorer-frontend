import "./App.css";
// import { useState, useEffect, useCallback } from "react";
import { Route, Routes, useLocation  } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/signup"
          element={
            <Register />
            // <Register handleRegister={handleRegister} isLoading={isLoading} />
          }
        />
        <Route
          path="/signin"
          element={
            <Register />
            // <Register handleRegister={handleRegister} isLoading={isLoading} />
          }
        />
      </Routes>
      {pathname === '/' && <Footer />}
    </div>
  );
}

export default App;
