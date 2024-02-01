import React, { createContext, useContext, useState, useEffect } from "react"; 
// import "../components/css/Auth.css" 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"; 
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "../config/firebaseConfig";
// import Auth from "../pages/Resume/AuthContext"; 
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext); // פונקציה הוק לשימוש בקונטקסט
};

export default function AuthProvider({ children }){ 
  const [currentUser, setCurrentUser] = useState(); 

  const signup = async (email, password, username, phone) => { 
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ); // יצירת משתמש חדש עם אימייל וסיסמה
      const user = userCredential.user; // קבלת אובייקט המשתמש

      await setDoc(doc(db, "user", user.uid,user.username), { // שמירת פרטי המשתמש ב-Firestore
        email: user.email,
        username: username,
        phone: phone,
      });

      setCurrentUser(user); // עדכון המשתמש הנוכחי בסטייט

    } catch (error) {
      throw error; // זריקת שגיאה במקרה של בעיה
    }
  };

  const login = async (email, password) => { // פונקציה להתחברות
    try {
      await signInWithEmailAndPassword(auth, email, password); 
      const user = auth.currentUser; // קבלת המשתמש הנוכחי
      setCurrentUser(user); // עדכון המשתמש הנוכחי בסטייט
      // localStorage.setItem("user", JSON.stringify(user)); // שמירת המשתמש ב-LocalStorage
    } catch (error) {
      throw error; 
    }
  };

  const logout = async () => {
    try {
      await signOut(auth); 
      // setCurrentUser(null); 
    } catch (error) {
      console.error("Logout failed:", error);
    }
    console.log('hello');
  };


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
   

    <AuthContext.Provider value={{ currentUser, signup, login, logout}}> 
   
      {children}
    </AuthContext.Provider>
  );
};

// import React, { useState } from "react";
// import {
//   createUser,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { auth, db } from "../config/firebaseConfig";

// import "../components/css/Auth.css"

// function Auth() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [phone, setPhone]= useState("");
//   const [isRegistering, setIsRegistering] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (isRegistering) {
//       try {
//         const userCredential = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password,
//           phone
//         );
//         const user = userCredential.user;

//         await setDoc(doc(db, "users", user.uid), {
//           email: user.email,
//           username: username,
//         });

//         localStorage.setItem("user", JSON.stringify(user));
//         alert("Registered and details saved successfully");
//       } catch (error) {
//         console.error("Registration Error:", error);
//         alert(`Registration failed: ${error.message}`);
//       }
//     } else {
//       try {
//         await signInWithEmailAndPassword(auth, email, password,phone);
//         localStorage.setItem("user", JSON.stringify(auth.currentUser));
//         alert("Logged in successfully");
//       } catch (error) {
//         console.error("Login Error:", error);
//         alert(`Login failed: ${error.message}`);
//       }
//     }
//   };

//   return (
//    // ...

{/* <form id="formTOlog" onSubmit={handleSubmit}>
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
  {isRegistering && (
    <>
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
  <button type="submit">{isRegistering ? "Register" : "Login"}</button>
  <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
    {isRegistering ? "Login" : "Register"}
  </button>
</form> */}

//   );
// }

// export default Auth;
