import React from 'react'
import { Link } from "react-router-dom"; // Import React Router Link

export default function ErrorPage() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-[16px] font-customFont text-purple dark:text-lightBlue">404</p>
            <h1 className="mt-4 text-5xl font-customFont tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl">
             Chill we are working on it
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Sorry, the page you're looking for is coming soon. Stay Tuned!!!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/"
                className="rounded-md bg-purple dark:bg-lightBlue px-3.5 py-2.5 text-[16px] sm:text-[20px] font-semibold  text-white dark:text-gray-900 shadow-xs hover:text-white hover:bg-gradient-purple-blue transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
              >
                Go back home
              </Link>
              
            </div>
          </div>
        </main>
      </>
    )
  }
  