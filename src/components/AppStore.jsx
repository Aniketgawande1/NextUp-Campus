import React from "react";

const AppStore = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-indigo-900 to-purple-800 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="400" 
            className="space-y-8 max-w-xl mx-auto lg:mx-0"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Get the Event Campus App
              </h2>
              <p className="text-lg text-indigo-100 md:pr-10">
                Discover events, connect with attendees, and manage your schedule on the go.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* App Store button */}
              <a 
                href="#" 
                className="flex items-center bg-black hover:bg-gray-900 text-white rounded-xl px-4 py-3 transition-transform hover:scale-105"
              >
                <div className="mr-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-base font-semibold font-sans -mt-1">App Store</div>
                </div>
              </a>
              
              {/* Play Store button */}
              <a 
                href="#" 
                className="flex items-center bg-black hover:bg-gray-900 text-white rounded-xl px-4 py-3 transition-transform hover:scale-105"
              >
                <div className="mr-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5,3L4.35,3.14L15.13,13.93L5,3M16.23,15.03L18.68,16.25C19.21,16.53 19.21,17.32 18.68,17.6L16.17,18.85C15.67,19.12 15.07,18.85 15.07,18.32L15.06,15.57C15.06,15.04 15.68,14.76 16.23,15.03M3.79,4.38L3,4.77C3,4.77 3,20.29 3,20.31C3,20.34 3,20.36 3,20.38C3.38,20.85 3.97,21.15 4.62,21.15C4.87,21.15 5.12,21.09 5.35,21L15.63,15.38L3.79,4.38Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-base font-semibold font-sans -mt-1">Google Play</div>
                </div>
              </a>
            </div>
            
            {/* Rating badges */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex flex-col items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-indigo-100 mt-1">4.8/5 on App Store</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-indigo-100 mt-1">4.7/5 on Play Store</span>
              </div>
            </div>
          </div>
          
          {/* Phone mockup */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="relative mx-auto lg:ml-auto"
          >
            <div className="relative w-64 h-[500px] mx-auto">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl"></div>
              <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-[2.8rem] overflow-hidden">
                {/* App screenshot */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-purple-600 to-indigo-700">
                  {/* Event campus app mockup content */}
                  <div className="w-full h-full flex flex-col">
                    <div className="bg-indigo-800 text-white p-4 text-center">
                      <div className="text-sm font-semibold">Event Campus</div>
                    </div>
                    <div className="p-3 bg-white flex-1">
                      <div className="rounded-lg h-28 bg-indigo-100 mb-3 flex items-center justify-center">
                        <div className="text-sm text-indigo-900 font-medium">Featured Event</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map((item) => (
                          <div key={item} className="bg-gray-100 rounded-lg h-24 flex items-center justify-center">
                            <div className="h-12 w-12 rounded-full bg-indigo-200"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-100 p-3 flex justify-around">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="w-6 h-6 bg-indigo-200 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-3 inset-x-0 mx-auto h-5 w-24 bg-black rounded-b-xl"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-400 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;