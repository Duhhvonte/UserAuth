import React from "react"
import './App.css';
import LoginButton from './components/loginbutton';
import LogoutButton from './components/logoutbutton';
import Profile from "./components/profile";

function App() {
  return (
    <>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <Profile></Profile>
    </>
  );
}

export default App;