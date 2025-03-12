import Lottie from "lottie-react";
import { useRef, useState } from "react";
import editAnimation from "./../public/images/animation/contact/contact-1.json";
import { useGlobalData } from "./Context/GlobalDataContext";
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);
  const globalData = useGlobalData();
  const { title, logo, nav } = globalData.header;
  const lottieRef = useRef(null);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkMode((prev) => !prev);
  };

  const renderDropdown = (children) => (
    <ul className='dropdown-menu w-full absolute hidden text-sm text-gray-700 pt-6 md:w-[270px]'>
      {children.map((child, idx) => (
        <li key={idx} className='border-b border-gray-300'>
          <a
            className='bg-gray-100 hover:bg-[#FBECF2] py-2 px-4 block whitespace-no-wrap'
            href={child.href}
          >
            {child.label}
          </a>
        </li>
      ))}
    </ul>
  );

  const renderNavItems = () =>
    nav.map(
      (item, idx) =>
        item.isActive && ( // Only render the item if isActive is true
          <li
            key={idx}
            className={`p-4 lg:px-4 ${
              item.children ? "dropdown inline-block relative" : ""
            }`}
          >
            <a
              href={item.href}
              className={`flex gap-1 items-center justify-center  text-slate-950 hover:text-pink-600 ${
                item.href === "/" ? "text-pink-600 font-bold" : ""
              }`}
            >
              {item.label}
              {item.children && (
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              )}
            </a>
            {item.children && renderDropdown(item.children)}
          </li>
        )
    );

  return (
    <header className='sticky top-0 z-10 md:pt-8 py-4 md:py-0 bg-white  text-dark mx-auto max-w-7xl custom-header-padding'>
      <section className='flex items-center justify-between md:px-12 px-5 py-2 rounded-2xl md:border md:border-gray-300 '>
        <div className='flex items-center justify-center gap-3 text-2xl font-bold text-black '>
          <a href='/' className='flex items-center'>
            <img src={logo} alt={title} className='w-15 h-15' />
            <span className='ms-2'>{title}</span>
          </a>
        </div>
        {/* <button
          id='hamburger-button'
          className='relative w-24 h-10 text-sm text-white cursor-pointer md:hidden bg-[#EC008C] flex justify-center align-middle rounded-full pt-[0.6rem]'
          onClick={toggleMobileMenu}
        >
          <div className='hamburger-icon mt-[0.2rem]'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
          <span className='font-bold ms-1'>Menu</span>
        </button> */}
        <nav className='hidden space-x-8 md:block'>
          <ul className='flex flex-wrap items-center font-normal text-base'>
            {renderNavItems()}
          </ul>
        </nav>
        <div className=''>
          <div className='flex items-center '>
            {/* <button
              onClick={toggleDarkMode}
              className='w-6 h-6 p-1 transition-all duration-500 bg-gray-700 rounded-full dark:bg-gray-400'
            >
              {isDarkMode ? (
                <svg
                  className='fill-gray-700'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <svg
                  className='fill-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                </svg>
              )}
            </button> */}
            {/* <a
              className='px-6 py-2 text-lg text-white transition-all duration-700 rounded-full bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] hover:from-purple-700 hover:to-purple-900'
              href='/contactus'
            >
              Contact
              <div className='edit-icon  '>
                <Lottie
                  animationData={editAnimation}
                  loop={true}
                  style={{ width: 25, height: 25 }} // Adjust size as needed
                />
              </div>
            </a> */}
            {/* <div className='edit-icon bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] hover:from-purple-700 hover:to-purple-900 rounded-full p-1 text-white'>
              <Lottie
                animationData={editAnimation}
                loop={true}
                style={{ width: 32, height: 32 }} // Adjust size as needed
                color='white'
              />
            </div>*/}
            <a
              href='/contactus'
              className='flex items-center space-x-3 px-6 pe-2 py-2 text-lg text-white transition-all duration-700 rounded-full bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] hover:from-purple-700 hover:to-purple-900'
              onMouseEnter={() => {
                if (lottieRef.current) {
                  lottieRef.current.play(); // Start animation on hover
                }
              }}
              onMouseLeave={() => {
                if (lottieRef.current) {
                  lottieRef.current.stop(); // Stop animation on hover out
                }
              }}
            >
              <span className='text-lg'>Contact</span>
              <div className='edit-icon bg-white rounded-full p-1'>
                <Lottie
                  lottieRef={lottieRef} // Assign ref to Lottie component
                  animationData={editAnimation}
                  loop={true} // Don't loop unless needed
                  autoplay={false} // Don't play on initial load
                  style={{ width: 24, height: 24 }} // Adjust size as needed
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {isMobileMenuOpen && (
        <section
          id='mobile-menu'
          className={`fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm bg-slate-100 text-black  font-bold transition-transform transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col items-start p-6`}
        >
          <div className='flex items-center justify-between w-full mb-10 '>
            <a href='/' className='flex items-center'>
              <img src={logo} alt={title} className='w-15 h-15' />
              <span className='ms-2'>{title}</span>
            </a>
            <button
              onClick={toggleMobileMenu}
              className='text-3xl self-end mb-1'
            >
              &times;
            </button>
          </div>

          <nav className='flex flex-col gap-4 text-xl border-top-1 border-gray-800'>
            {nav.map(
              (item, idx) =>
                item.isActive && ( // Only render if isActive is true
                  <a key={idx} href={item.href} className='hover:text-pink-600'>
                    {item.label}
                  </a>
                )
            )}
            {/* Add Contact Button in Mobile Menu */}

            <a
              href='/contactus'
              className='flex items-center space-x-3 px-6 pe-2 py-2 mt-5 text-lg text-white transition-all duration-700 rounded-full bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] hover:from-purple-700 hover:to-purple-900'
              onMouseEnter={() => {
                if (lottieRef.current) {
                  lottieRef.current.play(); // Start animation on hover
                }
              }}
              onMouseLeave={() => {
                if (lottieRef.current) {
                  lottieRef.current.stop(); // Stop animation on hover out
                }
              }}
            >
              <span className='text-lg'>Contact</span>
              <div className='edit-icon bg-white rounded-full p-1'>
                <Lottie
                  lottieRef={lottieRef} // Assign ref to Lottie component
                  animationData={editAnimation}
                  loop={true} // Don't loop unless needed
                  autoplay={false} // Don't play on initial load
                  style={{ width: 24, height: 24 }} // Adjust size as needed
                />
              </div>
            </a>
          </nav>
        </section>
      )}
    </header>
  );
};

export default Header;
