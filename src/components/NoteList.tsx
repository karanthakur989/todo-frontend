import NoteItem from "./NoteItem";

type Note = {
  id: number;
  text: string;
};

type NoteListProps = {
  notes: Note[];
  editingId: number | null;
  editingText: string;
  onStartEdit: (note: Note) => void;
  onEditTextChange: (value: string) => void;
  onSaveEdit: () => void;
  onDelete: (id: number) => void;
};

function NoteList({
  notes,
  editingId,
  editingText,
  onStartEdit,
  onEditTextChange,
  onSaveEdit,
  onDelete,
}: NoteListProps) {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem
          // key={note.id}
          note={note}
          editingId={editingId}
          editingText={editingText}
          onStartEdit={onStartEdit}
          onEditTextChange={onEditTextChange}
          onSaveEdit={onSaveEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default NoteList;
