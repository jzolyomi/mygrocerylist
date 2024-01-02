import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
export default function AuthPage({ setUser }) {
  //Firebase Logout Function
  function logout() {
    signOut(auth).then(() => {
      setUser({});
    });
  }
  return (
    <div>
      <h1>Welcome to my grocery list</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
