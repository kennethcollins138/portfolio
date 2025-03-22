import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PerspectiveCamera, Sphere } from '@react-three/drei';

export default function LandingSection() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 3D Scene */}
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />

        {/* Placeholder for Character */}
        <Sphere args={[0.5, 32, 32]} position={[0, -1, 0]}>
          <meshStandardMaterial color="white" />
        </Sphere>

        {/* Glowing Portal */}
        <mesh position={[0, 0, -3]}>
          <torusGeometry args={[2, 0.3, 16, 100]} />
          <meshStandardMaterial emissive="blue" emissiveIntensity={2} />
        </mesh>
      </Canvas>

      {/* Overlay Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
      >
        <h1 className="text-4xl font-bold">Welcome to My Digital World</h1>
        <p className="mt-2 text-lg">Building the future, one dimension at a time.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-4 px-6 py-2 bg-blue-600 rounded-lg text-white font-bold shadow-lg"
        >
          Start the Journey
        </motion.button>
      </motion.div>
    </div>
  );
}
