import React from "react";
import BannerImg from "../assets/coffee-white.png";
import { FaCalendarAlt, FaUsers, FaMicrophone } from "react-icons/fa";
import { MdWorkspaces } from "react-icons/md";
import { IoIosRibbon } from "react-icons/io";
import BgImg from "../assets/website/coffee-texture.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#0f172a", // dark blue background
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundBlendMode: "overlay",
  height: "100%",
  width: "100%",
};

const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[650px] flex justify-center items-center py-16 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {/* Image section */}
              <div data-aos="zoom-in">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
                  <img
                    src={BannerImg}
                    alt="Campus Events"
                    className="max-w-[450px] w-full mx-auto drop-shadow-[0px_10px_20px_rgba(0,0,0,0.5)] relative z-10"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute top-5 right-10 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full text-white font-medium text-sm shadow-lg z-20 rotate-12">
                    Spring 2025
                  </div>
                </div>
              </div>
              
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 text-white">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-10 bg-blue-500"></div>
                  <p className="text-blue-400 font-medium text-sm uppercase tracking-wider">Why attend our events</p>
                </div>
                
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  The Ultimate Campus Experience
                </h1>
                
                <p
                  data-aos="fade-up"
                  className="text-gray-300 tracking-wide leading-6"
                >
                  Our events bring together students, faculty, and industry leaders to create 
                  unparalleled opportunities for learning, networking, and growth. From tech conferences 
                  to cultural celebrations, we curate experiences that transform campus life.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-lg border border-gray-700">
                        <FaMicrophone className="text-xl text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Expert Speakers</h3>
                        <p className="text-sm text-gray-400">Industry leaders and thought innovators</p>
                      </div>
                    </div>
                    
                    <div
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="flex items-center gap-4"
                    >
                      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-lg border border-gray-700">
                        <MdWorkspaces className="text-xl text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Interactive Workshops</h3>
                        <p className="text-sm text-gray-400">Hands-on learning experiences</p>
                      </div>
                    </div>
                    
                    <div
                      data-aos="fade-up"
                      data-aos-delay="400"
                      className="flex items-center gap-4"
                    >
                      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-lg border border-gray-700">
                        <FaUsers className="text-xl text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Networking</h3>
                        <p className="text-sm text-gray-400">Connect with peers and professionals</p>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-purple-600/50 pl-6 space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <IoIosRibbon className="text-purple-500 text-2xl" />
                      <h1 className="text-xl font-bold">Featured Event</h1>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <FaCalendarAlt className="text-purple-400" />
                        <span className="text-sm text-gray-300">April 22-24, 2025</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-1">Tech Innovation Summit</h3>
                      <p className="text-sm text-gray-400">
                        Join us for three days of cutting-edge presentations, hands-on labs, and 
                        networking with tech industry leaders from across the country.
                      </p>
                      <button className="mt-3 text-sm bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-md hover:opacity-90 transition duration-300">
                        Reserve Your Spot
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;