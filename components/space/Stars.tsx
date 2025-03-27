"use client";

import React, { useEffect, useState } from "react";

import styles from "@/styles/space/Stars.module.css";

interface StarsProps {
  density?: "low" | "medium" | "high";
  twinkleSpeed?: "slow" | "medium" | "fast";
}

export default function Stars({ density = "medium", twinkleSpeed = "medium" }: StarsProps) {
  const [speedClass, setSpeedClass] = useState("");
  const [densityClass, setDensityClass] = useState("");

  useEffect(() => {
    // Set animation speed based on prop
    switch (twinkleSpeed) {
      case "slow":
        setSpeedClass(styles.twinkleSlow);
        break;
      case "fast":
        setSpeedClass(styles.twinkleFast);
        break;
      default:
        setSpeedClass(styles.twinkleMedium);
    }

    // Set star density based on prop
    switch (density) {
      case "low":
        setDensityClass(styles.starsSparse);
        break;
      case "high":
        setDensityClass(styles.starsDense);
        break;
      default:
        setDensityClass(""); // Medium density is the default in the base stars class
    }
  }, [twinkleSpeed, density]);

  return <div className={`${styles.starsAfterLayer} ${densityClass} ${speedClass}`}></div>;
}
