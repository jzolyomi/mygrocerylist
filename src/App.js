import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithPopup, signOut } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
