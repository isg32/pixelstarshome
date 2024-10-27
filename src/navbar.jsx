import React, { useState, useEffect } from "react";
function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav className={`${sticky ? "sticky" : ""}`}>
      <div className="nav-inner">
        <a href="#home">Home</a>
        <a href="#download">Download</a>
        <a href="#about">About</a>
        <div className="links">
          <span className="logo">Logo.</span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
