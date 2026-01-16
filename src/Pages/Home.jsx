import BookCard from "../Components/BookCard";
import { useBookContext } from "../context/BookContext";
import { Link } from "react-router-dom";

function Home() {
  const { books, deleteBook } = useBookContext();

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Header with Add Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Welcome to Mini Library
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            You have {books.length} book{books.length !== 1 ? 's' : ''} in your collection
          </p>
        </div>
        
        <Link 
          to="/add-book"
          className="px-5 py-3 bg-slate-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start"
        >
          <span className="text-lg">+</span>
          <span>Add New Book</span>
        </Link>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {books.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
            onDelete={() => deleteBook(book.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {books.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No books yet!</h3>
          <p className="text-gray-600 mb-6">Start building your library by adding your first book.</p>
          <Link 
            to="/add-book"
            className="inline-block px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Add Your First Book
          </Link>
        </div>
      )}

      {/* Floating Action Button for Mobile */}
      <Link
        to="/add-book"
        className="fixed bottom-6 right-6 sm:hidden bg-linear-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50"
        title="Add New Book"
      >
        <span className="text-2xl">+</span>
      </Link>
    </div>
  );
}

export default Home;