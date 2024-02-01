// import React, { useState, useEffect, useContext } from "react";

// // const userContext = createContext({});


// export default function UserProvider({ children }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//   }, []);
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }





// // export default function useAuth(){
// //     return useContext(AuthContext)
// // }

//   // const [isLoggedIn,setIsLoggedIn] = useState(false)

//   // const value = {
//   //     authUser,
//   //     setAuthUser,
//   //     isLoggedIn,
//   //     setIsLoggedIn
//   // }
