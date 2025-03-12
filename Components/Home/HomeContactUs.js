import axios from "axios";
import { useSnackbar } from "notistack"; // Import useSnackbar
import { useState } from "react";
import { withGoogleReCaptcha } from "react-google-recaptcha-v3";

const HomeContactUs = ({ googleReCaptchaProps }) => {
  const { enqueueSnackbar } = useSnackbar(); // Initialize the snackbar
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { executeRecaptcha } = googleReCaptchaProps;
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      enqueueSnackbar("ReCAPTCHA is not available. Please try again later.", {
        variant: "error",
      }); // Error notification
      return;
    }

    try {
      const token = await executeRecaptcha("contact_form");
      // Use axios to send a POST request
      const response = await axios.post("/api/home-contact-us", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        token, // Add reCAPTCHA token to the payload
      });

      if (response.status === 200) {
        enqueueSnackbar("Your message has been sent successfully!", {
          variant: "success",
        }); // Success notification
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      } else {
        enqueueSnackbar(`Error: ${response.data.message}`, {
          variant: "error",
        }); // Error notification
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      enqueueSnackbar(
        "There was an error submitting the form. Please try again.",
        { variant: "error" }
      ); // Error notification
    }
  };

  return (
    <section
      id='contactus'
      className=' mt-14 md:mt-24 mb-4 text-gray-400 body-font scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height'
    >
      <div className='container flex flex-wrap px-5 md:px-0 mx-auto sm:flex-nowrap'>
        {/* Left side content */}
        <div className='flex items-center bg-right bg-no-repeat bg-contain lg:w-1/2 md:w-1/2 sm:mr-10 bg-light-globe '>
          <div className='flex-col grow'>
            <div className='md:w-4/5 py-6 '>
              <h2 className='text-[1.7rem] md:text-3xl font-bold text-gray-900 '>
                Contact us
              </h2>
              <p className='mt-4 !leading-normal text-[1.7rem]  font-bold bg-clip-text bg-gradient-to-r text-transparent from-[#70499B] via-[#A62D82] to-[#CB1A71] md:text-5xl'>
                How can we help you
              </p>
              <p className='mt-4 text-gray-700 text-justify'>
                We’re here to turn your ideas into powerful software. From
                custom apps to seamless integrations, our expert team is ready
                to help. Let’s create the perfect solution for your business
                together.
              </p>
            </div>
          </div>
        </div>

        {/* Form content */}
        <div className='flex flex-col w-full mt-8 lg:w-1/2 md:w-1/2 md:ml-auto md:py-8 md:mt-0'>
          <form onSubmit={handleSubmit}>
            <div className='relative mb-4'>
              <label
                htmlFor='name'
                className='text-sm leading-7 text-gray-900 '
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required // Ensure name field is required
                className='w-full px-3 py-1 text-base leading-8 text-gray-800 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-800'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='email'
                className='text-sm leading-7 text-gray-900 '
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required // Ensure email field is required
                className='w-full px-3 py-1 text-base leading-8 text-gray-800 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-800'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='message'
                className='text-sm leading-7 text-gray-900 '
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required // Ensure message field is required
                className='w-full h-32 px-3 py-1 text-base leading-6 text-gray-800 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none resize-none focus:border-pink-600 focus:ring-2 focus:ring-pink-800'
              />
            </div>
            <button
              type='submit'
              className='px-6 py-2 w-1/2 md:w-1/3 text-lg text-white transition-all duration-700 rounded-lg bg-gradient-to-r from-purple-900 to-pink-500 hover:from-purple-700 hover:to-purple-900'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default withGoogleReCaptcha(HomeContactUs);
