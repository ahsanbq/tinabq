import Image from "next/image";

export default function HelpYou() {
  return (
    <div className='pt-14'>
      <div className='flex flex-col md:flex-row gap-6 mb-10 bg-[#9C578914] pt-6'>
        <div className='flex w-full h-full md:w-1/2  rounded-xl justify-center'>
          <div className='px-14 py-10 text-gray-900 '>
            <h2 className='mb-5  font-bold title-font text-3xl bg-clip-text  text-[#494747] '>
              How can we <span className='text-[#9D4F91]'>help you ?</span>
            </h2>
            <p className='mb-6 leading-relaxed font-16 text-justify text-[#6B6B6B]'>
              have question? search through our help center
            </p>
            <input
              type='text'
              placeholder='Enter a topic question or keyword'
              className='w-full px-4 py-2 mb-4 text-black bg-white placeholder:text-white focus:outline-none '
            />
            <div className='flex w-full'>
              <button className='inline-flex items-center justify-center px-7 py-3 text-sm text-[#ddd7d7] rounded bg-[#9D4F91]  hover:bg-pink-700 '>
                Send
              </button>
            </div>
          </div>
        </div>
        <div className='flex w-full h-full md:w-1/2'>
          <div className='flex items-start justify-c w-full  '>
            <div className='transition-all duration-500 scale-100 cursor-pointer hover:scale-110'>
              <Image
                className='object-cover object-center w-full'
                alt='product'
                src='/images/service/help.svg'
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
