import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBookContext } from "../context/BookContext";

function AddBook() {
  const { addBook } = useBookContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: "",
    genre: "Fiction",
    year: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const genres = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Biography",
    "Self-Help",
    "History",
    "Science",
    "Poetry",
    "Romance",
    "Horror",
    "Thriller",
    "Novel",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    if (formData.image && !isValidUrl(formData.image)) {
      newErrors.image = "Please enter a valid URL";
    }

    if (
      formData.year &&
      (isNaN(formData.year) ||
        formData.year < 1000 ||
        formData.year > new Date().getFullYear())
    ) {
      newErrors.year = "Please enter a valid year";
    }

    return newErrors;
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    // Use context to add book
    addBook(formData);

    // Show success and navigate back
    alert("Book added successfully!");
    navigate("/");
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setFormData({
      title: "",
      author: "",
      image: "",
      genre: "Fiction",
      year: "",
      description: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Add a New Book
          </h1>
          <p className="text-gray-600 text-lg">
            Fill in the details to add a new book to your library
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title & Author */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Book Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter book title"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-2">{errors.title}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Author *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Enter author name"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.author ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                />
                {errors.author && (
                  <p className="text-red-500 text-sm mt-2">{errors.author}</p>
                )}
              </div>
            </div>

            {/* Cover Image URL */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Cover Image URL
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/book-cover.jpg"
                  className={`flex-grow px-4 py-3 rounded-lg border ${
                    errors.image ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                />
                <div className="flex-shrink-0 text-sm text-gray-500">
                  Optional
                </div>
              </div>
              {errors.image && (
                <p className="text-red-500 text-sm mt-2">{errors.image}</p>
              )}
              {formData.image && isValidUrl(formData.image) && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Preview:</p>
                  <div className="w-32 h-48 border rounded-lg overflow-hidden">
                    <img
                      src={formData.image}
                      alt="Book cover preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/200x300?text=Invalid+URL";
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Genre & Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Genre
                </label>
                <select
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white"
                >
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Publication Year
                </label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="e.g., 2023"
                  min="1000"
                  max={new Date().getFullYear()}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.year ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                />
                {errors.year && (
                  <p className="text-red-500 text-sm mt-2">{errors.year}</p>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Short Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write a brief description of the book..."
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5"
                } text-white shadow-lg hover:shadow-xl`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Adding Book...
                  </div>
                ) : (
                  <>
                    <span className="mr-2">📖</span> Add to Library
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                Reset Form
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="flex-1 px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                Cancel
              </button>
            </div>

            {/* Required Fields Note */}
            <div className="text-sm text-gray-500 text-center">
              <p>* Required fields</p>
            </div>
          </form>
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <span className="text-xl">💡</span> Tips for Adding Books
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-green-500">✓</span>
              Use high-quality cover images for better display
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-green-500">✓</span>
              Include accurate publication year and page count
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-green-500">✓</span>
              Double-check author names for consistency
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-green-500">✓</span>
              Add a brief description to remember key points
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
