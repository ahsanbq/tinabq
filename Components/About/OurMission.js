import Image from "next/image";

const OurMission = () => {
  return (
    <div
      className="relative bg-cover bg-center mt-12 p-10 rounded-xl"
      style={{ backgroundImage: "url('/images/about/ourmission/ourmissionvission.svg')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        {/* Vision Section */}
        <div className="flex flex-col items-start px-24 py-12 rounded-lg">
          <div className="flex flex-row items-center gap-4">
            {/* Logo */}
            <Image
              src="/images/about/ourmission/vision.svg"
              alt="Vision Icon"
              width={50}
              height={50}
            />
            {/* Title */}
            <h2 className="text-2xl font-bold text-pink-500"><span className="text-white">Our </span>Vision</h2>
          </div>
          {/* Description */}
          <p className="text-sm mt-4 text-justify">
            Our vision is to be the frontier in our working domains by providing the best services in
            innovative and intelligent applications to our clients worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col items-start px-24 py-12 rounded-lg">
          <div className="flex flex-row items-center gap-4">
            {/* Logo */}
            <Image
              src="/images/about/ourmission/mission.svg"
              alt="Mission Icon"
              width={50}
              height={50}
            />
            {/* Title */}
            <h2 className="text-2xl font-bold text-green-500"><span className="text-white">Our </span> Mission</h2>
          </div>
          {/* Description */}
          <p className="text-sm mt-4 text-justify ">
            Our mission is to be the frontier in our working domains by providing the best services in
            innovative and intelligent applications to our clients worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;