import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">Get in Touch</h1>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-300 leading-relaxed">
        Feel free to reach out via email, LinkedIn, or phone. I’d be happy to connect and discuss your ideas or projects.
      </p>

      <div className="mt-8 space-y-6">
        {/* Email */}
        <div className="flex items-center space-x-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m8 0l-8-8m8 8l-8 8"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">Email</h2>
            <a
              href="mailto:773.ushnaazhar@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              773.ushnaazhar@gmail.com
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8a6 6 0 00-12 0v8a6 6 0 0012 0V8z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/ushna-shaikh-a30061333/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
             Linkedin
            </a>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center space-x-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8a9 9 0 0118 0v8a9 9 0 01-18 0V8z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">Phone</h2>
            <a
              href="tel:+92 313 2759338"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              +92 313 2759338
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
