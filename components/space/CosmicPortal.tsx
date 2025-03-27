"use client";

import React, { useEffect, useRef, useState } from "react";

import styles from "@/styles/space/CosmicPortal.module.css";

export default function CosmicPortal() {
  // states to track scroll position and animation speed
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const portalRef = useRef<HTMLDivElement>(null);

  // adjust animation speed
  useEffect(() => {
    const handleScroll = () => {
      // get the portal element's position
      if (!portalRef.current) return;

      const rect = portalRef.current.getBoundingClientRect();
      const portalCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      // calculate how close the portal is to the center of the viewport
      const distanceFromCenter = Math.abs(portalCenter - viewportCenter);
      const maxDistance = window.innerHeight / 2;

      // closer to center, the faster the portal spins (1 = max speed, 0 = min speed)
      const proximityFactor = 1 - Math.min(distanceFromCenter / maxDistance, 1);

      // Add scroll depth to increase intensity as user scrolls down
      const scrollDepth = window.scrollY / (document.body.scrollHeight - window.innerHeight);

      // Combine factors for final animation speed (clamp between 0 and 1)
      const finalSpeed = Math.min(proximityFactor * 0.7 + scrollDepth * 0.3, 1);

      setScrollSpeed(finalSpeed);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create energy segments evenly distributed around the circle
  const createEnergySegments = (count: number) => {
    const segments = [];
    for (let i = 0; i < count; i++) {
      const rotation = i * (360 / count);
      // Use varied segment heights
      const segmentVariant = `energySegment${(i % 6) + 1}`;
      segments.push(
        <div
          key={`segment-${i}`}
          className={`${styles.energySegment} ${styles[segmentVariant]}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      );
    }
    return segments;
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
      <div className={styles.portalContainer} ref={portalRef}>
        {/* Portal Center*/}
        <div
          className={styles.portalBase}
          style={{
            boxShadow: `0 0 ${10 + scrollSpeed * 15}px ${2 + scrollSpeed * 5}px var(--portal-edge)`,
          }}
        ></div>

        {/* Outer Circle */}
        <div
          className={`${styles.portalCircle} ${styles.outerCircle}`}
          style={{
            animationDuration: getAnimationDuration(30, 25),
            // TODO: Fix opacity issue
            opacity: getGlowIntensity(),
          }}
        ></div>

        {/* Energy segments */}
        <div
          className={styles.energyRing}
          style={{
            opacity: 0.6 + scrollSpeed * 0.4,
          }}
        >
          {createEnergySegments(120)}
        </div>
      </div>
    </div>
  );
}
