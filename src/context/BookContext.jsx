import { createContext, useContext, useState, useEffect } from "react";
import { data } from "../Utlis/data";

const BookContext = createContext(null);

export const useBookContext = () => {
  return useContext(BookContext);
};

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("mini-library-books");
    if (savedBooks) {
      try {
        return JSON.parse(savedBooks);
      } catch (error) {
        console.error("Error parsing localStorage books:", error);
        return data;
      }
    }
    return data;
  });

  // Save to localStorage whenever books change
  useEffect(() => {
    localStorage.setItem("mini-library-books", JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    const bookWithId = {
      ...newBook,
      id: Date.now(),
      image: newBook.image || "https://via.placeholder.com/200x300?text=No+Cover",
      description: newBook.description || "",
      year: newBook.year || "",
      genre: newBook.genre || "Fiction"
    };
    
    setBooks(prev => [...prev, bookWithId]);
    return bookWithId;
  };

  const deleteBook = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  const updateBook = (id, updatedBook) => {
    setBooks(prev => prev.map(book => 
      book.id === id ? { ...book, ...updatedBook } : book
    ));
  };

  const value = {
    books,
    setBooks,
    addBook,
    deleteBook,
    updateBook
  };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;