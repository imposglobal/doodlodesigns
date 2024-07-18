import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from "./gallery.module.css";

const Arrows = () => {
  return (
    <div className={styles.arrowContainer}>
      <FontAwesomeIcon icon={faChevronDown} className={`${styles.arrow} ${styles.arrow1}`} />
      <FontAwesomeIcon icon={faChevronDown} className={`${styles.arrow} ${styles.arrow2}`} />
      <FontAwesomeIcon icon={faChevronDown} className={`${styles.arrow} ${styles.arrow3}`} />
      <FontAwesomeIcon icon={faChevronDown} className={`${styles.arrow} ${styles.arrow4}`} />
      <FontAwesomeIcon icon={faChevronDown} className={`${styles.arrow} ${styles.arrow5}`} />
      <FontAwesomeIcon icon="fa-solid fa-font-awesome" />
    </div>
  );
};

export default Arrows;
