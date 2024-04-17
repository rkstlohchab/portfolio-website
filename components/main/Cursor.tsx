"use client";

import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent) => {
    gsap.to(cursorRef.current, {
      duration: 0.3,
      x: e.clientX - 15,
      y: e.clientY - 15,
    });
  };

  useEffect(() => {
    gsap.set(cursorRef, { xPercent: 100, yPercent: 100 });
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", moveCursor);
  }

  return <div ref={cursorRef} className="cursor max-md:hidden"></div>;
};

export default Cursor;
