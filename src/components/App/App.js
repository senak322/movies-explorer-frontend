import "./App.css";
// import { useState, useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/signup"
          element={
            <div>Регистер</div>
            // <Register handleRegister={handleRegister} isLoading={isLoading} />
          }
        />
        <Route
          path="/signin"
          element={
            <div>Регистер</div>
            // <Register handleRegister={handleRegister} isLoading={isLoading} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
