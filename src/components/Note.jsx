import React from 'react';
import styles from './Note.css';

const Note = ({ title, text, onDelete }) => (
  <div className={styles.note}>
    <h3>{title}</h3>
    <p>{text}</p>
    <button className={styles.button} onClick={onDelete}>
      &times;
    </button>
  </div>
);

export default Note;
