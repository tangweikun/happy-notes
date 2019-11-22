import React, { useRef, useState } from "react";
import "./NoteEditor.css";

export function NoteEditor(props) {
  const { onNoteAdd } = props;
  const [color, setColor] = useState("red");
  const ele = useRef(null);

  function handleAdd() {
    onNoteAdd(ele.current.value, color);
  }

  function handleChangeColor() {}

  return (
    <div className="note-editor">
      <textarea ref={ele} placeholder="Enter your note here..." />
      <button onClick={handleChangeColor}>主题</button>
      <button onClick={handleAdd}>添加</button>
    </div>
  );
}
