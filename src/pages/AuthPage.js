import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase";
import { useNavigate } from "react-router-dom";
export default function AuthPage({ setUser }) {
  const navigate = useNavigate();
  //Firebase Login Function
  function login() {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}
