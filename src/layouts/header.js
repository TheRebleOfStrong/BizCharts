
import styles from './header.css';

export default function(props) {
  return (
    <div className={styles.normal}>
      <h1>{props.title}</h1>
    </div>
  );
}
