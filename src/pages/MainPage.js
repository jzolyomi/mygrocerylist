import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";
import axios from "axios";
const axiosInstance = axios.create();
export default function AuthPage({ user, setUser }) {
  //Firebase Logout Function
  function logout() {
    signOut(auth).then(() => {
      setUser({});
    });
  }

  const [response, setResponse] = useState("");
  //Test Api call
  function TestApiCall() {
    setResponse("Sending Api Request");

    //get firebase user token
    const firebaseUserIdToken = user.getIdToken(true).then((idToken) => {
      axiosInstance.interceptors.request.use(
        (config) => {
          // Modify the request configuration or add headers
          config.headers["Content-Type"] = "application/json";
          config.headers.Authorization = `Bearer ${idToken}`;
          return config;
        },
        (error) => {
          // Handle request errors
          return Promise.reject(error);
        },
      );

      //test axios get
      axiosInstance
        .get("http://127.0.0.1:8000/mygrocerylist/auth_test")
        .then(function (response) {
          // handle success
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    });
  }
  return (
    <div>
      <h1>Welcome to my grocery list {user.displayName}</h1>
      <button onClick={logout}>Logout</button>
      <br />
      <button onClick={TestApiCall}>Test Api call</button>
      <p>{response}</p>
    </div>
  );
}
