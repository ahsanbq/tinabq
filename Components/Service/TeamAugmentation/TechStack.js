export default function TechStack() {
  const techs = [
    { name: "Python", icon: "/images/service/python.svg" },
    { name: "React", icon: "/images/service/react.svg" },
    { name: "Angular", icon: "/images/service/Angular.svg" },
    { name: ".NET", icon: "/images/service/dotnet.svg" },
    { name: "PHP", icon: "/images/service/php.svg" },
    { name: "Android Studio", icon: "/images/service/android.svg" },
    { name: "Figma", icon: "/images/service/figma.svg" },
    { name: "C++", icon: "/images/service/cpp.svg" },
  ];

  return (
    <section className='container mx-auto px-4 py-12'>
      <h2 className='text-3xl font-bold text-center mb-8'>Our Tech Stack</h2>
      <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 md:mx-40'>
        {techs.map((tech, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center p-6 bg-white border border-gray-200  rounded-md hover:shadow-lg transition-shadow duration-300'
          >
            <img src={tech.icon} alt={tech.name} className='w-16 h-16 mb-4' />
            <h3 className='text-lg font-medium'>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
