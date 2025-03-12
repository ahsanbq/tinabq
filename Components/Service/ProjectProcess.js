export default function ProjectProcess() {
  const clients = [
    {
      title: "Meeting",
      description: "We conduct a meeting with the client.",
      src: "/images/service/meeting.svg",
      alt: "Logo 1",
    },
    {
      title: "Presentation",
      description: "We conduct a meeting with the client.",
      src: "/images/service/meeting.svg",
      alt: "Logo 2",
    },
    {
      title: "Gap Analysis",
      description: "We conduct a meeting with the client.",
      src: "/images/service/Gap-Analysis.svg",
      alt: "Logo 3",
    },
    {
      title: "Proposal",
      description: "We conduct a meeting with the client.",
      src: "/images/service/proposal.svg",
      alt: "Logo 4",
    },
    {
      title: "Contract",
      description: "We conduct a meeting with the client.",
      src: "/images/service/Contact.svg",
      alt: "Logo 5",
    },
    {
      title: "Preparations",
      description: "We conduct a meeting with the client.",
      src: "/images/service/preparation.svg",
      alt: "Logo 6",
    },
    {
      title: "Work Plan",
      description: "We conduct a meeting with the client.",
      src: "/images/service/work-plan.svg",
      alt: "Logo 7",
    },
    {
      title: "Start Project",
      description: "We conduct a meeting with the client.",
      src: "/images/service/Startproject.svg",
      alt: "Logo 8",
    },
  ];
  return (
    <div className='py-14'>
      <h1 className='flex items-center justify-center text-center w-full  md:my-16 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white px-4 sm:px-4 xl:px-0'>
        New Project Process
      </h1>
      <div className='logos'>
        {/* First logos-slide */}
        <div className='process-slide '>
          {clients.map((client, index) => (
            <div
              className='mx-1 p-5 bg-[#F5F5F5] flex flex-col items-center justify-center w-50'
              key={index}
            >
              <img
                src={client.src}
                alt={client.alt}
                width='70'
                height='70'
                className='p-2 px-4'
              />
              <h3 className='text-center w-full text-xl font-bold text-gray-900 sm:text-xl dark:text-white'>
                {client.title}
              </h3>
              <p className='text-center text-sm px-5 pb-5'>
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
