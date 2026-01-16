function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      details: "info@minilibrary.com",
      link: "mailto:info@minilibrary.com",
      color: "bg-blue-50 border-blue-100",
      hasLink: true
    },
    {
      icon: "📱",
      title: "Call Us",
      details: "+977 9800000000",
      link: "tel:+9779800000000",
      color: "bg-green-50 border-green-100",
      hasLink: true
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "Kathmandu, Nepal",
      link: "https://maps.google.com/?q=Kathmandu+Nepal",
      color: "bg-purple-50 border-purple-100",
      hasLink: true
    },
    {
      icon: "🕒",
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM",
      subDetails: "Sat: 10AM-4PM",
      color: "bg-amber-50 border-amber-100",
      hasLink: false
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "🐦", url: "#", color: "hover:bg-blue-100" },
    { name: "Facebook", icon: "📘", url: "#", color: "hover:bg-blue-100" },
    { name: "Instagram", icon: "📸", url: "#", color: "hover:bg-pink-100" },
    { name: "GitHub", icon: "💻", url: "#", color: "hover:bg-gray-100" },
    { name: "LinkedIn", icon: "💼", url: "#", color: "hover:bg-blue-100" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our Mini Library? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const CardContent = () => (
              <div className={`${item.color} rounded-xl p-6 border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full`}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.details}</p>
                {item.subDetails && (
                  <p className="text-gray-600 text-sm mt-1">{item.subDetails}</p>
                )}
              </div>
            );

            return item.hasLink ? (
              <a
                key={index}
                href={item.link}
                target={item.link && item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="block"
              >
                <CardContent />
              </a>
            ) : (
              <div key={index}>
                <CardContent />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Subject *
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white">
                  <option value="">Select a subject</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="business">Business Inquiries</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  rows="6"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="newsletter" className="ml-2 text-gray-700 text-sm">
                  Subscribe to our newsletter for updates and book recommendations
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-slate-600 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: FAQ & Social */}
          <div className="space-y-8">
            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    q: "How do I add books to my library?",
                    a: "Click the 'Add Book' button on the homepage or in the navigation menu to add new books."
                  },
                  {
                    q: "Can I share my library with others?",
                    a: "Currently, libraries are personal. Sharing features are coming soon!"
                  },
                  {
                    q: "Is Mini Library free to use?",
                    a: "Yes! Mini Library is completely free and open-source."
                  },
                  {
                    q: "How do I delete a book?",
                    a: "Click the delete button on any book card or book details page to remove it."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                      <span className="text-blue-500">❓</span> {faq.q}
                    </h3>
                    <p className="text-gray-600 text-sm ml-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Connect With Us
              </h2>
              <p className="text-gray-600 mb-6">
                Follow us on social media for updates, book recommendations, and community discussions.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 ${social.color} transition-colors duration-300`}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="font-medium text-gray-700">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl border-2 border-blue-100 p-6 sm:p-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Never Miss an Update
                </h3>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter for book recommendations and feature updates.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-slate-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-gray-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-200">Our Location</h2>
          </div>
          <div className="h-64 md:h-80 bg-slate-600 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <p className="text-gray-100 font-medium">Kathmandu, Nepal</p>
              <p className="text-gray-200">Visit our office anytime!</p>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>📧 We typically respond within 24 hours on weekdays.</p>
          <p className="mt-1">Thank you for supporting Mini Library! 📚</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;