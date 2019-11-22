import React, { useState } from "react";
import { NoteEditor } from "./NoteEditor";
import { NotesGrid } from "./NotesGrid";

export function NotesApp() {
  const [notes, setNotes] = useState([]);

  function onNoteAdd(noteText, noteColor) {
    setNotes([...notes, { id: Date.now(), text: noteText, color: noteColor }]);
  }

  function onNoteDelete(note) {
    setNotes(notes.filter(_note => _note.id != note.id));
  }

  return (
    <div>
      <NoteEditor onNoteAdd={onNoteAdd} />
      <NotesGrid
        onNoteAdd={onNoteAdd}
        notes={notes}
        onNoteDelete={onNoteDelete}
      />
    </div>
  );
}
