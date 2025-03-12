// Sidebar component containing Search, Popular Posts, Categories, and Tags
const BlogCategory = () => {
  const popularPosts = [
    {
      id: 1,
      title: "Design Trends That Drive Engagement",
      date: "October 19, 2022",
      image: "/images/insight/popular-1.svg",
    },
    {
      id: 2,
      title: "Design Trends That Drive Engagement",
      date: "October 19, 2022",
      image: "/images/insight/popular-2.svg",
    },
    {
      id: 3,
      title: "Design Trends That Drive Engagement",
      date: "October 19, 2022",
      image: "/images/insight/popular-3.svg",
    },
  ];

  const categories = [
    "Custom Software Development",
    "Mobile App Development",
    "Software as a Service (SaaS)",
    "Cybersecurity Solutions",
    "Blockchain Development",
    "UI/UX Design",
  ];

  const tags = [
    "SoftwareDevelopment",
    "Design",
    "UI/UXDesign",
    "FutureOfTech",
    "Travel Pack",
    "DesignThinking",
    "CustomSolutions",
  ];

  return (
    <div className='space-y-8 py-12'>
      {/* Search Bar */}
      <div className='p-4 bg-white shadow rounded-lg'>
        <h3 className='font-semibold text-lg mb-4 ml-4 text-black'>Search Here</h3>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search...'
            className='w-full py-4 px-6 border rounded-full focus:outline-none focus:ring focus:border-pink-500'
          />
          {/* <span className='absolute top-2 right-4 text-gray-500'>🔍</span> */}
        </div>
      </div>

      {/* Popular Posts */}
      <div className='p-4 bg-white shadow rounded-lg'>
        <h3 className='font-semibold text-lg mb-4 text-black'>Popular Post</h3>
        {popularPosts.map((post) => (
          <div key={post.id} className='flex items-center space-x-4 mb-4'>
            <img
              src={post.image}
              alt={post.title}
              className='w-16 h-16 object-cover rounded-lg'
            />
            <div>
              <span className='text-sm text-gray-500 block mb-1'>
                {post.date}
              </span>
              <h4 className='text-sm font-medium text-black'>{post.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className='p-4 bg-white shadow rounded-lg'>
        <h3 className='font-semibold text-lg mb-4 text-black'>Category</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className='mb-2 text-sm text-gray-700'>
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags */}
      <div className='p-4 bg-white shadow rounded-lg'>
        <h3 className='font-semibold text-lg mb-4 text-black'>Popular Tags</h3>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-lg'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
