import React from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaBook } from 'react-icons/fa';
import { BiGitRepoForked } from 'react-icons/bi';
import { HiOutlineExternalLink } from 'react-icons/hi';

const OpenSource = () => {
  return (
    <div className="mt-8 sm:mt-16 pt-12 sm:pt-20 pb-4 text-white w-full bg-gray-900 min-h-[100vh]">
      <div className="flex flex-col items-center space-y-8 sm:space-y-10 justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Open Source
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl">
            Explore our codebase and contribute to the future of decentralized smart wallets
          </p>
        </div>

        {/* Main Repository Card */}
        <div className="w-full max-w-3xl bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <FaGithub className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl sm:text-2xl font-semibold">Abstracto</h2>
            </div>
            <a
              href="https://github.com/blockfuselabs/abstracto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#BF64E7] hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg"
            >
              <span>View on GitHub</span>
              <HiOutlineExternalLink className="w-4 h-4" />
            </a>
          </div>

          <p className="text-gray-300 mb-6">
            A modern web3 wallet solution that enables users to create and manage their blockchain wallets using social authentication as well as Account Abstraction.
          </p>

          {/* Repository Stats */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center space-x-2 text-gray-400">
              <FaStar className="w-4 h-4" />
              <span>Stars: 1</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <BiGitRepoForked className="w-4 h-4" />
              <span>Forks: 0</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaCodeBranch className="w-4 h-4" />
              <span>Latest Release: v1.0.0</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['Solidity', 'React', 'ThirdWeb', 'Tailwind CSS', 'Ethereum', 'TypeScript'].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          <a
            href="https://github.com/blockfuselabs/abstracto/blob/frontend/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gray-800/30 hover:bg-gray-800/50 transition-colors p-4 rounded-lg"
          >
            <FaBook className="w-5 h-5 text-purple-400" />
            <span>Documentation</span>
          </a>
          <a
            href="https://github.com/blockfuselabs/abstracto/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gray-800/30 hover:bg-gray-800/50 transition-colors p-4 rounded-lg"
          >
            <FaGithub className="w-5 h-5 text-purple-400" />
            <span>Issues</span>
          </a>
          <a
            href="https://github.com/blockfuselabs/abstracto/pulls"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gray-800/30 hover:bg-gray-800/50 transition-colors p-4 rounded-lg"
          >
            <BiGitRepoForked className="w-5 h-5 text-purple-400" />
            <span>Pull Requests</span>
          </a>
        </div>

        {/* Contributing Section */}
        <div className="w-full max-w-3xl bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold mb-4">How to Contribute</h3>
          <div className="space-y-4 text-gray-300">
            <p>We welcome contributions from the community! Here's how you can help:</p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>Fork the repository</li>
              <li>Create your feature branch</li>
              <li>Commit your changes</li>
              <li>Push to the branch</li>
              <li>Open a Pull Request</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;