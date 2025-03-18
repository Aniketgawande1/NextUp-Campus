import React from "react";
import HeroPng from "../assets/coffee2.png";
import { FaCalendarCheck, FaUsers } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          ></div>
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-12 text-center sm:text-left">
          
          {/* Text Section */}
          <div className="flex flex-col items-center sm:items-start gap-6">
            <div className="flex items-center gap-2">
              <div className="h-1 w-6 bg-purple-500 rounded-full"></div>
              <p className="text-purple-400 font-medium uppercase tracking-wider text-sm">
                2025 Annual Event Series
              </p>
              <div className="h-1 w-6 bg-purple-500 rounded-full"></div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              Connect at Campus{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Events
              </span>
            </h1>

            <p className="text-gray-300 text-lg max-w-lg">
              Join thousands of students and faculty at our premier networking events, workshops, and conferences designed to inspire and connect.
            </p>

            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-lg flex items-center gap-2 font-medium hover:shadow-lg transition duration-300">
                Register Now
                <FaCalendarCheck />
              </button>
              <button className="bg-transparent border border-gray-600 text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition duration-300">
                Learn More
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="bg-gray-700 p-2 rounded-full">
                  <FaUsers className="text-purple-400" />
                </div>
                <span className="text-gray-300">5000+ Attendees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-gray-700 p-2 rounded-full">
                  <IoLocationSharp className="text-purple-400" />
                </div>
                <span className="text-gray-300">Multiple Venues</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <img src={HeroPng} alt="Event Image" className="w-[300px] sm:w-[400px] relative z-10" />

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 sm:top-16 sm:left-16 bg-gray-800/80 border border-gray-700 p-4 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <FaCalendarCheck className="text-purple-400 text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Next Event</h3>
                  <p className="text-gray-300 text-sm">April 15, 2025</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-10 sm:bottom-16 sm:right-16 bg-gray-800/80 border border-gray-700 p-4 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <FaUsers className="text-blue-400 text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Tech Summit</h3>
                  <p className="text-gray-300 text-sm">500+ Participants</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;
