import React from 'react';
import { Command, Wallet, Shield, Zap, GitBranch, Clock, Key, Share2 } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
    <div className="flex items-center space-x-4 mb-4">
      <div className="p-3 bg-purple-500/20 rounded-lg">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Features = () => {
  const cliFeatures = [
    {
      icon: Command,
      title: "Powerful CLI Interface",
      description: "Intuitive command-line interface for seamless account abstraction development and deployment."
    },
    {
      icon: GitBranch,
      title: "Smart Contract Generation",
      description: "Automatically generate and deploy account abstraction smart contracts with built-in best practices."
    },
    {
      icon: Clock,
      title: "Rapid Development",
      description: "Accelerate your development process with pre-built templates and automated workflows."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security features and automated auditing tools to ensure your smart contracts are secure."
    }
  ];

  const walletFeatures = [
    {
      icon: Wallet,
      title: "Smart Account Management",
      description: "Advanced wallet functionality with social recovery and multi-signature capabilities."
    },
    {
      icon: Zap,
      title: "Gas Optimization",
      description: "Efficient gas management and transaction batching for cost-effective operations."
    },
    {
      icon: Key,
      title: "Social Authentication",
      description: "Seamless authentication using social accounts while maintaining security and decentralization."
    },
    {
      icon: Share2,
      title: "Multi-Chain Support",
      description: "Deploy and manage smart wallets across multiple blockchain networks."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="max-w-7xl py-6 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
            Powerful Features for Modern Web3
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how Abstracto simplifies account abstraction with our powerful CLI tools and smart wallet solutions.
          </p>
        </div>

        {/* CLI Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Abstracto AA CLI</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building and deploying account abstraction solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cliFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Smart Wallet Features Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Abstracto AA Smart Wallet</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Next-generation wallet infrastructure powered by account abstraction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {walletFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex space-x-4">
            <a 
              href="https://github.com/blockfuselabs/abstracto"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started with CLI
            </a>
            <a
              href="https://github.com/yourusername/abstracto-wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Smart Wallet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;