import hero from "../img/main.jpg";
import styles from "../styles/hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.section}>
      <img className={styles.hero} src={hero} alt="luke skywalker" />
    </section>
  );
};
