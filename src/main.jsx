
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import  AuthProvider  from "./pages/Auth"; // Import  AuthProvider from  AuthContext 
const root = createRoot(document.getElementById("root"));
root.render(
  
    <AuthProvider>
      <App />
    </AuthProvider>
  
  
);



// import React from "react";
// import { createRoot } from "react-dom";
// import App from "./App";
// import AuthProvider from "./AuthContext";

// const root = createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </React.StrictMode>
// );
















// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// // import  UserProvider from './context/userContext.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(

//     <App />

// )

