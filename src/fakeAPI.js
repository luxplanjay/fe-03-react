import v4 from 'uuid/v4';
import notes from './notes';

export default {
  notes,
  getNotes() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.notes);
      }, 500);
    });
  },
  addNote(note) {
    const newNote = { id: v4(), ...note };

    return new Promise(resolve => {
      setTimeout(() => {
        this.notes.push(newNote);
        resolve({ status: 200, newNote });
      }, 500);
    });
  },
  deleteNote(noteId) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.notes = this.notes.filter(({ id }) => id !== noteId);

        resolve({ status: 200 });
      }, 500);
    });
  },
};
