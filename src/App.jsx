import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./pages/Auth";
import Home from "./pages/Home";
import Resume from "./pages/Resume/Resume";
import NavBar from "./components/NavBar/NavBar";
import AboutPage from "./pages/About"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Auth from './pages/Resume/AuthContext'

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    // ... more theme options
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
         
             <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/AuthContext" element={<Auth />} />
           

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
