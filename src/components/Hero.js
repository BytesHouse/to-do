import hero from "../img/main.jpg";
import styles from "../styles/hero.module.css";

export const Hero = () => {
  return (
    <section className="float-left w-25 row mt-1 mr-3 ml-1">
      <img className={`${styles.hero}`} src={hero} alt="luke skywalker" />
    </section>
  );
};
