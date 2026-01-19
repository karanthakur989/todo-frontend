type NoteInputProps = {
  text: string;
  onTextChange: (value: string) => void;
  onAdd: () => void;
};

function NoteInput({ text, onTextChange, onAdd }: NoteInputProps) {
  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="Type a note..."
        onChange={(e) => onTextChange(e.target.value)}
      />
      <button onClick={onAdd}>Add Note</button>
    </>
  );
}

export default NoteInput;
