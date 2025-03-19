import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: 'general',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <div id="contactus" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <main className="py-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400 mb-8">Have questions about campus events? Reach out to our team!</p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information Section */}
          <div className="bg-gray-800 rounded-lg p-6 md:p-8 flex-1">
            <h2 className="text-2xl font-bold mb-4 text-purple-500">Contact Information</h2>
            <p className="text-gray-400 mb-6">Feel free to get in touch with us using any of the following methods:</p>

            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white">📧</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-gray-400">events@campus.edu</p>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white">📞</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-gray-400">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white">📍</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-gray-400">Student Union Building, Room 302<br />Campus Drive, University Campus</p>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white">⏰</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Office Hours</h3>
                <p className="text-gray-400">Monday - Friday: 9am - 5pm<br />Saturday: 10am - 2pm</p>
              </div>
            </div>

            <div className="flex mt-8 space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors">FB</a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors">IG</a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors">TW</a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors">YT</a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-800 rounded-lg p-6 md:p-8 flex-2">
            <h2 className="text-2xl font-bold mb-4 text-purple-500">Send a Message</h2>
            
            {submitted && (
              <div className="bg-green-800 text-white p-4 rounded-md mb-4">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Event Support</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  rows="6"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="py-6 mt-12 border-t border-gray-700 text-center text-gray-400">
        <p>© 2025 Campus Event Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
