import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarState, setSidebarState] = useState(() => {
    return localStorage.getItem("sidebarState") || "full";
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // define ao carregar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarState", sidebarState);
  }, [sidebarState]);

  const handleToggleSidebar = () => {
    if (isMobile) {
      setSidebarState((prev) => (prev === "hidden" ? "full" : "hidden"));
    } else {
      setSidebarState((prev) => (prev === "full" ? "collapsed" : "full"));
    }
  };

  const sidebarWidth =
    sidebarState === "hidden"
      ? "0px"
      : sidebarState === "collapsed"
      ? "80px"
      : "240px";

  return (
    <>
      <Header onToggleSidebar={handleToggleSidebar} />

      <div className="d-flex">
        {sidebarState !== "hidden" && <Sidebar state={sidebarState} />}
        <main
          className="flex-grow-1 p-4"
          style={{
            marginTop: "100px",
            marginLeft: sidebarWidth,
            transition: "margin-left 0.3s ease",
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
}
