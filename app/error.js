"use client"; // Error components must be Client Components

import PageBannerTitle from "@/components/core/PageBannerTitle";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <PageBannerTitle
        title="Something went wrong!"
        img="/images/portfolio/portfolio-background.jpg"
      />

      <div className="py-20">
        <div className="container text-center">
          <h2 className="text-7xl font-bold">
            4<span className="text-main">0</span>4
          </h2>
          <h5 className="font-semibold text-2xl">Not Found </h5>


          <Link href="/" className="bg-main rounded px-10 py-4 inline-block mt-10 text-white font-bold mr-2">Go to Home page</Link>
        </div>
      </div>
    </>
  );
}
