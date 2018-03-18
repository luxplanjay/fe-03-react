import React from 'react';
import './Note.css';

const Note = ({ title, text }) => (
  <div className="Note">
    <h3>{title}</h3>
    <p>{text}</p>
    <button className="Note__btn-del">&times;</button>
  </div>
);

export default Note;
