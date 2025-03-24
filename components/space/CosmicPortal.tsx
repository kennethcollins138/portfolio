import React from "react";

import "./portal.css";

export default function CosmicPortal() {
  const createEnergySegments = (count: number) => {
    const segments = [];
    for (let i = 0; i < count; i++) {
      const rotation = i * (360 / count);
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

  // const createTendrils = (count: number) => {
  //   const tendrils = [];
  //   for (let i = 0; i < count; i++) {
  //     const rotation = i * (360 / count);
  //     const randomClass = `tendril-${(i % 6) + 1}`;
  //     tendrils.push(
  //       <div
  //         key={`tendril-${i}`}
  //         className={`tendril ${randomClass}`}
  //         style={{ transform: `rotate(${rotation}deg) translateY(-50%)`, top: "50%", left: "50%" }}
  //       />
  //     );
  //   }
  //   return tendrils;
  // };
  //
  // const createLightning = (count: number) => {
  //   const lightning = [];
  //   for (let i = 0; i < count; i++) {
  //     const randomRotation = Math.floor(Math.random() * 360);
  //     const randomClass = `lightning-${(i % 4) + 1}`;
  //     lightning.push(
  //       <div
  //         key={`lightning-${i}`}
  //         className={`lightning-bolt ${randomClass}`}
  //         style={{
  //           top: "50%",
  //           left: "50%",
  //           transformOrigin: "center",
  //           transform: `rotate(${randomRotation}deg)`,
  //         }}
  //       />
  //     );
  //   }
  //   return lightning;
  // };

  return (
    <div className="portal-container">
      {/* Black hole */}
      <div className="portal-base">
        <div className="portal-stars"></div>
      </div>

      {/* Energy ring with segments */}
      <div className="energy-ring">{createEnergySegments(36)}</div>

      {/*/!* Lightning effects *!/*/}
      {/*<div className="lightning-container">{createLightning(16)}</div>*/}

      {/*/!* Energy tendrils radiating outward *!/*/}
      {/*<div className="tendrils-container">{createTendrils(24)}</div>*/}
    </div>
  );
}
