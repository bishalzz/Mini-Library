import { useParams, Link } from "react-router-dom";
import { useBookContext } from "../context/BookContext";

function BookDetails() {
  const { id } = useParams();
  const { books, deleteBook } = useBookContext();

  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="min-h-screen bg-linear-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Book Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The book you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Back to Library
          </Link>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${book.title}"?`)) {
      deleteBook(book.id);
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-12">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Library
          </Link>
        </div>

        {/* Book Details Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Left Column - Book Cover */}
            <div className="md:w-2/5 p-6 sm:p-8">
              <div className="w-48 h-64 sm:w-56 sm:h-80 md:w-64 md:h-96 rounded-lg shadow-xl overflow-hidden mx-auto">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x600?text=No+Cover";
                  }}
                />
              </div>
            </div>

            {/* Right Column - Book Info */}
            <div className="md:w-3/5 p-6 sm:p-8 md:p-10">
              {/* Book Title and Author */}
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {book.title}
                </h1>
                <p className="text-xl text-gray-600">
                  by <span className="font-semibold">{book.author}</span>
                </p>
              </div>

              {/* Genre */}
              <div className="mb-6">
                <span className="bg-slate-700 text-white px-4 py-2 rounded text-sm font-semibold">
                  Genre: {book.genre || "Not specified"}
                </span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {book.description || "No description available."}
                </p>
              </div>

              {/* Year if available */}
              {book.year && (
                <div className="mb-6">
                  <p className="text-gray-700">
                    <span className="font-semibold">Publication Year:</span> {book.year}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                <Link
                  to={`/book/${id}/edit`}
                  className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Edit Book
                </Link>

                <button
                  onClick={handleDelete}
                  className="px-6 py-3 bg-linear-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;