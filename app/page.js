'use client';
import { useState } from 'react';

/**
 * Page component that serves as the main entry point for the application.
 * It contains sections for a title, description, search form, an image, 
 * an expertise section showcasing different roles, and a review section.
 * 
 * @returns {JSX.Element} The rendered Page component.
 */
export default function Page() {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (boxNumber) => {
    setActiveBox(boxNumber);
  };

  return (
    <main>
      {/* Hero Section with Background and CTA */}
      <section className="relative bg-cover bg-center h-[600px] text-white flex items-center justify-center" style={{ backgroundImage: 'url("https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center px-4 md:px-0">
          <h1 className="text-4xl font-bold leading-snug md:text-5xl animate-fadeIn animate-duration-1000 animate-ease-in-out">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using{' '}
            <span className="font-semibold underline decoration-primary">Tailwind CSS</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 animate-fadeIn animate-duration-1000 animate-delay-200 animate-ease-in-out">
            Open source Tailwind UI components and templates to bootstrap your new apps, projects, or landing sites!
          </p>
          <div className="mt-6 flex justify-center gap-4 animate-fadeIn animate-duration-1000 animate-delay-400 animate-ease-in-out">
            <button className="px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg text-lg transition duration-300">
              Start Now
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-violet-500 hover:bg-violet-500 text-violet-500 hover:text-white rounded-lg text-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Section with Icons and Alternative Background */}
      <section className="container mx-auto px-4 py-10 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6 animate-fadeIn animate-duration-1000 animate-delay-1000 animate-ease-in-out">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Web Developer Box with Icon */}
          <div
            className={`p-6 bg-gradient-to-r from-gray-800 to-gray-500 text-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn animate-duration-1000 animate-delay-1200 animate-ease-in-out ${activeBox === 1 ? 'border-4 border-violet-500' : ''}`}
            onClick={() => handleBoxClick(1)}
          >
            <div className="text-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-violet-500 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-center">Web Developer</h3>
            <p className="mt-2">
              Building responsive, fast, and user-friendly websites. Expertise in backend integration, modern frameworks, and seamless performance optimization.
            </p>
            <p className="mt-2 text-sm">
              Services: Full-stack development, API integration, performance optimization.
            </p>
          </div>

          {/* UI/UX Designer Box with Icon */}
          <div
            className={`p-6 bg-gradient-to-r from-gray-800 to-gray-500 text-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn animate-duration-1000 animate-delay-1400 animate-ease-in-out ${activeBox === 2 ? 'border-4 border-violet-500' : ''}`}
            onClick={() => handleBoxClick(2)}
          >
            <div className="text-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-violet-500 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-center">UI/UX Designer</h3>
            <p className="mt-2">
              Crafting intuitive and visually appealing designs. Focused on user-centric solutions, wireframing, and prototyping for a smooth user experience.
            </p>
            <p className="mt-2 text-sm">
              Services: User research, wireframing, prototyping, usability testing.
            </p>
          </div>

          {/* Frontend Developer Box with Icon */}
          <div
            className={`p-6 bg-gradient-to-r from-gray-800 to-gray-500 text-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn animate-duration-1000 animate-delay-1600 animate-ease-in-out ${activeBox === 3 ? 'border-4 border-violet-500' : ''}`}
            onClick={() => handleBoxClick(3)}
          >
            <div className="text-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-violet-500 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4v16h18V4H3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-center">Frontend Developer</h3>
            <p className="mt-2">
              Specializing in creating interactive, dynamic, and responsive interfaces. Proficient in React, Tailwind CSS, and modern JavaScript ecosystems.
            </p>
            <p className="mt-2 text-sm">
              Services: Component development, responsive design, performance optimization.
            </p>
          </div>
        </div>
      </section>

  


      {/* Review Section with Alternative Grey Background */}
      <section className="container mx-auto px-4 py-10 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200  mb-6 animate-fadeIn animate-duration-1000 animate-delay-1000 animate-ease-in-out">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Review Box 1 with Hover Effect */}
          <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-500 text-white rounded-lg shadow-md hover:scale-105 transform transition duration-300">
            <h3 className="text-lg font-semibold">John Doe</h3>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="mt-2">
              "The components provided are fantastic! They saved me a lot of time in my project."
            </p>
          </div>

          {/* Review Box 2 with Hover Effect */}
          <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-500 text-white rounded-lg shadow-md hover:scale-105 transform transition duration-300">
            <h3 className="text-lg font-semibold">Jane Smith</h3>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">★★★★☆</span>
            </div>
            <p className="mt-2">
              "Great design and easy to use. I highly recommend these components!"
            </p>
          </div>

          {/* Review Box 3 with Hover Effect */}
          <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-500 text-white rounded-lg shadow-md hover:scale-105 transform transition duration-300">
            <h3 className="text-lg font-semibold">Alice Johnson</h3>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="mt-2">
              "Excellent quality and support. Will definitely use again!"
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
