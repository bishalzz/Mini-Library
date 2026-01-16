
function BookCard({ title, author, image, onDelete }) {
  return (
    <div className="group border border-gray-200 p-2.5 sm:p-3 md:p-4 rounded-lg md:rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 w-full cursor-pointer flex flex-col bg-white hover:bg-gray-50">
      
      {/* Image container - fixed aspect ratio for consistency */}
      <div className="relative w-full pt-[65%] sm:pt-[70%] md:pt-[75%] mb-2.5 sm:mb-3 md:mb-4 rounded overflow-hidden bg-gray-100">
        {image && (
          <img
            src={image}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        )}
      </div>

      {/* Text content */}
      <div className="grow mb-2.5 sm:mb-3 md:mb-4 px-1 sm:px-2">
        <h2 className="text-sm xs:text-sm sm:text-base md:text-lg font-semibold sm:font-bold text-gray-800 mb-1 line-clamp-2 min-h-10 sm:min-h-11">
          {title}
        </h2>
        <p className="text-xs xs:text-xs sm:text-sm md:text-base text-gray-600 line-clamp-1">
          by {author}
        </p>
      </div>

      {/* Delete button */}
      <div className="px-1 sm:px-2 mt-auto">
        <button
          onClick={onDelete}
          className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 text-xs sm:text-sm md:text-base text-white rounded md:rounded-lg bg-slate-700 hover:bg-rose-700 active:bg-rose-700 transition-colors duration-200 shadow-sm hover:shadow flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}

export default BookCard