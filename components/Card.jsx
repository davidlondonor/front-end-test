import styles from "../styles/Home.module.css";
import Image from "next/image";

const Card = () => {
  // eslint-disable-line
  return (
    <div className={styles.className}>
      <Image width="900" height="600" src="/images/imagen.jpg" />
      <div className={styles.cardSide}>
        <h1>WATERPROOF SMARTPHONE</h1>
      </div>
    </div>
  );
};
export default Card;
