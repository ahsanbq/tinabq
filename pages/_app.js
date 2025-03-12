import { GlobalDataProvider } from "@/Components/Context/GlobalDataProvider"; // Import the GlobalDataProvider
import "@/styles/globals.css";
import Head from "next/head"; // Import Head from next/head
import Script from "next/script";
import { SnackbarProvider } from "notistack"; // Import SnackbarProvider
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"; // Import GoogleReCaptchaProvider

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const seo = pageProps?.seo || {}; // Fallback to an empty object if no SEO data is provided

  // Define SEO metadata with fallback values
  const canonical = seo.canonical || process.env.NEXT_PUBLIC_SITE_URL;
  const pageTitle = seo.pageTitle || "Binary Quest";
  const description =
    seo.metaData ||
    "Binary Quest is an Independent Software Vendor and Technology Services Company Providing Solution in .Net Platform and Other Cloud Platform.";
  const keywords = seo.keywords
    ? seo.keywords.join(", ")
    : "Technology solutions, Software company, Software consulting, IT services";
  const siteName = "Binary Quest Software Pty Ltd";
  const url = seo.url || process.env.NEXT_PUBLIC_SITE_URL;
  const image = seo.image || "/images/logo/binary-quest-logo.png";
  const shouldIndex = seo?.shouldIndexData ? true : false;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_BQ_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <GlobalDataProvider>
        <SnackbarProvider maxSnack={3}>
          <Script
            // strategy='worker'
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script id='google-analytics-scripts'>
            {`
        window.dataLayer =window.dataLayer|| [];
        function gtag( ){dataLayer.push(arguments);}
        gtag('js' ,new Date());
        gtag('config','${process.env.NEXT_PUBLIC_GA_ID}',{
          page_path: window.location.pathname,
        });
        
        `}
          </Script>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//matamo.anaylics.com/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
              `,
            }}
          />

          {/* LinkedIn Tracking Script */}
          <Script id='linkedin-partner-id' type='text/javascript'>
            {`
              _linkedin_partner_id = "6872908";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `}
          </Script>
          <Script
            id='linkedin-analytics'
            dangerouslySetInnerHTML={{
              __html: `
                (function(l) {
                  if (!l) {
                    window.lintrk = function(a, b) {
                      window.lintrk.q.push([a, b]);
                    };
                    window.lintrk.q = [];
                  }
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript";
                  b.async = true;
                  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                  s.parentNode.insertBefore(b, s);
                })(window.lintrk);
                
                              // Add Matomo tracking for LinkedIn events
window.lintrk('track', function(data) {
    _paq.push(['trackEvent', 'LinkedIn', 'Insight', data.eventType]);
});
              `,
            }}
          />
          <noscript>
            <img
              height='1'
              width='1'
              style={{ display: "none" }}
              alt=''
              src='https://px.ads.linkedin.com/collect/?pid=6872908&fmt=gif'
            />
          </noscript>

          <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='x-ua-compatible' content='IE=edge' />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1, shrink-to-fit=no'
            />
            <link rel='icon' href='/favicon.ico' sizes='any' />
            <link rel='shortcut icon' href='/favicon.ico' sizes='any' />
            <link rel='canonical' href={canonical} />

            <title>
              {pageTitle.length > 20
                ? pageTitle
                : `${pageTitle} - Top Software Company | Odoo Partner`}
            </title>

            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />

            {/* Open Graph Meta Tags */}
            <meta property='og:type' content='article' />
            <meta property='og:site_name' content={siteName} />
            <meta property='og:url' content={url} />
            <meta property='og:title' content={pageTitle} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={image} />
            <meta property='og:logo' content={image} />

            {/* Twitter Card Meta Tags */}
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:site' content='@BinaryQuest' />
            <meta name='twitter:title' content={pageTitle} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={image} />

            {/* Robots Meta Tag */}
            <meta
              name='robots'
              content={shouldIndex ? "index, follow" : "noindex, nofollow"}
            />

            {/* Structured Data for Local Business */}
            <script
              type='application/ld+json'
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  name: "Binary Quest Limited",
                  url: "https://www.binaryquest.com/",
                  sameAs: [
                    "https://twitter.com/BinaryQuest",
                    "https://www.facebook.com/binaryquest",
                    "https://www.linkedin.com/company/binaryquest",
                  ],
                  logo: "/images/logo/binary-quest-logo.png",
                  image,
                  description:
                    "Binary Quest is an Independent Software Vendor and Technology Services Company Providing Solution in .Net Platform and Other Cloud Platform.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "245/2, 1st Floor, Outer Circular Road",
                    addressLocality: "Malibagh",
                    addressRegion: "Dhaka",
                    postalCode: "1217",
                    addressCountry: "Bangladesh",
                  },
                  telephone: "+8802-9350383",
                  openingHours: "Su, Mo, Tu, We, Th 10:00-20:00",
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "Helpline",
                    telephone: "+8802-9350383",
                  },
                }),
              }}
            />
          </Head>
          <Component {...pageProps} />
          {/* <a
            href='https://wa.me/+8801937091332'
            target='_blank'
            rel='noopener noreferrer'
            className='whatsapp-button rounded-5'
          >
            <FaWhatsapp className='whatsapp-icon' />
          </a> */}
        </SnackbarProvider>
      </GlobalDataProvider>
    </GoogleReCaptchaProvider>
  );
}
