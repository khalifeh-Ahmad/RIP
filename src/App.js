import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Wizard from "./pages/Wizard";
import Dashboard from "./pages/Dashboard";
import Memorials from "./pages/Memorials";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";



const App = () => {
  return (
    <Router>
      <GlobalStyles />
      {/* <Header /> */}
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wizard" element={<Wizard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/memorials" element={<Memorials />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
