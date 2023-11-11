import React from 'react';

const Step = ({ index, accomplished }) => (
  <li
    className={`flex w-full items-center ${
      accomplished
        ? 'text-blue-600 dark:text-blue-500 after:content-[""] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800'
        : 'text-gray-500 dark:text-gray-400 after:content-[""] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-4 after:inline-block dark:after:border-gray-700'
    }`}
  >
    <span
      className={`flex items-center justify-center w-10 h-10 bg-${
        accomplished ? 'blue' : 'gray'
      }-100 rounded-full lg:h-12 lg:w-12 dark:bg-${
        accomplished ? 'blue' : 'gray'
      }-800 shrink-0`}
    >
      {accomplished ? (
        <svg
          className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
      ) : (
        <span className="text-xs font-bold text-gray-500 dark:text-gray-100">
          {index + 1}
        </span>
      )}
    </span>
  </li>
);

const ProgressBar = ({ totalSteps, currentStep }) => {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {steps.map((index) => (
        <Step
          key={index}
          index={index}
          accomplished={index < currentStep}
        />
      ))}
    </ol>
  );
};

export default ProgressBar;
