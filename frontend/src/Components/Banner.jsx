import React from 'react'
import banner from '../banner.jpg'

const Banner = () => {
  return (
    <div className="max-w-screen-2xl my-16 container mx-auto md:px-20 px-4">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hello, welcomes here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>

          <p className="text-lg text-gray-600">
            Discover expert-crafted Course, build real-world skills, and move forward with confidence through practical, easy-to-follow learning designed for your success.
          </p>

          <label className="input input-bordered flex items-center gap-2 max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>

          <button className="btn btn-secondary mt-4 px-8">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={banner}
            className="max-w-sm md:max-w-md rounded-xl shadow-lg"
            alt="Banner"
          />
        </div>

      </div>
    </div>
  )
}

export default Banner
