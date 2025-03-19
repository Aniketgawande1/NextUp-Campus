

// import React, { useState } from 'react';
// import { Calendar, Clock, Users, Map, Bell, Star, TrendingUp, Filter, Activity, Code } from 'lucide-react';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('upcoming');
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [selectedEvent, setSelectedEvent] = useState(null);
  
//   // Sample data for upcoming events with categories and descriptions
//   const upcomingEvents = [
//     { 
//       id: 1, 
//       title: 'Tech Hackathon', 
//       date: 'Mar 20', 
//       time: '10:00 AM', 
//       location: 'Innovation Hall', 
//       attendees: 128, 
//       category: 'hackathon',
//       description: 'A 48-hour coding competition where participants build innovative solutions to real-world problems. Prizes include cash awards and internship opportunities with leading tech companies.' 
//     },
//     { 
//       id: 2, 
//       title: 'Cultural Festival', 
//       date: 'Mar 25', 
//       time: '4:00 PM', 
//       location: 'Main Quad', 
//       attendees: 456, 
//       category: 'cultural',
//       description: 'Annual multicultural festival showcasing performances, food, and traditions from over 20 different cultures represented on campus. Open to students, faculty, and community members.' 
//     },
//     { 
//       id: 3, 
//       title: 'Career Fair', 
//       date: 'Mar 30', 
//       time: '1:00 PM', 
//       location: 'Student Center', 
//       attendees: 312, 
//       category: 'career',
//       description: 'Connect with recruiters from over 50 companies across various industries. Bring your resume and dress professionally. Pre-registration required for priority access.' 
//     },
//     { 
//       id: 4, 
//       title: 'Coding Contest', 
//       date: 'Mar 22', 
//       time: '2:00 PM', 
//       location: 'Computer Science Building', 
//       attendees: 98, 
//       category: 'hackathon',
//       description: 'Algorithmic programming contest with challenging problems to solve. Open to all skill levels. Individual competition with three difficulty tiers. Registration closes 24 hours before the event.' 
//     },
//     { 
//       id: 5, 
//       title: 'Basketball Tournament', 
//       date: 'Mar 24', 
//       time: '3:00 PM', 
//       location: 'Sports Complex', 
//       attendees: 215, 
//       category: 'sports',
//       description: 'Intramural 3-on-3 basketball tournament open to all students. Teams must register by March 22. Each team guaranteed at least 3 games. Refreshments provided.' 
//     },
//     { 
//       id: 6, 
//       title: 'Swimming Competition', 
//       date: 'Mar 28', 
//       time: '9:00 AM', 
//       location: 'University Pool', 
//       attendees: 82, 
//       category: 'sports',
//       description: 'Annual swimming meet featuring freestyle, backstroke, breaststroke, and relay events. Open to swimmers of all levels. Spectators welcome. Registration required for participants.' 
//     }
//   ];
  
//   // Sample data for trending events with categories and descriptions
//   const trendingEvents = [
//     { 
//       id: 1, 
//       title: 'Music Concert', 
//       date: 'Apr 5', 
//       time: '8:00 PM', 
//       location: 'Auditorium', 
//       attendees: 652, 
//       growth: 45, 
//       category: 'cultural',
//       description: 'Spring concert featuring the university orchestra and choir. This year's theme is "Classical Meets Contemporary" with special guest performers from the city symphony.' 
//     },
//     { 
//       id: 2, 
//       title: 'Science Exhibition', 
//       date: 'Apr 10', 
//       time: '11:00 AM', 
//       location: 'Science Block', 
//       attendees: 289, 
//       growth: 32, 
//       category: 'academic',
//       description: 'Interactive exhibition showcasing student research projects across physics, chemistry, biology, and environmental science. Open to the public with guided tours available.' 
//     },
//     { 
//       id: 3, 
//       title: 'Sports Tournament', 
//       date: 'Apr 15', 
//       time: '3:00 PM', 
//       location: 'Sports Complex', 
//       attendees: 524, 
//       growth: 28, 
//       category: 'sports',
//       description: 'Multi-sport tournament featuring soccer, volleyball, and tennis competitions between campus houses. Spectators encouraged. Food and refreshment stands will be available.' 
//     },
//     { 
//       id: 4, 
//       title: 'AI Hackathon', 
//       date: 'Apr 8', 
//       time: '9:00 AM', 
//       location: 'Innovation Lab', 
//       attendees: 156, 
//       growth: 40, 
//       category: 'hackathon',
//       description: 'Specialized hackathon focused on artificial intelligence applications. Participants will develop AI solutions using provided datasets and APIs. Workshop sessions available for beginners.' 
//     },
//     { 
//       id: 5, 
//       title: 'Football Championship', 
//       date: 'Apr 12', 
//       time: '5:00 PM', 
//       location: 'University Stadium', 
//       attendees: 721, 
//       growth: 52, 
//       category: 'sports',
//       description: 'Championship match between the two top intramural football teams. Pre-game tailgate starts at 3:00 PM. University ID required for entry. Live streaming available on campus website.' 
//     },
//     { 
//       id: 6, 
//       title: 'Mobile App Hackathon', 
//       date: 'Apr 18', 
//       time: '10:00 AM', 
//       location: 'Tech Hub', 
//       attendees: 187, 
//       growth: 35, 
//       category: 'hackathon',
//       description: 'Build a mobile application in 36 hours. Focus on creating solutions that address campus challenges. Technical workshops and mentorship available throughout the event.' 
//     }
//   ];
  
//   // Sample data for dashboard cards
//   const dashboardStats = [
//     { title: 'Total Events', value: '24', icon: <Calendar size={24} /> },
//     { title: 'Total Attendees', value: '2,845', icon: <Users size={24} /> },
//     { title: 'Venues', value: '12', icon: <Map size={24} /> },
//     { title: 'New Registrations', value: '156', icon: <TrendingUp size={24} /> }
//   ];
  
//   // Event categories
//   const categories = [
//     { id: 'all', name: 'All Events', icon: <Calendar size={16} /> },
//     { id: 'sports', name: 'Sports', icon: <Activity size={16} /> },
//     { id: 'hackathon', name: 'Hackathons', icon: <Code size={16} /> },
//     { id: 'cultural', name: 'Cultural', icon: <Star size={16} /> },
//     { id: 'career', name: 'Career', icon: <TrendingUp size={16} /> }
//   ];

//   // Filter events based on active category
//   const getFilteredEvents = () => {
//     const events = activeTab === 'upcoming' ? upcomingEvents : trendingEvents;
//     if (activeCategory === 'all') return events;
//     return events.filter(event => event.category === activeCategory);
//   };
  
//   const filteredEvents = getFilteredEvents();
  
//   // Handle event click to show description
//   const handleEventClick = (event) => {
//     setSelectedEvent(event);
//   };
  
//   // Close event description modal
//   const closeEventDetails = () => {
//     setSelectedEvent(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
//       {/* Header */}
//       <header className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-2xl font-bold">Campus Events Dashboard</h1>
//           <p className="text-gray-400">Welcome back, Admin</p>
//         </div>
//         <div className="flex space-x-4">
//           <button className="bg-gray-800 p-2 rounded-full">
//             <Bell size={20} />
//           </button>
//           <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
//             <span className="font-bold">JD</span>
//           </div>
//         </div>
//       </header>
      
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {dashboardStats.map((stat, index) => (
//           <div key={index} className="bg-gray-800 rounded-xl p-6 flex items-center justify-between">
//             <div>
//               <p className="text-gray-400 text-sm">{stat.title}</p>
//               <p className="text-2xl font-semibold mt-1">{stat.value}</p>
//             </div>
//             <div className="bg-gray-700 p-3 rounded-lg">
//               {stat.icon}
//             </div>
//           </div>
//         ))}
//       </div>
      
//       {/* Main Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Events Panel */}
//         <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6">
//           <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 space-y-4 md:space-y-0">
//             <div className="flex space-x-2">
//               <button 
//                 className={`px-4 py-2 rounded-lg ${activeTab === 'upcoming' ? 'bg-blue-600' : 'bg-gray-700'}`}
//                 onClick={() => setActiveTab('upcoming')}
//               >
//                 Upcoming
//               </button>
//               <button 
//                 className={`px-4 py-2 rounded-lg ${activeTab === 'trending' ? 'bg-blue-600' : 'bg-gray-700'}`}
//                 onClick={() => setActiveTab('trending')}
//               >
//                 Trending
//               </button>
//             </div>
//             <div className="flex space-x-2 overflow-x-auto py-1">
//               {categories.map(category => (
//                 <button 
//                   key={category.id}
//                   className={`flex items-center space-x-1 px-3 py-1 rounded-lg whitespace-nowrap text-sm ${activeCategory === category.id ? 'bg-blue-600' : 'bg-gray-700'}`}
//                   onClick={() => setActiveCategory(category.id)}
//                 >
//                   {category.icon}
//                   <span>{category.name}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
          
//           <div className="overflow-x-auto">
//             {filteredEvents.length > 0 ? (
//               <table className="w-full">
//                 <thead>
//                   <tr className="text-left text-gray-400 border-b border-gray-700">
//                     <th className="pb-4">Event</th>
//                     <th className="pb-4">Category</th>
//                     <th className="pb-4">Date</th>
//                     <th className="pb-4">Time</th>
//                     <th className="pb-4">Location</th>
//                     <th className="pb-4">Attendees</th>
//                     {activeTab === 'trending' && <th className="pb-4">Growth</th>}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredEvents.map((event) => (
//                     <tr key={event.id} className="border-b border-gray-700">
//                       <td className="py-4">
//                         <a
//                           href="#"
//                           className="text-blue-400 hover:text-blue-300 hover:underline"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleEventClick(event);
//                           }}
//                         >
//                           {event.title}
//                         </a>
//                       </td>
//                       <td className="py-4 capitalize">{event.category}</td>
//                       <td className="py-4">{event.date}</td>
//                       <td className="py-4">{event.time}</td>
//                       <td className="py-4">{event.location}</td>
//                       <td className="py-4">{event.attendees}</td>
//                       {activeTab === 'trending' && (
//                         <td className="py-4 text-green-400">+{event.growth}%</td>
//                       )}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <div className="text-center py-8 text-gray-400">
//                 No events found in this category.
//               </div>
//             )}
//           </div>
//         </div>
        
//         {/* Side Panel */}
//         <div className="space-y-6">
//           {/* Featured Event Card */}
//           <div className="bg-gray-800 rounded-xl p-6 relative overflow-hidden">
//             <div className="relative z-10">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="font-bold text-lg">Featured Event</h3>
//                 <Star size={18} fill="yellow" color="yellow" />
//               </div>
//               <h2 className="text-xl font-bold mb-2">Spring Music Festival</h2>
//               <div className="flex items-center space-x-2 text-gray-400 mb-2">
//                 <Calendar size={16} />
//                 <span>April 15, 2025</span>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-400 mb-2">
//                 <Clock size={16} />
//                 <span>7:00 PM - 11:00 PM</span>
//               </div>
//               <div className="flex items-center space-x-2 text-gray-400 mb-4">
//                 <Map size={16} />
//                 <span>Main Auditorium</span>
//               </div>
//               <button className="bg-blue-600 w-full py-2 rounded-lg font-semibold">View Details</button>
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/30 opacity-50"></div>
//           </div>
          
//           {/* Category Summary Card */}
//           <div className="bg-gray-800 rounded-xl p-6">
//             <h3 className="font-bold text-lg mb-4">Event Categories</h3>
//             <div className="space-y-3">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center">
//                   <div className="bg-blue-900/50 p-2 rounded-lg mr-3">
//                     <Code size={16} />
//                   </div>
//                   <span>Hackathons</span>
//                 </div>
//                 <span className="bg-blue-900/30 px-2 py-1 rounded-lg text-sm">4 Events</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center">
//                   <div className="bg-green-900/50 p-2 rounded-lg mr-3">
//                     <Activity size={16} />
//                   </div>
//                   <span>Sports</span>
//                 </div>
//                 <span className="bg-green-900/30 px-2 py-1 rounded-lg text-sm">5 Events</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center">
//                   <div className="bg-yellow-900/50 p-2 rounded-lg mr-3">
//                     <Star size={16} />
//                   </div>
//                   <span>Cultural</span>
//                 </div>
//                 <span className="bg-yellow-900/30 px-2 py-1 rounded-lg text-sm">3 Events</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Quick Actions Card */}
//           <div className="bg-gray-800 rounded-xl p-6">
//             <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
//             <div className="grid grid-cols-2 gap-4">
//               <button className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
//                 <div className="bg-blue-900/50 p-2 rounded-lg mb-2">
//                   <Calendar size={20} />
//                 </div>
//                 <span className="text-sm">Add Event</span>
//               </button>
//               <button className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
//                 <div className="bg-green-900/50 p-2 rounded-lg mb-2">
//                   <Users size={20} />
//                 </div>
//                 <span className="text-sm">Manage Users</span>
//               </button>
//               <button className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
//                 <div className="bg-yellow-900/50 p-2 rounded-lg mb-2">
//                   <Bell size={20} />
//                 </div>
//                 <span className="text-sm">Alerts</span>
//               </button>
//               <button className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
//                 <div className="bg-purple-900/50 p-2 rounded-lg mb-2">
//                   <TrendingUp size={20} />
//                 </div>
//                 <span className="text-sm">Reports</span>
//               </button>
//             </div>
//           </div>
          
//           {/* Recent Activity Card */}
//           <div className="bg-gray-800 rounded-xl p-6">
//             <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <div className="bg-blue-900/50 p-2 rounded-full mr-3">
//                   <Users size={16} />
//                 </div>
//                 <div>
//                   <p className="text-sm">45 new registrations for <span className="text-blue-400">Tech Hackathon</span></p>
//                   <p className="text-xs text-gray-400">2 hours ago</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="bg-green-900/50 p-2 rounded-full mr-3">
//                   <Calendar size={16} />
//                 </div>
//                 <div>
//                   <p className="text-sm">New event <span className="text-blue-400">Photography Workshop</span> created</p>
//                   <p className="text-xs text-gray-400">5 hours ago</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="bg-yellow-900/50 p-2 rounded-full mr-3">
//                   <Map size={16} />
//                 </div>
//                 <div>
//                   <p className="text-sm">Venue changed for <span className="text-blue-400">Cultural Festival</span></p>
//                   <p className="text-xs text-gray-400">Yesterday</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Event Details Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">{selectedEvent.title}</h2>
//               <button onClick={closeEventDetails} className="text-gray-400 hover:text-white">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <line x1="18" y1="6" x2="6" y2="18"></line>
//                   <line x1="6" y1="6" x2="18" y2="18"></line>
//                 </svg>
//               </button>
//             </div>
            
//             <div className="mb-4">
//               <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm capitalize mb-3">
//                 {selectedEvent.category}
//               </div>
              
//               <div className="space-y-2 mb-4">
//                 <div className="flex items-center text-gray-300">
//                   <Calendar size={16} className="mr-2" />
//                   <span>{selectedEvent.date}</span>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <Clock size={16} className="mr-2" />
//                   <span>{selectedEvent.time}</span>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <Map size={16} className="mr-2" />
//                   <span>{selectedEvent.location}</span>
//                 </div>
//                 <div className="flex items-center text-gray-300">
//                   <Users size={16} className="mr-2" />
//                   <span>{selectedEvent.attendees} Attendees</span>
//                 </div>
//               </div>
              
//               <div className="border-t border-gray-700 pt-4">
//                 <h3 className="font-semibold mb-2">Description</h3>
//                 <p className="text-gray-300">{selectedEvent.description}</p>
//               </div>
//             </div>
            
//             <div className="flex justify-end">
//               <button onClick={closeEventDetails} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg mr-2">
//                 Close
//               </button>
//               <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg">
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;



// import React from 'react';

// const Dashboard = () => {
//   const events = [
//     { 
//       id: 1, 
//       title: 'Tech Meetup', 
//       date: 'Apr 5', 
//       time: '10:00 AM', 
//       location: 'Main Auditorium', 
//       attendees: 150, 
//       growth: 20, 
//       category: 'tech',
//       description: 'Join tech enthusiasts for a day of innovation, networking, and hands-on workshops with the latest technologies.',
//       image: '/api/placeholder/400/250'
//     },
//     { 
//       id: 2, 
//       title: 'Science Exhibition', 
//       date: 'Apr 10', 
//       time: '11:00 AM', 
//       location: 'Science Block', 
//       attendees: 289, 
//       growth: 32, 
//       category: 'academic',
//       description: 'Explore cutting-edge scientific discoveries and interactive exhibits showcasing research from leading institutions.',
//       image: '/api/placeholder/400/250'
//     },
//     { 
//       id: 3, 
//       title: 'Cultural Fest', 
//       date: 'Apr 15', 
//       time: '6:00 PM', 
//       location: 'Open Ground', 
//       attendees: 500, 
//       growth: 50, 
//       category: 'cultural',
//       description: 'Celebrate diversity through performances, art installations, and culinary experiences from around the world.',
//       image: '/api/placeholder/400/250'
//     },
//     { 
//       id: 4, 
//       title: 'AI Workshop', 
//       date: 'Apr 20', 
//       time: '2:00 PM', 
//       location: 'Tech Lab', 
//       attendees: 120, 
//       growth: 15, 
//       category: 'tech',
//       description: 'Learn practical AI implementation techniques from industry experts with hands-on training sessions.',
//       image: '/api/placeholder/400/250'
//     },
//     { 
//       id: 5, 
//       title: 'Mathematics Olympiad', 
//       date: 'Apr 25', 
//       time: '9:00 AM', 
//       location: 'Lecture Hall 1', 
//       attendees: 180, 
//       growth: 25, 
//       category: 'academic',
//       description: 'Challenge yourself with complex mathematical problems in this competitive event for math enthusiasts.',
//       image: '/api/placeholder/400/250'
//     },
//     { 
//       id: 6, 
//       title: 'Music Concert', 
//       date: 'Apr 30', 
//       time: '7:00 PM', 
//       location: 'Amphitheater', 
//       attendees: 600, 
//       growth: 60, 
//       category: 'cultural',
//       description: 'Experience a night of live performances featuring talented musicians across various genres and styles.',
//       image: '/api/placeholder/400/250'
//     }
//   ];

//   // Custom theme colors based on event category
//   const categoryThemes = {
//     tech: 'border-blue-500 bg-blue-900/20',
//     academic: 'border-amber-500 bg-amber-900/20',
//     cultural: 'border-purple-500 bg-purple-900/20'
//   };

//   // Group events by category using a more functional approach
//   const categorizedEvents = React.useMemo(() => {
//     return events.reduce((acc, event) => {
//       const category = event.category;
//       return {
//         ...acc,
//         [category]: [...(acc[category] || []), event]
//       };
//     }, {});
//   }, [events]);

//   // Event card component to improve reusability and readability
//   const EventCard = ({ event, themeClass }) => (
//     <div className={`bg-gray-800 p-0 shadow-xl rounded-lg border-l-4 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:scale-105 ${themeClass}`}>
//       <img 
//         src={event.image} 
//         alt={event.title} 
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
//       <div className="p-5 flex-grow">
//         <h4 className="text-xl font-semibold text-white text-center mb-3">{event.title}</h4>
//         <p className="text-gray-300 mb-2">{event.date} at {event.time}</p>
//         <p className="text-gray-400 mb-2">📍 {event.location}</p>
//         <p className="text-gray-300 mb-2">👥 Attendees: {event.attendees}</p>
//         <p className="text-green-400 mb-4">📈 Growth: {event.growth}%</p>
//         <p className="text-gray-400 text-sm">{event.description}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 bg-gray-900 min-h-screen text-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Event Management Dashboard</h2>
        
//         {Object.keys(categorizedEvents).map(category => (
//           <div key={category} className="mb-12">
//             <h3 className="text-2xl font-semibold text-gray-100 capitalize mb-6 border-b border-gray-700 pb-2">{category} Events</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {categorizedEvents[category].map(event => (
//                 <EventCard 
//                   key={event.id} 
//                   event={event} 
//                   themeClass={categoryThemes[event.category]}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





// import React from 'react';

// const Dashboard = () => {
//   const events = [
//     { 
//       id: 1, 
//       title: 'Tech Meetup', 
//       date: 'Apr 5', 
//       time: '10:00 AM', 
//       location: 'Main Auditorium', 
//       attendees: 150, 
//       growth: 20, 
//       category: 'tech',
//       description: 'Join tech enthusiasts for innovation and workshops.',
//       image: 'https://techlekh.com/wp-content/uploads/2024/03/tech-meetup.jpg'
//     },
//     { 
//       id: 2, 
//       title: 'Science Exhibition', 
//       date: 'Apr 10', 
//       time: '11:00 AM', 
//       location: 'Science Block', 
//       attendees: 289, 
//       growth: 32, 
//       category: 'academic',
//       description: 'Explore scientific discoveries and interactive exhibits.',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLSzI30lGO348O-rELCh281-g1oCaaTpQDA-YdrcxIrxuF6kwue-pD9pci3fIZibxg7I&usqp=CAU'
//     },
//     { 
//       id: 3, 
//       title: 'Cultural Fest', 
//       date: 'Apr 15', 
//       time: '6:00 PM', 
//       location: 'Open Ground', 
//       attendees: 500, 
//       growth: 50, 
//       category: 'cultural',
//       description: 'Celebrate diversity through performances and art.',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtz2lcitXMr5fjY8WlXVsLvPk2mXjtKeLb4Q&s'
//     },
//     { 
//       id: 4, 
//       title: 'AI Workshop', 
//       date: 'Apr 20', 
//       time: '2:00 PM', 
//       location: 'Tech Lab', 
//       attendees: 120, 
//       growth: 15, 
//       category: 'tech',
//       description: 'Learn practical AI techniques from industry experts.',
//       image: 'https://www.shutterstock.com/image-photo/multiracial-school-kids-students-making-600nw-2036186354.jpg'
//     },
//     { 
//       id: 5, 
//       title: 'Mathematics Olympiad', 
//       date: 'Apr 25', 
//       time: '9:00 AM', 
//       location: 'Lecture Hall 1', 
//       attendees: 180, 
//       growth: 25, 
//       category: 'academic',
//       description: 'Challenge yourself with complex mathematical problems.',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTseeF-OGLkgT85z9J_kgUR65d1qEWHGklKdg&s'
//     },
//     { 
//       id: 6, 
//       title: 'Music Concert', 
//       date: 'Apr 30', 
//       time: '7:00 PM', 
//       location: 'Amphitheater', 
//       attendees: 600, 
//       growth: 60, 
//       category: 'cultural',
//       description: 'Experience live performances across various genres.',
//       image: 'https://5.imimg.com/data5/DB/WJ/MY-605509/music-concert.jpg'
//     }
//   ];

//   const categoryThemes = {
//     tech: 'border-blue-500 bg-blue-900/20',
//     academic: 'border-amber-500 bg-amber-900/20',
//     cultural: 'border-purple-500 bg-purple-900/20'
//   };

//   const categorizedEvents = React.useMemo(() => {
//     return events.reduce((acc, event) => {
//       const category = event.category;
//       return {
//         ...acc,
//         [category]: [...(acc[category] || []), event]
//       };
//     }, {});
//   }, [events]);

//   const EventCard = ({ event, themeClass }) => (
//     <div className={`bg-gray-800 shadow-lg rounded-lg border-l-4 transition-all duration-300 hover:shadow-xl hover:scale-105 ${themeClass}`}>
//       <div className="flex flex-col">
//         <img 
//           src={event.image} 
//           alt={event.title} 
//           className="w-full h-40 object-cover rounded-t-lg"
//         />
//         <div className="p-4">
//           <h4 className="text-lg font-semibold text-white">{event.title}</h4>
//           <p className="text-gray-300 text-sm">{event.date} at {event.time}</p>
//           <p className="text-gray-400 text-sm">📍 {event.location}</p>
//           <p className="text-gray-300 text-sm">👥 {event.attendees} Attendees</p>
//           <p className="text-green-400 text-sm">📈 {event.growth}% Growth</p>
//           <p className="text-gray-400 text-sm mt-2">{event.description}</p>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 bg-gray-900 min-h-screen text-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Event Management Dashboard</h2>
        
//         {Object.keys(categorizedEvents).map(category => (
//           <div key={category} className="mb-8">
//             <h3 className="text-xl font-semibold text-gray-100 capitalize mb-3 border-b border-gray-700 pb-1">{category} Events</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {categorizedEvents[category].map(event => (
//                 <EventCard 
//                   key={event.id} 
//                   event={event} 
//                   themeClass={categoryThemes[event.category]}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';

const Dashboard = () => {
  const events = [
    { 
      id: 1, 
      title: 'Tech Meetup', 
      date: 'Apr 5', 
      time: '10:00 AM', 
      location: 'Main Auditorium', 
      attendees: 150, 
      growth: 20, 
      category: 'tech',
      description: 'Join tech enthusiasts for innovation and workshops.',
      image: 'https://techlekh.com/wp-content/uploads/2024/03/tech-meetup.jpg'
    },
    { 
      id: 2, 
      title: 'Science Exhibition', 
      date: 'Apr 10', 
      time: '11:00 AM', 
      location: 'Science Block', 
      attendees: 289, 
      growth: 32, 
      category: 'academic',
      description: 'Explore scientific discoveries and interactive exhibits.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLSzI30lGO348O-rELCh281-g1oCaaTpQDA-YdrcxIrxuF6kwue-pD9pci3fIZibxg7I&usqp=CAU'
    },
    { 
      id: 3, 
      title: 'Cultural Fest', 
      date: 'Apr 15', 
      time: '6:00 PM', 
      location: 'Open Ground', 
      attendees: 500, 
      growth: 50, 
      category: 'cultural',
      description: 'Celebrate diversity through performances and art.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtz2lcitXMr5fjY8WlXVsLvPk2mXjtKeLb4Q&s'
    },
    { 
      id: 4, 
      title: 'AI Workshop', 
      date: 'Apr 20', 
      time: '2:00 PM', 
      location: 'Tech Lab', 
      attendees: 120, 
      growth: 15, 
      category: 'tech',
      description: 'Learn practical AI techniques from industry experts.',
      image: 'https://www.shutterstock.com/image-photo/multiracial-school-kids-students-making-600nw-2036186354.jpg'
    },
    { 
      id: 5, 
      title: 'Mathematics Olympiad', 
      date: 'Apr 25', 
      time: '9:00 AM', 
      location: 'Lecture Hall 1', 
      attendees: 180, 
      growth: 25, 
      category: 'academic',
      description: 'Challenge yourself with complex mathematical problems.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTseeF-OGLkgT85z9J_kgUR65d1qEWHGklKdg&s'
    },
    { 
      id: 6, 
      title: 'Music Concert', 
      date: 'Apr 30', 
      time: '7:00 PM', 
      location: 'Amphitheater', 
      attendees: 600, 
      growth: 60, 
      category: 'cultural',
      description: 'Experience live performances across various genres.',
      image: 'https://5.imimg.com/data5/DB/WJ/MY-605509/music-concert.jpg'
    },
    { 
      id: 7, 
      title: 'Startup Pitching', 
      date: 'May 5', 
      time: '3:00 PM', 
      location: 'Business Hall', 
      attendees: 90, 
      growth: 10, 
      category: 'tech',
      description: 'Present your startup ideas to investors.',
      image: 'https://techlekh.com/wp-content/uploads/2024/03/tech-meetup.jpg'
    },
    { 
      id: 8, 
      title: 'Physics Symposium', 
      date: 'May 10', 
      time: '1:00 PM', 
      location: 'Physics Lab', 
      attendees: 250, 
      growth: 40, 
      category: 'academic',
      description: 'Deep dive into modern physics theories.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLSzI30lGO348O-rELCh281-g1oCaaTpQDA-YdrcxIrxuF6kwue-pD9pci3fIZibxg7I&usqp=CAU'
    },
    { 
      id: 9, 
      title: 'Art Exhibition', 
      date: 'May 15', 
      time: '5:00 PM', 
      location: 'Gallery Hall', 
      attendees: 320, 
      growth: 35, 
      category: 'cultural',
      description: 'Showcase your artistic creativity.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtz2lcitXMr5fjY8WlXVsLvPk2mXjtKeLb4Q&s'
    }
  ];

  const categoryThemes = {
    tech: 'border-blue-500 bg-blue-900/20',
    academic: 'border-amber-500 bg-amber-900/20',
    cultural: 'border-purple-500 bg-purple-900/20'
  };

  const EventCard = ({ event, themeClass }) => (
    <div className={`bg-gray-800 shadow-lg rounded-lg border-l-4 transition-all duration-300 hover:shadow-xl hover:scale-105 ${themeClass}`}>
      <div className="flex flex-col">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h4 className="text-lg font-semibold text-white">{event.title}</h4>
          <p className="text-gray-300 text-sm">{event.date} at {event.time}</p>
          <p className="text-gray-400 text-sm">📍 {event.location}</p>
          <p className="text-gray-300 text-sm">👥 {event.attendees} Attendees</p>
          <p className="text-green-400 text-sm">📈 {event.growth}% Growth</p>
          <p className="text-gray-400 text-sm mt-2">{event.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Event Management Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              themeClass={categoryThemes[event.category]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
