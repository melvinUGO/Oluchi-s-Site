import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { About, Work, Gallery } from "./pages";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div className="p-5 text-[#2a2a2a]">
      <BrowserRouter>
        <div className="relative max-w-[1000px] my-0 mx-auto">
          <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />

          <nav className="nav">
            <Nav openSidebar={openSidebar} />
          </nav>
          <div className=" mt-10 p-5">
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
