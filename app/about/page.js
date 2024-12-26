// pages/about.js
import Head from 'next/head';

const page = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md flex flex-col md:flex-row gap-8">
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about my expertise and journey in IT, Generative AI, and Cloud." />
      </Head>
      
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img 
          src="/pfp.jpg" 
          alt="My Profile" 
          className="w-56 h-56 object-cover rounded-full shadow-md"
        />
      </div>

      {/* Content Section */}
      <div>
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">About Me</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          Hello! I'm a passionate and driven IT professional specializing in UI/UX design, Frontend Development, Web Development, Generative AI, and Cloud Computing. 
          My journey in the tech world has been fueled by a commitment to creating innovative and user-focused solutions.
        </p>

        <h2 className="mt-8 text-3xl font-semibold text-gray-700 dark:text-gray-200">My Expertise</h2>
        <ul className="mt-4 text-gray-600 dark:text-gray-400 list-disc list-inside">
          <li>
            <strong>UI/UX Design:</strong> Crafting intuitive and engaging user experiences that bridge the gap between aesthetics and functionality.
          </li>
          <li>
            <strong>Frontend Development:</strong> Building responsive, high-performance web interfaces using modern frameworks and technologies.
          </li>
          <li>
            <strong>Generative AI:</strong> Leveraging AI to create intelligent, data-driven systems that drive innovation and automation.
          </li>
          <li>
            <strong>Cloud Computing:</strong> Designing scalable and secure cloud-based solutions to meet the demands of modern applications.
          </li>
        </ul>

        <h2 className="mt-8 text-3xl font-semibold text-gray-700 dark:text-gray-200">Education</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          I have had the privilege of advancing my skills through prestigious educational opportunities, including a specialized IT program hosted at the Governor's House. 
          This experience has enriched my knowledge in cutting-edge technologies and empowered me to excel in my field.
        </p>

        <h2 className="mt-8 text-3xl font-semibold text-gray-700 dark:text-gray-200">Vision & Goals</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          My vision is to innovate and lead in the tech industry by delivering solutions that positively impact lives. I aim to combine creativity, technology, and a 
          customer-centric approach to shape a future where technology is seamlessly integrated into everyday life.
        </p>
      </div>
    </div>
  );
};

export default page;
