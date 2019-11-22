import React, { useRef, useState, useEffect } from "react";
import { Note } from "./Note";

export function NotesGrid(props) {
  const { onNoteDelete, notes } = props;

  return (
    <div className="notes-grid">
      {notes.map(note => (
        <Note
          key={note.id}
          color={note.color}
          onDelete={() => onNoteDelete(note)}
        >
          {note.text}
        </Note>
      ))}
    </div>
  );
}
