// components/StaffAugmentation.js
export default function StaffAugmentation() {
  return (
    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      <h2 className='text-center text-3xl font-extrabold text-gray-900 mb-10'>
        Binary Quest Staff Augmentation Approach
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-40'>
        {/* First Row */}
        <div className='flex flex-col items-start bg-red-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-bold text-gray-700'>
            Understanding Client Requirements
          </h3>
          <p className='mt-4 text-gray-600 '>
            We discuss project specifics and your requirements to understand the
            necessary skill sets and project goals.
          </p>
        </div>
        <div className='flex flex-col items-start bg-blue-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-bold text-gray-700'>
            Talent Sourcing & Screening
          </h3>
          <p className='mt-4 text-gray-600 '>
            We identify, screen, and present suitable candidates matching your
            requirements and culture.
          </p>
        </div>

        {/* Second Row */}
        <div className='flex flex-col items-start bg-green-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-bold text-gray-700'>
            Proposal Submission
          </h3>
          <p className='mt-4 text-gray-600 '>
            We present a shortlist of candidates with detailed profiles, skills,
            and proposed roles and timelines.
          </p>
        </div>
        <div className='flex flex-col items-start bg-purple-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-bold text-gray-700'>
            Onboarding & Integration
          </h3>
          <p className='mt-4 text-gray-600 '>
            We facilitate administrative tasks and orientation sessions to
            integrate the selected candidates into your team.
          </p>
        </div>

        {/* Full Width for Continuous Monitoring */}
        <div className='col-span-1 md:col-span-2 flex flex-col items-center bg-yellow-100 p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-bold text-gray-700'>
            Continuous Monitoring
          </h3>
          <p className='mt-4 text-gray-600 text-center'>
            We ensure continuous communication and support to address project
            progress, challenges, and achieve successful outcomes throughout the
            engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
