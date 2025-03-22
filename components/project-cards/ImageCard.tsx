"use client";

import Image from "next/image";

export default function ImageCard({
  imagePath,
  classname,
  // animation,
  alt,
}: {
  imagePath: string;
  classname: string;
  // animation: any; decide between framer and gsap for this component
  alt: string;
}) {
  return (
    <div className={"project-image-card"}>
      <Image src={imagePath} className={classname} alt={alt} />
    </div>
  );
}
