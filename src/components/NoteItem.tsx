type Note = {
  id: number
  text: string
}

type NoteItemProps = {
  note: Note
  editingId: number | null
  editingText: string
  onStartEdit: (note: Note) => void
  onEditTextChange: (value: string) => void
  onSaveEdit: () => void;
  onDelete: (id: number) => void;
}

function NoteItem ({note, editingId, editingText, onStartEdit, onEditTextChange, onSaveEdit, onDelete}: NoteItemProps) {
  const isEditing = editingId === note.id

  return (
    <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {isEditing ? (
        <input
          value={editingText}
          autoFocus
          onChange={(e) => onEditTextChange(e.target.value)}
          onBlur={onSaveEdit}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSaveEdit();
          }}
        />
      ) : (
        <span onDoubleClick={() => onStartEdit(note)}>
          {note.text}
        </span>
      )}

      <span
        onClick={() => onDelete(note.id)}
        style={{ cursor: "pointer", color: "red" }}
      >
        🗑
      </span>
    </li>
  )
}

export default NoteItem