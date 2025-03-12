import React from 'react'

function GetTheBestERP() {
  return (
    <div className='bg-white mt-24'>
      <div className="flex flex-col justify-center items-center w-full p-8">
        <h1 className="font-semibold text-4xl text-center text-gray-900 mb-16">
          Get The Best ERP Experience
        </h1>
        
        <div className="relative flex flex-row justify-center items-center gap-12 w-full max-w-6xl">
          {/* Project Planning */}
          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            <div className="flex justify-center items-center p-4 w-20 h-20 bg-white shadow-md">
              <img src="/images/product/Supply Chain Management/getthebest/project.svg" alt="Project Planning" className="w-10 h-10" />
            </div>
            <h2 className="font-semibold text-2xl text-center text-gray-900">Project Planning</h2>
            <p className="font-normal text-base text-center text-gray-500 w-full max-w-xs">
              We'll learn from you about your needs and design a requirement list of it. We always carefully note down every key point so we don't miss a single thing.
            </p>
          </div>
          
          {/* Arrow pointing from 1st to 2nd */}
          <img
            src="/images/product/Supply Chain Management/getthebest/rightarrow.svg"
            alt="Arrow"
            className="absolute left-1/3 top-1/4 transform -translate-x-1/2 -translate-y-3 hidden md:block"
            width="80"
            height="120"
          />

          {/* Organizing meetings */}
          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            <div className="flex justify-center items-center p-4 w-20 h-20 bg-white shadow-md">
              <img src="/images/product/Supply Chain Management/getthebest/organizing.svg" alt="Organizing Meetings" className="w-10 h-10" />
            </div>
            <h2 className="font-semibold text-2xl text-center text-gray-900">Organizing meetings</h2>
            <p className="font-normal text-base text-center text-gray-500 w-full max-w-xs">
              We will make a meeting scheduled in your flexible time for having an effective conversation. Our experts will directly conduct it to understand better.
            </p>
          </div>
          
          {/* Arrow pointing from 2nd to 3rd */}
          <img
            src="/images/product/Supply Chain Management/getthebest/rightarrow.svg"
            alt="Arrow"
            className="absolute right-1/4 top-1/4 transform -translate-x-1/2 -translate-y-3 hidden md:block"
            width="80"
            height="120"
          />
          
          {/* Start Building */}
          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            <div className="flex justify-center items-center p-4 w-20 h-20 bg-white shadow-md">
              <img src="/images/product/Supply Chain Management/getthebest/start.svg" alt="Start Building" className="w-10 h-10" />
            </div>
            <h2 className="font-semibold text-2xl text-center text-gray-900">Start Building</h2>
            <p className="font-normal text-base text-center text-gray-500 w-full max-w-xs">
              With a highly experienced team, we've done so many projects for a variety of clients. Implementing your requirements is the easiest work on our task list.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetTheBestERP
