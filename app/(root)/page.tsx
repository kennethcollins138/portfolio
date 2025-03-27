import CosmicPortal from "@/components/space/CosmicPortal";
import LandingSection from "@/components/space/LandingSection";
import Nebula from "@/components/space/Nebula";
import Stars from "@/components/space/Stars";
import styles from "@/styles/space/CosmicBackground.module.css";

export default function Home() {
  return (
    <div className={styles.backgroundPage}>
      <div className={styles.cosmicBackground}>
        <Stars density="medium" twinkleSpeed="medium" />
        <Nebula intensity="medium" />
      </div>

      <LandingSection>
        <CosmicPortal />
      </LandingSection>
    </div>
  );
}
