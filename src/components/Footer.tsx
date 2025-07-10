import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ThornLang/JavaThorn', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/brodycritchlow', label: 'Twitter' },
    { icon: Mail, href: 'mailto:brodycritchlw@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Documentation', href: 'https://github.com/ThornLang/JavaThorn/wiki' },
    { name: 'Tutorial', href: 'https://github.com/ThornLang/JavaThorn/wiki/Tutorial' },
    { name: 'Examples', href: 'https://github.com/ThornLang/JavaThorn/tree/main/examples' },
    { name: 'Releases', href: 'https://github.com/ThornLang/JavaThorn/releases' }
  ];

  const resourceLinks = [
    { name: 'Language Reference', href: 'https://github.com/ThornLang/JavaThorn/wiki/Language-Reference' },
    { name: 'Standard Library', href: 'https://github.com/ThornLang/JavaThorn/wiki/Standard-Library' },
    { name: 'Issues', href: 'https://github.com/ThornLang/JavaThorn/issues' },
    { name: 'Discussions', href: 'https://github.com/ThornLang/JavaThorn/discussions' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="text-2xl font-light mb-4">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-angelos transform -skew-x-3" style={{ letterSpacing: '0.02em', fontWeight: '300' }}>
                Thorn
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              A modern language blending functional elegance with practical simplicity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get the latest news and updates about ThornLang.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Thorn. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;