"use client";

import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const [isMobile, setisMobile] = useState(false)

  const checkIsMobile = () => {
    setisMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  const cursorRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent) => {
    gsap.to(cursorRef.current, {
      duration: 0.3,
      x: e.clientX - 15,
      y: e.clientY - 15,
    });
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setisMobile(window.innerWidth <= 1024);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", moveCursor);
  }

  return <div ref={cursorRef} className={`cursor ${isMobile ? ('hidden'):('visible')}`}></div>;
};

export default Cursor;
