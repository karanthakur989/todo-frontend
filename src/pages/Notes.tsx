import { useState, useEffect } from "react";
import NoteInput from "../components/NoteInput";
import NoteList from "../components/NoteList";

type Note = {
  id: number;
  text: string;
};

type setTokenProps = {
  setToken: (token: string | null) => void
}

function App({ setToken }: setTokenProps) {
  const token = localStorage.getItem("token")

  const [notes, setNotes] = useState<Note[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  useEffect(() => {
    async function getTodo() {
      const res = await fetch("http://54.196.61.196/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();

      const apiNotes = result.data.map((todo: any) => ({
        id: todo.id,
        text: todo.title,
      }));
      setNotes(apiNotes);
    }
    getTodo();
  }, []);

  async function addNote() {
    if (editingText.trim() === "") return;

    const res = await fetch("http://54.196.61.196/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: editingText,
      }),
    });
    const result = await res.json();
    console.log(result);

    setNotes([...notes, { id: result.data.id, text: result.data.title }]);
    setEditingText("");
  }

  function startEdit(note: Note) {
    setEditingId(note.id);
    setEditingText(note.text);
  }

  async function saveEdit() {
    if (editingId === null) return;

    const res = await fetch(`http://54.196.61.196/todos/${editingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: editingText,
      }),
    });
    const result = await res.json();

    setNotes(
      notes.map((n) =>
        n.id === editingId ? { ...n, text: result.data.title } : n
      )
    );

    setEditingId(null);
    setEditingText("");
  }

  async function deleteNote(id: number) {
    const response = await fetch(`http://54.196.61.196/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);

    if (result.success) {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null)
    // window.location.href = "/login";
  }

  return (
    <>
      <h1>Notes App</h1>

      <button onClick={logout}>Logout</button>
      <br /> <br />
      <NoteInput
        text={editingId === null ? editingText : ""}
        onTextChange={setEditingText}
        onAdd={addNote}
      />

      <NoteList
        notes={notes}
        editingId={editingId}
        editingText={editingText}
        onStartEdit={startEdit}
        onEditTextChange={setEditingText}
        onSaveEdit={saveEdit}
        onDelete={deleteNote}
      />
    </>
  );
}

export default App;
