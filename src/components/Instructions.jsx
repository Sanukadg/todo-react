import styles from './instructions.module.css';

export default function Instructions(){
  return(
    <div className={styles.container}>
      <p>
        ⚫ Hit the '+' button or the 'Enter' key on your keyboard to add a new to-do.
      </p>
      <p>
        ⚫ Click on the to-do to mark it as complete.
      </p>
      <p>
        ⚫ Hit the 'x' button to delete a to-do.
      </p>
    </div>
  );
}