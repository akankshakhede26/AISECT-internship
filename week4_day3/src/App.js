import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Task 2: Navigation Bar */}
        <Navbar />

        {/* Page Content with Routes */}
        <div className="content">
          <Routes>
            {/* Task 1: 4 Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Task 3: Dynamic Route */}
            <Route path="/post/:postId" element={<PostDetail />} />

            {/* Bonus Add-on: 404 Page Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
