export default function PortfolioDetails() {
  return (
    <div className='bg-white px-4 md:px-0 py-12'>
      {/* Project Objective */}
      <div className='bg-[#F8F8F8] p-8'>
        <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>
          Project Objective:
        </h2>
        <p className='text-gray-600 leading-relaxed'>
          The goal of this project was to design and develop a platform that
          offers an extensive and well-organized software listing experience.
          The platform aims to help users find, compare, and select software
          solutions based on their specific requirements, while providing
          software vendors with an efficient way to showcase their products.
        </p>
      </div>

      {/* Challenges and Solution */}
      <div className=' mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-justify'>
        {/* Challenges */}
        <div className='bg-red-50 p-8 rounded-lg shadow-sm py-16'>
          <h3 className='text-2xl font-bold  mb-4'>Challenges:</h3>
          <ul className='list-disc pl-5 text-gray-600 space-y-3'>
            <li>
              <strong>User-Centric Navigation:</strong> Ensuring the platform is
              intuitive and user-friendly to cater to both experienced and
              novice users.
            </li>
            <li>
              <strong>Comprehensive Software Database:</strong> Integrating a
              vast array of software solutions across different categories
              without overwhelming users.
            </li>
            <li>
              <strong>Scalability:</strong> Building a platform that can easily
              scale to accommodate future growth, both in terms of user base and
              the number of software listings.
            </li>
          </ul>
        </div>

        {/* Solution */}
        <div className='bg-green-50 p-8 rounded-lg shadow-sm py-16'>
          <h3 className='text-2xl font-bold  mb-4'>Solution:</h3>
          <ul className='list-disc pl-5 text-gray-600 space-y-3'>
            <li>
              <strong>Intuitive UI/UX Design:</strong> Clean layout with easy
              navigation, advanced search filters, and a responsive design for
              seamless use across devices.
            </li>
            <li>
              <strong>Software Comparison:</strong> A feature for users to
              compare multiple software products based on features, ratings, and
              categories.
            </li>
            <li>
              <strong>Vendor Dashboard:</strong> A space for software vendors to
              manage listings, track performance, and engage with users.
            </li>
            <li>
              <strong>Scalable Backend:</strong> A robust backend architecture
              to handle growth and provide quick, secure access to software
              data.
            </li>
            <li>
              <strong>API Integrations:</strong> Integration with third-party
              services for reviews, ratings, and additional software details.
            </li>
          </ul>
        </div>
      </div>

      {/* Technology Used */}
      <div className=' my-10'>
        <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>
          Technology used:
        </h3>
        <div className='flex flex-wrap justify-start items-center gap-8'>
          {/* Tech Icons */}
          <img
            src='/images/icon/tech-icon/aws-icon.svg'
            alt='AWS'
            className='h-16 w-auto'
          />
          <img
            src='/images/icon/tech-icon/js-icon.svg'
            alt='Node.js'
            className='h-16 w-auto'
          />
          <img
            src='/images/icon/tech-icon/dotnet-icon.svg'
            alt='JavaScript'
            className='h-16 w-auto'
          />
          <img
            src='/images/icon/tech-icon/html-icon.svg'
            alt='MySQL'
            className='h-16 w-auto'
          />
          <img
            src='/images/icon/tech-icon/nodejs-icon.svg'
            alt='HTML5'
            className='h-16 w-auto'
          />
          <img
            src='/images/icon/tech-icon/python-icon.svg'
            alt='CSS3'
            className='h-16 w-auto'
          />
          <img
            src='/images/icon/tech-icon/cpp-icon.svg'
            alt='React'
            className='h-16 w-auto'
          />
          <img
            src='/images/icon/tech-icon/mysql-icon.svg'
            alt='Node.js'
            className='h-16 w-auto'
          />
        </div>
      </div>
    </div>
  );
}
