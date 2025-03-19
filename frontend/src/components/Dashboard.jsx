import React, { useState } from 'react';
import { Calendar, Clock, Users, Map, Bell, Star, TrendingUp, Filter } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Sample data for upcoming events
  const upcomingEvents = [
    { id: 1, title: 'Tech Hackathon', date: 'Mar 20', time: '10:00 AM', location: 'Innovation Hall', attendees: 128 },
    { id: 2, title: 'Cultural Festival', date: 'Mar 25', time: '4:00 PM', location: 'Main Quad', attendees: 456 },
    { id: 3, title: 'Career Fair', date: 'Mar 30', time: '1:00 PM', location: 'Student Center', attendees: 312 }
  ];
  
  // Sample data for trending events
  const trendingEvents = [
    { id: 1, title: 'Music Concert', date: 'Apr 5', time: '8:00 PM', location: 'Auditorium', attendees: 652, growth: 45 },
    { id: 2, title: 'Science Exhibition', date: 'Apr 10', time: '11:00 AM', location: 'Science Block', attendees: 289, growth: 32 },
    { id: 3, title: 'Sports Tournament', date: 'Apr 15', time: '3:00 PM', location: 'Sports Complex', attendees: 524, growth: 28 }
  ];
  
  // Sample data for dashboard cards
  const dashboardStats = [
    { title: 'Total Events', value: '24', icon: <Calendar size={24} /> },
    { title: 'Total Attendees', value: '2,845', icon: <Users size={24} /> },
    { title: 'Venues', value: '12', icon: <Map size={24} /> },
    { title: 'New Registrations', value: '156', icon: <TrendingUp size={24} /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Campus Events Dashboard</h1>
          <p className="text-gray-400">Welcome back, Admin</p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-gray-800 p-2 rounded-full">
            <Bell size={20} />
          </button>
          <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
            <span className="font-bold">JD</span>
          </div>
        </div>
      </header>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardStats.map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
            </div>
            <div className="bg-gray-700 p-3 rounded-lg">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Events Panel */}
        <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              <button 
                className={`px-4 py-2 rounded-lg ${activeTab === 'upcoming' ? 'bg-blue-600' : 'bg-gray-700'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${activeTab === 'trending' ? 'bg-blue-600' : 'bg-gray-700'}`}
                onClick={() => setActiveTab('trending')}
              >
                Trending
              </button>
            </div>
            <button className="bg-gray-700 p-2 rounded-lg">
              <Filter size={20} />
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 border-b border-gray-700">
                  <th className="pb-4">Event</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Time</th>
                  <th className="pb-4">Location</th>
                  <th className="pb-4">Attendees</th>
                  {activeTab === 'trending' && <th className="pb-4">Growth</th>}
                </tr>
              </thead>
              <tbody>
                {(activeTab === 'upcoming' ? upcomingEvents : trendingEvents).map((event) => (
                  <tr key={event.id} className="border-b border-gray-700">
                    <td className="py-4">{event.title}</td>
                    <td className="py-4">{event.date}</td>
                    <td className="py-4">{event.time}</td>
                    <td className="py-4">{event.location}</td>
                    <td className="py-4">{event.attendees}</td>
                    {activeTab === 'trending' && (
                      <td className="py-4 text-green-400">+{event.growth}%</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Side Panel */}
        <div className="space-y-6">
          {/* Featured Event Card */}
          <div className="bg-gray-800 rounded-xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Featured Event</h3>
                <Star size={18} fill="yellow" color="yellow" />
              </div>
              <h2 className="text-xl font-bold mb-2">Spring Music Festival</h2>
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <Calendar size={16} />
                <span>April 15, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <Clock size={16} />
                <span>7:00 PM - 11:00 PM</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 mb-4">
                <Map size={16} />
                <span>Main Auditorium</span>
              </div>
              <button className="bg-blue-600 w-full py-2 rounded-lg font-semibold">View Details</button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/30 opacity-50"></div>
          </div>
          
          {/* Quick Actions Card */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
                <div className="bg-blue-900/50 p-2 rounded-lg mb-2">
                  <Calendar size={20} />
                </div>
                <span className="text-sm">Add Event</span>
              </button>
              <button className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
                <div className="bg-green-900/50 p-2 rounded-lg mb-2">
                  <Users size={20} />
                </div>
                <span className="text-sm">Manage Users</span>
              </button>
              <button className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
                <div className="bg-yellow-900/50 p-2 rounded-lg mb-2">
                  <Bell size={20} />
                </div>
                <span className="text-sm">Alerts</span>
              </button>
              <button className="bg-gray-700 p-4 rounded-lg flex flex-col items-center">
                <div className="bg-purple-900/50 p-2 rounded-lg mb-2">
                  <TrendingUp size={20} />
                </div>
                <span className="text-sm">Reports</span>
              </button>
            </div>
          </div>
          
          {/* Recent Activity Card */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-900/50 p-2 rounded-full mr-3">
                  <Users size={16} />
                </div>
                <div>
                  <p className="text-sm">45 new registrations for <span className="text-blue-400">Tech Hackathon</span></p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-900/50 p-2 rounded-full mr-3">
                  <Calendar size={16} />
                </div>
                <div>
                  <p className="text-sm">New event <span className="text-blue-400">Photography Workshop</span> created</p>
                  <p className="text-xs text-gray-400">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-900/50 p-2 rounded-full mr-3">
                  <Map size={16} />
                </div>
                <div>
                  <p className="text-sm">Venue changed for <span className="text-blue-400">Cultural Festival</span></p>
                  <p className="text-xs text-gray-400">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;