import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { useGlobalData } from "./Context/GlobalDataContext";
import EmailSubscription from "./EmailSubscription";

export default function Footer() {
  const globalData = useGlobalData();
  const { social } = globalData.footer;

  return (
    <footer className='mx-auto mt-20 md:mt-30 max-w-7xl  px-4 md:px-0'>
      <div className='container flex flex-col items-center justify-center gap-8'>
        {/* Logo and Brand */}
        <div className='flex items-center justify-center gap-3 mb-4 text-2xl font-bold text-black md:w-3/4 '>
          <Image
            src='/images/logo/bq-logo-icon.svg'
            alt='Binary Quest Ltd.'
            width={50}
            height={50}
            style={{ width: "50px", height: "50px" }}
          />
          <span>binaryquest</span>
        </div>

        {/* Email Subscription Section */}
        {/* <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_BQ_SITE_KEY}
          scriptProps={{
            async: true,
            defer: true,
            appendTo: "head",
            nonce: undefined,
          }}
        > */}
        <EmailSubscription />
        {/* </GoogleReCaptchaProvider> */}

        {/* Social Links */}
        <div className='flex justify-center gap-4'>
          <a
            className='p-3 px-[13px] bg-pink-200 rounded-full  hover:text-pink-700 text-black'
            href={social.facebook}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
            <FaFacebookF />
          </a>
          <a
            className='p-3 px-[13px] bg-pink-200 rounded-full  hover:text-pink-700 text-black'
            href={social.twitter}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='X (formerly Twitter)'
          >
            <FaXTwitter />
          </a>

          <a
            className='p-3 px-[13px] bg-pink-200 rounded-full  hover:text-pink-700 text-black'
            href={social.linkedIn}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright Section */}
        <p className='mb-10 text-base text-gray-500'>
          &copy; 2025 Binary Quest Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
