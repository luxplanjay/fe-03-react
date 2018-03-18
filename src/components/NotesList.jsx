import React from 'react';
import Note from './Note';
import notes from '../notes';
import './NotesList.css';

const NotesList = (props) => (
  <ul className="NotesList">
    {notes.map(note => (
      <li className="NotesList__item" key={note.id}>
        <Note {...note} />
      </li>
    ))}
  </ul>
);

export default NotesList;
