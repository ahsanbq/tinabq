import React from 'react';
import VideoComponent from './VideoComponent';
import { FaUser, FaCalendarAlt, FaComments } from 'react-icons/fa'; // Importing icons from react-icons

const PopularPost = ({ date, title, imagePath }) => (
  <div className="flex items-center gap-3 mb-4 last:mb-0">
    <img 
      src={imagePath} 
      alt={title}
      className="w-14 h-14 rounded-lg object-cover"
    />
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <h3 className="text-sm text-gray-900 line-clamp-2 font-medium">{title}</h3>
    </div>
  </div>
);

const BlogCard = () => {
  const popularPosts = [
    {
      date: "October 19, 2022",
      title: "Design Trends That Drive Engagement",
      imagePath: "/images/insight/popular-1.svg"
    },
    {
      date: "October 19, 2022",
      title: "Design Trends That Drive Engagement",
      imagePath: "/images/insight/popular-2.svg"
    },
    {
      date: "October 19, 2022",
      title: "Design Trends That Drive Engagement",
      imagePath: "/images/insight/popular-3.svg"
    }
  ];

  return (
    <div className="relative">
      {/* Main Blog Card */}
      <div className="max-w-lg overflow-hidden shadow-lg bg-white">
        <div className="p-6">
          {/* Video Container with Zoom Effect */}
          <div className="relative w-full h-64 bg-white overflow-hidden rounded-lg mb-4 transform scale-105 transition-transform duration-300">
            <VideoComponent />
          </div>

          {/* Metadata */}
          <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
            <span className="flex items-center truncate">
              <FaUser className="mr-1" /> By admin
            </span>
            <span className="flex items-center truncate">
              <FaCalendarAlt className="mr-1" /> October 19, 2022
            </span>
            <span className="flex items-center truncate">
              <FaComments className="mr-1" /> Comments (55)
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Transforming Ideas into Reality: The Power of Custom Software Development
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Aliquam erat volutpat posuere labort viverra laorest marti ullamcorper posuere viverra. Aliquam erat jutso posuere labort viverra laorest marti.
          </p>

          {/* CTA Button */}
          <button className="bg-pink-500 text-white mb-8 px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
            Learn More →
          </button>
        </div>
      </div>

      {/* Popular Posts Section - Hidden on small screens */}
      <div className="hidden p-2 lg:block absolute right-0 bottom-28 w-64 bg-white rounded-lg shadow-lg translate-x-10 translate-y-10">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-m font-bold text-gray-800">Popular Post</h2>
        </div>
        <div className="p-4">
          {popularPosts.map((post, index) => (
            <PopularPost
              key={index}
              date={post.date}
              title={post.title}
              imagePath={post.imagePath}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
