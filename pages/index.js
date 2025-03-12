import Footer from "@/Components/Footer";
import HomeComponents from "@/Components/Home/HomeComponents";
import client from "@/tina/__generated__/client";
// import { useEffect, useState } from "react";
import Headers from "../Components/Header";

export default function Home({ heroData }) {
  return (
    <div className=''>
      <Headers />

      <HomeComponents heroData={heroData} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const homeResult = await client.queries.pages({
      relativePath: "home.md",
    });

    if (!homeResult?.data?.pages) {
      throw new Error("Home data not found");
    }

    // Return the fetched data as props to the page
    return {
      props: {
        heroData: homeResult?.data?.pages,
        seo: {
          shouldIndexData: true,
        },
      },
    };
  } catch (error) {
    // In case of error, you can return an empty object or handle the error accordingly
    return {
      props: {
        heroData: null,
        error: error.message || "Failed to load home data",
        seo: {
          shouldIndexData: true,
        },
      },
    };
  }
}
