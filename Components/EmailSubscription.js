import { useSnackbar } from "notistack";
import { withGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";

const EmailSubscription = ({ googleReCaptchaProps }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
  });
  const { enqueueSnackbar } = useSnackbar();
  const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const onSubmit = async (data) => {
    console.log(data, googleReCaptchaProps);
    try {
      const { executeRecaptcha } = googleReCaptchaProps;
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha("email_subscription");

      if (!data.Email.match(pattern)) {
        enqueueSnackbar("Please provide a valid email address", {
          variant: "error",
        });
        return;
      }

      const response = await fetch(`/api/email_subscription`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.Email, token }),
      });

      const result = await response.json();

      reset();
      if (response.ok) {
        enqueueSnackbar("Thank you for your subscription", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Sorry, something went wrong", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("An error occurred. Please try again later.", {
        variant: "error",
      });
      console.log(error.message);
    }
  };

  return (
    <div className='flex flex-col gap-2 md:flex-row p-3 bg-pink-modify rounded-lg md:w-3/5'>
      {/* <div className='hidden md:flex items-center justify-center w-full md:w-1/4 text-lg font-semibold leading-7 md:ps-4 dark:text-gray-400'>
        Get latest updates
      </div> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex items-center w-full  overflow-hidden rounded-md'
      >
        <input
          type='text'
          placeholder='Enter your email here...'
          className='w-full px-4 py-2 text-gray-600 bg-white placeholder:text-gray-400 focus:outline-none'
          {...register("Email", { required: true, pattern })}
        />
        <button
          type='submit'
          className='px-4 py-2 font-medium text-white bg-gradient-to-r from-[#70499B] via-[#A62D82] to-[#CB1A71] hover:from-purple-800 hover:to-purple-500 focus:outline-none w-60 md:w-1/4'
        >
          subscribe
        </button>
      </form>
    </div>
  );
};

export default withGoogleReCaptcha(EmailSubscription);
