import React from "react";

export default function ProjectCard({
  classname,
  children,
  invert,
}: {
  classname?: string;
  children?: React.ReactNode;
  invert?: boolean;
}) {
  return <div className={`${classname} ${invert ? "flex-row-reverse" : "flex-row"}`}>{children}</div>;
}
