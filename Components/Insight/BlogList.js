import { FaUser, FaCalendarAlt, FaComments } from 'react-icons/fa'; // Importing icons

// BlogCard component for individual blog posts
const BlogCard = ({ image, title, description, date, author, comments }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden mb-8'>
      <img src={image} alt={title} className='w-full h-64 object-cover' />
      <div className='p-6'>
        <div className='text-xs text-gray-600 flex items-center space-x-4 mb-2'>
          <span className="flex items-center truncate">
            <FaUser className="mr-1" /> {author}
          </span>
          <span className="flex items-center">•</span>
          <span className="flex items-center truncate">
            <FaCalendarAlt className="mr-1" /> {date}
          </span>
          <span className="flex items-center">•</span>
          <span className="flex items-center truncate">
            <FaComments className="mr-1" /> {comments} Comments
          </span>
        </div>
        <h2 className='text-2xl font-semibold mb-4 text-black'>{title}</h2>
        <p className='text-black mb-4'>{description}</p>
        <button className='bg-pink-500 text-white px-4 py-2 rounded-lg'>
          Learn More
        </button>
      </div>
    </div>
  );
};

// Pagination Component
const Pagination = () => {
  return (
    <div className='flex justify-center space-x-4 mt-8'>
      <button className='px-4 py-2 bg-pink-500 text-white rounded-lg'>1</button>
      <button className='px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg'>
        2
      </button>
      <button className='px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg'>
        3
      </button>
    </div>
  );
};

// Main Blog List Page
const BlogList = () => {
  const blogs = [
    {
      image: "/images/insight/blog-1.svg",
      title: "Crafting Digital Solutions: The Future of Software and Design",
      description:
        "The future of software and digital design emerges rapidly, with innovative...",
      date: "October 21, 2024",
      author: "Admin",
      comments: "500",
    },
    {
      image: "/images/insight/blog-2.svg",
      title: "How Innovative Design Drives Software Success",
      description:
        "Innovative design is key to software success, as it enhances usability...",
      date: "October 19, 2024",
      author: "Admin",
      comments: "301",
    },
    {
      image: "/images/insight/blog-3.svg",
      title:
        "Transforming Ideas into Reality: The Power of Custom Software Development",
      description:
        "Custom software development allows businesses to build unique solutions...",
      date: "October 18, 2024",
      author: "Admin",
      comments: "504",
    },
  ];

  return (
    <div className='max-w-6xl mx-auto px-4 py-12'>
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
      <Pagination />
    </div>
  );
};

export default BlogList;
