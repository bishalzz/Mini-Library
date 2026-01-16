import { useEffect, useState } from "react";
import AppRoutes from "./AppRoutes";
import "./App.css";

function App() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks((prev) => [...prev, { id: Date.now(), ...book }]);
  };

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <AppRoutes
      books={books}
      addBook={addBook}
      deleteBook={deleteBook}
    />
  );
}

export default App;
