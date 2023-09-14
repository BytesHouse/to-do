import { DreamTeam } from "./DreamTeam";
import { Hero } from "./Hero";
import { textFarGalaxy } from "../utils/constants";
import styles from "../styles/farGalaxy.module.css";

export const Home = () => {
  return (
    <main>
      <Hero />
      <DreamTeam />
      <p className={styles.farGalaxy}>{textFarGalaxy}</p>
    </main>
  );
};
