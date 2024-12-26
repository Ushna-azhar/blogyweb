import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 bg-gray-100 dark:bg-gray-900 p-6">
     
      <div className="border-t-4 border-violet-500"></div>

      {/* Content */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-gray-700 dark:text-gray-300 text-center sm:text-left">
          © 2024 Ushna Shaikh. All rights reserved.
        </p>

        {/* Icons */}
        <div className="flex space-x-6 mt-4 sm:mt-0">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ushna-shaikh-a30061333/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.732-.767-1.732-1.732s.766-1.732 1.732-1.732 1.732.767 1.732 1.732-.766 1.732-1.732 1.732zm13.5 12.268h-3v-5.604c0-1.339-.027-3.065-1.867-3.065-1.868 0-2.156 1.459-2.156 2.966v5.703h-3v-11h2.881v1.503h.041c.4-.755 1.375-1.551 2.836-1.551 3.034 0 3.594 1.996 3.594 4.591v6.457z" />
            </svg>
          </a>

          {/* Phone */}
          <a
            href="tel:+923351376925"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400"
            aria-label="Phone"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 18h-6v-2h6v2zm3.426-5h-12.426v-2h12.426v2z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:773.ushnaazhar@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.293l-11.293-11.293h22.586l-11.293 11.293zm-11.293 1.707v7h22v-7l-11 11-11-11z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourgithubprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.838 1.24 1.838 1.24 1.07 1.835 2.807 1.305 3.492.998.108-.775.419-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.003-.404 1.02.006 2.047.138 3.005.404 2.289-1.553 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.769.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.62-5.479 5.92.43.37.824 1.1.824 2.22 0 1.604-.014 2.896-.014 3.293 0 .322.218.694.824.577 4.765-1.588 8.205-6.085 8.205-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
