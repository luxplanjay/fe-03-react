import React from 'react';
import styles from './Note.css';

const Note = ({ id, title, text, onDelete }) => (
  <div className={styles.note}>
    <h3>{title}</h3>
    <p>{text}</p>

    <ul className={styles.actions}>
      <li>
        <button className={styles.button} onClick={onDelete}>
          &times;
        </button>
      </li>
      <li>
        <input type="checkbox" className={styles.checkbox} />
      </li>
    </ul>
  </div>
);

export default Note;
