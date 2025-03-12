// import ContactUs from "@/Components/ContactUs";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/Components/Footer"));
// import Footer from "@/Components/Footer";
const Header = dynamic(() => import("@/Components/Header"));
// import Header from "@/Components/Header";
const ContactUs = dynamic(() => import("@/Components/ContactUs"));

export default function contactus() {
  return (
    <div className=' '>
      <Header />
      {/* <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_BINARY_QUEST_SITE_KEY}
      > */}
      <ContactUs />
      {/* </GoogleReCaptchaProvider> */}

      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {
      seo: {
        shouldIndexData: true,
        pageTitle: "Contact Us",
        metaData:
          "Get in touch with Binary Quest, a top software company and Odoo partner. Contact us for tailored software and technology solutions for your business.",
        image: "/images/logo/binary-quest-logo.png",
        url: process.env.NEXT_PUBLIC_SITE_URL + "/contactus",
        canonical: process.env.NEXT_PUBLIC_SITE_URL + "/contactus",
      },
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}
