import React from "react";
import "../css/NavBar.css"; // Create a CSS file for styling
import { useAuth } from "../../pages/Auth";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AlarmIcon from "@mui/icons-material/Alarm";
import { styled } from "@mui/material/styles";
function Navbar() {
  const { currentUser, logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    // navigate('/login'); // Redirect to login or any other page
  };

  return (
    <nav className="navbar">
      {currentUser && (
        <h1>
          Welcome,
          <br /> {currentUser.email}
        </h1>
      )}
      <Button variant="contained" color="primary" onClick={handleLogout}>
        logout
      </Button>
      <div className="logo"></div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </div>

      <ul className="nav-links">
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/Resume">Resume</a>
        </li>
        <li>
          <a href="/AuthContext">Acountes</a>
        </li>
        <li>
          <a href="/AboutPage">about</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
