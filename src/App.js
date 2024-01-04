import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";

function App() {
  const navigate = useNavigate();
  //User data and loggedIn State
  const [user, setUser] = useState({});

  //Use Firebase OnAuthStateChanged in a sideeffect to change the user and the logged in state.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/login", { replace: true });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage setUser={setUser} user={user} />} />
        <Route path="/login" element={<AuthPage setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
