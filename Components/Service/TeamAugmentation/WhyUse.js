export default function WhyUse() {
  const features = [
    {
      name: "Access Top Industry Talent",
      teamAugmentation: true,
      mvpDevelopment: false,
      projectDevelopment: false,
    },
    {
      name: "Customize Solutions to Fit Your Needs",
      teamAugmentation: true,
      mvpDevelopment: true,
      projectDevelopment: true,
    },
    {
      name: "Expand Your Team Quickly",
      teamAugmentation: true,
      mvpDevelopment: false,
      projectDevelopment: true,
    },
    {
      name: "Prototype Your Ideas",
      teamAugmentation: false,
      mvpDevelopment: true,
      projectDevelopment: true,
    },
    {
      name: "Ensure Product Scalability",
      teamAugmentation: true,
      mvpDevelopment: true,
      projectDevelopment: true,
    },
    {
      name: "Increase Development Speed",
      teamAugmentation: false,
      mvpDevelopment: true,
      projectDevelopment: true,
    },
    {
      name: "Cost-Effective Development Solutions",
      teamAugmentation: false,
      mvpDevelopment: true,
      projectDevelopment: true,
    },
  ];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-center text-2xl sm:text-4xl font-bold mb-8'>
        Why Use Our Dedicated Software Development Team?
      </h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full table-auto border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-300 px-4 py-8 text-center bg-[#ec008c] text-white'>
                Name of the Feature
              </th>
              <th className='border border-gray-300 px-4 py-8 bg-[#45bde8] text-white'>
                Team Augmentation
              </th>
              <th className='border border-gray-300 px-4 py-8 bg-[#6a4a94] text-white'>
                MVP Development
              </th>
              <th className='border border-gray-300 px-4 py-8 bg-[#97c253] text-white'>
                Project Development
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className='text-center'>
                <td className='border border-gray-300 px-4 py-8  text-sm font-semibold'>
                  {feature.name}
                </td>
                <td className='border border-gray-300 px-4 py-8'>
                  {feature.teamAugmentation ? (
                    <span className='text-green-500 flex justify-center'>
                      <img
                        src='/images/service/right.svg'
                        alt='right'
                        className='w-7 h-7'
                      />
                    </span>
                  ) : (
                    <span className='text-red-500 flex justify-center'>
                      <img
                        src='/images/service/cross.svg'
                        alt='right'
                        className='w-7 h-7'
                      />
                    </span>
                  )}
                </td>
                <td className='border border-gray-300 px-4 py-8 '>
                  {feature.mvpDevelopment ? (
                    <span className='text-green-500 flex justify-center'>
                      <img
                        src='/images/service/right.svg'
                        alt='right'
                        className='w-7 h-7'
                      />
                    </span>
                  ) : (
                    <span className='text-red-500 flex justify-center'>
                      <img
                        src='/images/service/cross.svg'
                        alt='right'
                        className='w-7 h-7'
                      />
                    </span>
                  )}
                </td>
                <td className='border border-gray-300 px-4 py-8'>
                  {feature.projectDevelopment ? (
                    <span className='text-green-500 flex justify-center'>
                      <img
                        src='/images/service/right.svg'
                        alt='right'
                        className='w-7 h-7'
                      />
                    </span>
                  ) : (
                    <span className='text-red-500 flex justify-center'>
                      <img
                        src='/images/service/cross.svg'
                        alt='right'
                        className='w-7 h-7'
                      />
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
