export default function Benefits() {
  const benefits = [
    {
      title: "Access the top 1% of talent",
      description:
        "We've already done the rigorous testing for technical, logical, and soft-skill abilities so you don’t have to.",
      icon: "/images/service/Star.svg",
      color: "pink-500",
    },
    {
      title: "Streamline communications",
      description:
        "Our developers align with your work hours, provide and listen to feedback, and have exceptional communication skills.",
      icon: "/images/service/text.svg",
      color: "blue-500",
    },
    {
      title: "Skip recruitment delays",
      description:
        "Hiring the right talent is time-consuming. We assemble the right team of experts and onboard them in record time.",
      icon: "/images/service/clock.svg",
      color: "green-500",
    },
    {
      title: "Create healthy teams",
      description:
        "We grill developers on their soft and behavioral skills to ensure seamless integration and positive culture-fit alignment.",
      icon: "/images/service/Thumbs.svg",
      color: "purple-500",
    },
  ];

  return (
    <section className='container mx-auto px-4 py-12'>
      <h2 className='text-3xl font-bold text-center mb-8'>
        Benefits of staff augmentation
      </h2>
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className='flex flex-col items-start  p-6 bg-white border  rounded-lg'
          >
            <div
              className={`text-5xl mb-4 bg-${benefit.color}  p-3 rounded-lg text-start`}
            >
              <img
                src={benefit.icon}
                alt={benefit.title}
                className='w-10 h-10'
              />
            </div>
            <h3 className='text-lg font-semibold mb-2'>{benefit.title}</h3>
            <p className='text-gray-500 text-sm text-justify'>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
