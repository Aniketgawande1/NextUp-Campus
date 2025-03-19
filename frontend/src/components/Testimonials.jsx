import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Computer Science, Senior",
    text: "The campus events platform has completely transformed how I discover and participate in university activities. The interface is intuitive and I never miss important events anymore!",
    img: "/api/placeholder/80/80",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Admin, Junior",
    text: "As a club organizer, this platform has made it incredibly easy to promote our events and track attendance. The analytics features are particularly helpful for planning future events.",
    img: "/api/placeholder/80/80",
    rating: 5,
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Biomedical Engineering, PhD",
    text: "I love how the platform allows me to filter events based on my academic interests. I've attended several research seminars that I wouldn't have discovered otherwise.",
    img: "/api/placeholder/80/80",
    rating: 4,
  },
  {
    id: 4,
    name: "Marcus Williams",
    role: "Fine Arts, Sophomore",
    text: "The event reminder feature has been a game-changer for me. I'm able to manage my busy schedule while still participating in campus cultural activities that inspire my work.",
    img: "/api/placeholder/80/80",
    rating: 5,
  },
];

const Testimonials = () => {
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);
  
  // Effect to check system preference and set dark mode accordingly
  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
    
    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : darkMode ? 'text-gray-600' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            What Our Users Say
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Hear from students and faculty about how our campus events platform has enhanced their university experience and community engagement.
          </p>
        </div>

        <div className="mt-12">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="px-3">
                <div className={`rounded-lg shadow-lg overflow-hidden h-full transition-transform duration-300 hover:scale-105 flex flex-col ${darkMode ? 'bg-gray-800 shadow-gray-700' : 'bg-white'}`}>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
                      />
                      <div>
                        <h3 className={`font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{data.name}</h3>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{data.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {renderStars(data.rating)}
                    </div>
                    
                    <blockquote>
                      <p className={`italic leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>"{data.text}"</p>
                    </blockquote>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-700 to-purple-800 p-4 text-center">
                    <a 
                      href="/#testimonials"
                      className="text-white text-sm font-medium hover:text-yellow-300 transition-colors duration-300"
                    >
                      Read Full Story
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/#share"
            className="inline-block bg-gradient-to-r from-blue-700 to-purple-800 hover:from-blue-800 hover:to-purple-900 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;