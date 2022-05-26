import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Catalogo from "./components/Catalogo";

import ChatBubble from "./componentes/ChatBubble";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth); // Hook to auth state changes on the app
  useEffect(() => {
    if (user) {
      console.log("User is signed in!", user.uid);
    }
  }, [user]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/Catalogo" element={<Catalogo />}></Route>
        </Routes>
      </Router>
      {user ? <ChatBubble /> : ""}
    </>
  );
}

export default App;
