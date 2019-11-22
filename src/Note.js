import React from "react";

export function Note(props) {
  const { color = "red", onDelete } = props;

  return (
    <div className="note" style={{ background: color }}>
      {props.children}
      <span className="note-delete" onClick={onDelete}>
        x
      </span>
    </div>
  );
}
