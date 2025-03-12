import useWindowSize from "@/hooks/useWindowSize";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { withGoogleReCaptcha } from "react-google-recaptcha-v3";
function ContactUs({ googleReCaptchaProps }) {
  const size = useWindowSize();
  const isMobile = size.width <= 940;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [validated, setValidated] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    setValidated(true);
    const { email, firstName, phone, message, subject } = formData;

    if (
      email.length > 0 &&
      firstName.length > 0 &&
      phone.length > 0 &&
      message.length > 0 &&
      email.match(pattern)
    ) {
      try {
        const { executeRecaptcha } = googleReCaptchaProps;
        if (!executeRecaptcha) {
          console.log("Execute recaptcha not yet available");
          return;
        }

        const token = await executeRecaptcha("contact_us");

        const url = `/api/contact-us`;
        const response = await axios.post(url, {
          email,
          name: `${firstName} ${formData.lastName}`,
          phoneNumber: phone,
          details: message,
          subject,
          token, // Add reCAPTCHA token to the payload
        });

        if (response.status === 200) {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setValidated(false);
          enqueueSnackbar(
            "Thank you for your response. We will get back to you as soon as possible.",
            { variant: "success" }
          );
        }
      } catch (error) {
        console.error("Error in API call:", error);
        enqueueSnackbar("Request failed. Please try again later.", {
          variant: "error",
        });
      }
    }
  };
  return (
    <>
      <section
        id='hero-section'
        className='pt-3  flex flex-row-reverse items-center justify-center mb-4 md:flex-row body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height'
      >
        <div className='md:rounded-3xl bg-gradient container flex flex-col items-center gap-12 md:flex-row bg-no-repeat pt-20 pb-6 md:pb-8 mt-0 max-w-screen-xl mx-auto'>
          <div className=' flex flex-col items-center w-full text-center bg-left-top bg-contain md:items-center md:text-left md:mb-0 px-5 md:px-0'>
            <h1 className='text-center text-3xl font-semibold title-font sm:text-5xl bg-clip-text text-transparent bg-gradient-to-l from-cyan-800 to-pink-500 leading-7'>
              <span className='leading-[1.5]'>How Can We Empower Your </span>
              <br className='hidden md:inline-block ' />
              <span className='leading-[1.2]'>Business to Thrive?</span>
            </h1>
            <p className='text-base leading-relaxed mt-9 text-center  mb-16 text-gray-600'>
              Empowering your business to thrive means providing tailored
              solutions, expert guidance, and innovative{" "}
              <br className='hidden md:inline-block ' /> tools to help you
              overcome challenges and seize opportunities. With a focus on
              optimizing processes <br className='hidden md:inline-block ' />
              and driving growth, we enable your business to achieve lasting
              success in a competitive market.
              {/* Our flexible plans are designed to meet your needs, whether you're
              just starting out or <br className='hidden md:inline-block ' />
              looking to scale your operations. You can enjoy essential all
              features for your. */}
            </p>
          </div>
        </div>
      </section>

      <section className='my-24 md:my-24 mx-8 md:mx-0 '>
        <div
          className='container mx-auto'
          style={{
            backgroundImage: isMobile
              ? "none" // No background image for mobile screens
              : "url('/images/home/bg-hero-section.svg'), url('/images/home/bg-hero-section-2.svg')", // Two background images
            backgroundRepeat: "no-repeat", // Prevent background images from repeating
            backgroundPosition: "left top, right bottom", // First image at left top, second image at right bottom
            // backgroundSize: "contain, contain", // Adjust size of the images (use 'cover' or 'contain' depending on the effect you need)
          }}
        >
          {" "}
          <form
            onSubmit={handleSubmit}
            className='w-full max-w-xl mx-auto md:pt-14 relative '
          >
            <div className='flex flex-col md:flex-row md:mb-9'>
              <div className='md:w-1/2 md:pr-6 mb-6 md:mb-0'>
                <label
                  className='block text-sm mb-2 text-black'
                  htmlFor='firstName'
                >
                  First Name
                </label>
                <input
                  type='text'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='border-b border-gray-500 w-full py-2 px-3 focus:border-blue-500'
                  required
                />
              </div>
              <div className='md:w-1/2 md:pl-6 mb-6 md:mb-0'>
                <label
                  className='block text-sm mb-2 text-black'
                  htmlFor='lastName'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  className='border-b border-gray-500 w-full py-2 px-3 focus:border-blue-500'
                  required
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row mb-9'>
              <div className='md:w-1/2 md:pr-6 mb-6 md:mb-0'>
                <label
                  className='block text-sm mb-2 text-black'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='border-b border-gray-500 w-full py-2 px-3 focus:border-blue-500'
                  required
                />
              </div>
              <div className='md:w-1/2 md:pl-6'>
                <label
                  className='block text-sm mb-2 text-black'
                  htmlFor='phone'
                >
                  Phone Number
                </label>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='border-b border-gray-500 w-full py-2 px-3 focus:border-blue-500'
                  required
                />
              </div>
            </div>

            <div className='mb-9'>
              <label
                className='block text-sm mb-2 text-black'
                htmlFor='subject'
              >
                Subject
              </label>
              <div className='flex flex-wrap gap-4'>
                {["General Inquiry", "Support", "Feedback", "Other"].map(
                  (option, index) => (
                    <label key={index} className='flex items-center text-black'>
                      <input
                        type='radio'
                        name='subject'
                        value={option}
                        checked={formData.subject === option}
                        onChange={handleChange}
                        className='mr-2'
                        required
                      />
                      <span className='text-sm'>{option}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div className='mb-4'>
              <label
                className='block text-sm mb-2 text-black'
                htmlFor='message'
              >
                Message
              </label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='border-b border-gray-500 w-full py-2 px-3 focus:border-blue-500 h-32'
                required
              />
            </div>
            <div className='flex w-full justify-end'>
              <button
                type='submit'
                className='px-6 py-2 text-lg text-white bg-pink-600 hover:bg-purple-900 rounded-lg'
              >
                Send Message
              </button>
            </div>
            <div className='flex w-full justify-center'>
              <img src='/images/icon/letter_send.svg' alt='letter Icon' />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default withGoogleReCaptcha(ContactUs);
