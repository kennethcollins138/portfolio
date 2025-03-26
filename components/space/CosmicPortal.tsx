"use client";

import React, { useEffect, useRef, useState } from "react";

import "./portal.css";

export default function CosmicPortal() {
  // State to track scroll position and animation speed
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const portalRef = useRef<HTMLDivElement>(null);

  // Listen for scroll events to adjust animation speed
  useEffect(() => {
    const handleScroll = () => {
      // Get the portal element's position
      if (!portalRef.current) return;

      const rect = portalRef.current.getBoundingClientRect();
      const portalCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      // Calculate how close the portal is to the center of the viewport
      const distanceFromCenter = Math.abs(portalCenter - viewportCenter);
      const maxDistance = window.innerHeight / 2;

      // The closer to center, the faster the portal spins (1 = max speed, 0 = min speed)
      const proximityFactor = 1 - Math.min(distanceFromCenter / maxDistance, 1);

      // Add scroll depth to increase intensity as user scrolls down
      const scrollDepth = window.scrollY / (document.body.scrollHeight - window.innerHeight);

      // Combine factors for final animation speed (clamp between 0 and 1)
      const finalSpeed = Math.min(proximityFactor * 0.7 + scrollDepth * 0.3, 1);

      setScrollSpeed(finalSpeed);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Initial calculation
    handleScroll();

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create energy segments evenly distributed around the circle
  const createEnergySegments = (count: number) => {
    const segments = [];
    for (let i = 0; i < count; i++) {
      const rotation = i * (360 / count);
      // Use varied segment heights
      const randomClass = `energy-segment-${(i % 6) + 1}`;
      segments.push(
        <div
          key={`segment-${i}`}
          className={`energy-segment ${randomClass}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      );
    }
    return segments;
  };

  // Creates lightning bolts around the border
  const createBorderLightning = (count: number) => {
    const lightning = [];
    for (let i = 0; i < count; i++) {
      // Create evenly distributed lightning around the circle
      const angle = i * (360 / count);
      const randomClass = `lightning-${(i % 6) + 1}`;

      lightning.push(
        <div
          key={`lightning-${i}`}
          className={`lightning-bolt ${randomClass}`}
          style={{
            position: "absolute",
            left: `${50 + 49.5 * Math.cos((angle * Math.PI) / 180)}%`,
            top: `${50 + 49.5 * Math.sin((angle * Math.PI) / 180)}%`,
            transformOrigin: "center",
            transform: `rotate(${angle + 25}deg)`,
          }}
        />
      );
    }
    return lightning;
  };

  // Calculate animation durations based on scroll speed
  // As scroll speed increases, duration decreases (making animation faster)
  const getAnimationDuration = (baseSpeed: number, factor: number) => {
    return `${baseSpeed - scrollSpeed * factor}s`;
  };

  // Calculate opacity based on scroll speed
  const getGlowIntensity = () => {
    return 0.6 + scrollSpeed * 0.4;
  };

  return (
    <div className="md:w-2/4 flex justify-center">
      <div className="portal-container" ref={portalRef}>
        {/* Portal Center*/}
        <div
          className="portal-base"
          style={{
            boxShadow: `0 0 ${10 + scrollSpeed * 15}px ${2 + scrollSpeed * 5}px var(--portal-edge)`,
          }}
        >
          {/*<div className="portal-stars"></div>*/}
        </div>

        {/* Outer Circle */}
        <div
          className="portal-circle outer-circle"
          style={{
            animationDuration: getAnimationDuration(30, 25),
            opacity: getGlowIntensity(),
          }}
        ></div>

        {/* Energy segments */}
        <div
          className="energy-ring"
          style={{
            opacity: 0.6 + scrollSpeed * 0.4,
          }}
        >
          {createEnergySegments(120)}
        </div>

        {/* Lightning effects */}
        <div
          className="lightning-container"
          style={
            {
              "--lightning-frequency": `${4 - scrollSpeed * 3}s`,
            } as React.CSSProperties
          }
        >
          {createBorderLightning(24)}
        </div>
      </div>
    </div>
  );
}
