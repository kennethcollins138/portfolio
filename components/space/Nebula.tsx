import React from "react";

import styles from "@/styles/space/Nebula.module.css";

interface NebulaProps {
  primaryColor?: string;
  secondaryColor?: string;
  intensity?: "low" | "medium" | "high";
}

export default function Nebula({
  primaryColor = "var(--color-primary)",
  secondaryColor = "var(--nebula-color)",
  intensity = "medium",
}: NebulaProps) {
  const getOpacityClass = () => {
    switch (intensity) {
      case "low":
        return styles.opacityLow;
      case "high":
        return styles.opacityHigh;
      default:
        return styles.opacityMedium;
    }
  };

  // custom style for the primary and secondary colors
  const nebulaStyle = {
    background: `
      radial-gradient(circle at 30% 50%, ${primaryColor}, transparent 60%),
      radial-gradient(circle at 70% 50%, ${secondaryColor}, transparent 60%)
    `,
  };

  return <div className={`${styles.nebulaFog} ${getOpacityClass()}`} style={nebulaStyle}></div>;
}
