"use client";

import Home from "@/app/page";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ScrollColorChange = ({
  children
  
}: {
  children: any;
  
}) => {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const getColorFromScrollPosition = (scrollPosition: number) => {
    if (scrollPosition <= 20) {
      if (pathname === "/") {
        return scrollPosition <= 10
        ? "#111213"
        : "#454648"
        ? "#575759"
        : "white";
      } else if (pathname === "/features") { // Ensure "features" is spelled correctly
        return scrollPosition <= 30
          ? "#FFFFFF"
          : scrollPosition <= 35
          ? "white"
          : "white";
      } else if (pathname === "/about"){
        return scrollPosition <= 50
          ? "white"
          : scrollPosition <= 50
          ? "black"
          : "gray";
      } else if (pathname === "/getintouch"){
        return scrollPosition <= 80
        ? "#111213"
        : "#111213"

        
      } 
      
      console.log(pathname);
    } else if (pathname === "/" && scrollPosition <= 60) {
      return scrollPosition <= 30
        ? "#959599"
        : "#C4C3C8"
        ? "#E2E2E4"
        : "#C5C4C9";
    } else if (pathname === "/" && scrollPosition <= 90) {
      return scrollPosition <= 70 ? "white" : "white" ? "#E2E2E4" : "#C5C4C9";

    } else if (pathname === "/getintouch" && scrollPosition <= 90) {
      return scrollPosition <= 70 ? "#111213" : "#111213" ? "#111213" : "#31236D";

    } else if (pathname === "/features" && scrollPosition <= 90) {
     return scrollPosition <= 70 ? "white" : "#767777" ? "#E2E2E4" : "#C5C4C9";
    } else if (pathname === "/about" && scrollPosition <= 90) {
      return scrollPosition <= 70 ? "white" : "#767777" ? "#E2E2E4" : "#C5C4C9";
     } 
     else {
      (pathname === "/")
      return "#111213";
    }
  };

  // console.log(scrollPosition);
  const backgroundColor = getColorFromScrollPosition(scrollPosition);

  return (
    <div
      style={{
        backgroundColor,
        transition: "background-color 0.5s",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollColorChange;
