import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const Documentation = () => {
  const [copied, setCopied] = useState({ first: false, second: false });

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied((prev) => ({ ...prev, [key]: true }));

    // Reset icon back to copy after a short delay
    setTimeout(() => {
      setCopied((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <div className="mt-8 sm:mt-16 pt-12 sm:pt-20 pb-4 text-white w-full bg-gray-900 min-h-[100vh]">
      <div className="flex flex-col items-center space-y-4 sm:space-y-5 justify-center px-4 sm:px-6 lg:px-8">
        {/* Documentation Header */}
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Documentation</h1>

        {/* Main Description */}
        <p className="text-base sm:text-xl w-full sm:w-4/5 lg:w-3/5 pt-4 sm:pt-8 text-center">
          Abstractor is a powerful command-line development environment designed
          to simplify and streamline the implementation of account abstraction
          in blockchain applications. By leveraging account abstraction,
          abstractor enables developers to create more flexible and user-centric
          transaction systems, breaking free from traditional account
          constraints. With a suite of tools for managing smart contracts,
          customizing wallet interactions, and optimizing transaction flows,
          abstractor makes it easier to build secure, scalable, and efficient
          blockchain solutions.
        </p>

        {/* Installation Section */}
        <h1 className="font-extrabold text-2xl sm:text-3xl mt-8 sm:mt-12">Installation</h1>

        <p className="p-2 sm:p-4 text-base sm:text-xl text-center">
          To get started, you have to install Abstracto using your command line.
        </p>

        {/* First Command Snippet */}
        <div className="border bg-slate-100 py-2 px-4 w-full sm:w-3/4 lg:w-2/4 mt-2 sm:mt-4 rounded-xl mx-4 flex items-center justify-between">
          <span className="text-slate-800 text-base sm:text-lg">npm install @nextui-org/react</span>
          <button
            onClick={() => handleCopy("npm install @nextui-org/react", "first")}
            className="ml-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            {copied.first ? <FiCheck /> : <FiCopy />}
          </button>
        </div>

        {/* Second Command Instructions */}
        <p className="p-2 sm:p-4 text-base sm:text-xl text-center">
          To initialize a new Abstracto project, run this command on your terminal:
        </p>

        {/* Second Command Snippet */}
        <div className="border bg-slate-100 py-2 px-4 w-full sm:w-3/4 lg:w-2/4 mt-2 sm:mt-4 rounded-xl mx-4 flex items-center justify-between">
          <span className="text-slate-800 text-base sm:text-lg">abstracto init &lt;project-name&gt;</span>
          <button
            onClick={() => handleCopy("abstracto init <project-name>", "second")}
            className="ml-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            {copied.second ? <FiCheck /> : <FiCopy />}
          </button>
        </div>

        {/* Final Note */}
        <p className="text-base sm:text-lg text-center mt-2 sm:mt-4">
          This will create a new Abstracto project.
        </p>
      </div>
    </div>
  );
};

export default Documentation;
