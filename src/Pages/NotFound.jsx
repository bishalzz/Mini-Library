import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      {/* Animated Icon */}
      <div className="animate-bounce mb-6">
        <span className="text-8xl">📚</span>
      </div>
      
      {/* Error Code */}
      <h1 className="text-7xl sm:text-8xl font-bold bg-linear-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-4">
        404
      </h1>
      
      {/* Error Message */}
      <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page not found
      </p>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        The page you're looking for seems to have wandered off the bookshelf.
      </p>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/">
          <button className="px-6 py-3 bg-linear-to-r from-slate-700 to-slate-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Go Back Home
          </button>
        </Link>
        
        <Link to="/about">
          <button className="px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg shadow-lg border-2 border-slate-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </Link>
      </div>
      
      {/* Decorative Elements */}
      <div className="mt-12 text-gray-400 text-sm">
        <p>Lost? Try searching for what you need.</p>
      </div>
    </div>
  );
}

export default NotFound;