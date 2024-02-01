import React, { useState } from "react"; 
import { useAuth } from "../Auth"; 
import "../../components/css/Auth.css"; 
import Button from "@mui/material/Button";

function Auth() {
  const { signup, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); 
  const [phone, setPhone] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); 

  const handleSubmit = async (e) => {

    e.preventDefault(); 

    if (isRegistering) {
        
      // בדיקה תהליך רישום
      try {
        await signup(email, password,password, username, phone); // רישום 
        alert("Registered and logged in successfully"); 
      } catch (error) {
        console.error("Registration Error:", error);
        alert(`Registration failed: ${error.message}`);
      }
    } else {
      // טיפול בהתחברות
      try {
        await login(email, password); //  להתחבר
        alert("Logged in successfully"); 
      } catch (error) {
        console.error("Login Error:", error); 
        alert(`Login failed: ${error.message}`); 
      }
    }
  };

  return (
    <form id="formTOlog" onSubmit={handleSubmit}>
      
  
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isRegistering && ( //  להצגת שדות נוספים  ברישום
        <>
             <input
            type="password"
            placeholder="Password again"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </>
      )}
      <Button type="submit">{isRegistering ? "Register" : "Login"}</Button>
      <Button type="button" onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Login" : "Register"}
      </Button>
    </form>
  );
}

export default Auth;
