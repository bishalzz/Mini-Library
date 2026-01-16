import { Link } from "react-router-dom";
function About() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="px-4 py-12 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-slate-500 text-white rounded-full text-sm font-semibold">
            <span className="text-lg">✨</span>
            Your Digital Reading Companion
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="bg-linear-to-r from-slate-600 to-slate-100 bg-clip-text text-transparent">
              Mini Library
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A beautifully crafted digital sanctuary where your favorite stories live, 
            breathe, and inspire—all in one elegantly organized space.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: "📚", title: "Digital Bookshelf", desc: "Organize your book collection" },
            { icon: "⚡", title: "Lightning Fast", desc: "Instant page loads" },
            { icon: "📱", title: "Mobile First", desc: "Perfect on any device" },
            { icon: "✨", title: "Smart Features", desc: "Intuitive design" }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">❤️</span>
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 mb-4">
            We believe that in a world full of distractions, a good book remains one of 
            life's greatest pleasures. Mini Library was born from a simple idea: 
            <span className="font-semibold"> make reading more accessible, organized, and joyful</span>.
          </p>
          <p className="text-gray-700">
            We're on a mission to help readers rediscover the magic of books by providing 
            a beautiful, intuitive space to curate and celebrate their reading journeys.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "1,000+", label: "Books", icon: "📚" },
            { value: "500+", label: "Readers", icon: "😊" },
            { value: "50+", label: "Countries", icon: "🌍" },
            { value: "∞", label: "Coffee Cups", icon: "☕" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Reading Journey?
          </h2>
          <div className="flex justify-center gap-4">
           
            <Link className="px-6 py-3 bg-linear-to-r from-slate-600 to-slate-300 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" to="/">Get Started Free</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;