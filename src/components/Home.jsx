// Home.jsx (continued)
// Import necessary libraries
import React from 'react';
// Adjust file extension and path if different

import bgImage from '../assets/bg-0.jpg';
function Home() {
  return (
    <section
      className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
    >
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Enriching Childhoods at Morinville Childcare</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Explore a world of wonder and learning at Morinville Childcare. Dedicated to nurturing young minds, we offer a safe and stimulating environment where children can play, learn, and grow together. Discover how we combine fun activities with personalized care to support every child's development journey</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href='https://web.timesavr.net/registration.php?cid=1767' class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-500">
            Register Now
            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Learn more
          </a>
        </div>
      </div>
    </section>

  );
}

export default Home;


