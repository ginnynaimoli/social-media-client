import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { themeSettings } from "theme";
import Homepage from "views/homepage/Homepage";
import LoginPage from "views/loginPage/LoginPage";
import ProfilePage from "views/profilePage/ProfilePage";

function App() { 
  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const isAuth = Boolean(useSelector((state) => state.token))

  
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={isAuth ? <Homepage /> : <Navigate to='/' /> } />
          <Route path='/profile/:userId' element={isAuth ? <ProfilePage /> : <Navigate to='/' /> } />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
