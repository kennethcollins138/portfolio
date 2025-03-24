import React from "react";

export default function LandingPage({ children, classname }: { children?: React.ReactNode; classname?: string }) {
  return <div className={`${classname} relative min-h-screen flex items-center justify-center`}>{children}</div>;
}
