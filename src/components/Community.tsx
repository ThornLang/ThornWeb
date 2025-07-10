import React from 'react';
import { Github, MessageCircle, Users, BookOpen, Star, GitFork } from 'lucide-react';
import { useGitHubStats, useGitHubContributors } from '../hooks/useGitHubStats';

const Community: React.FC = () => {
  const githubStats = useGitHubStats('ThornLang', 'JavaThorn');
  const { contributors } = useGitHubContributors('ThornLang', 'JavaThorn');

  const communityLinks = [
    {
      icon: Github,
      title: 'GitHub',
      description: 'Contribute to the Thorn project',
      link: 'https://github.com/ThornLang/JavaThorn',
      color: 'bg-gray-900 hover:bg-gray-800'
    },
    {
      icon: MessageCircle,
      title: 'Issues',
      description: 'Report bugs and request features',
      link: 'https://github.com/ThornLang/JavaThorn/issues',
      color: 'bg-indigo-600 hover:bg-indigo-700'
    },
    {
      icon: Users,
      title: 'Forums',
      description: 'Ask questions and share knowledge',
      link: 'https://github.com/ThornLang/JavaThorn/discussions',
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Complete language reference',
      link: 'https://github.com/ThornLang/JavaThorn/wiki',
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <section id="community" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join the Thorn Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect with developers, contribute to the project, and help shape the future of Thorn.
          </p>
        </div>

        {/* Community Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-xl text-white transition-all duration-300 transform hover:scale-105 ${link.color}`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <link.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
              <p className="text-white/80 text-sm">{link.description}</p>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="w-6 h-6 text-yellow-500" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {githubStats.loading ? '...' : githubStats.stars.toLocaleString()}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">GitHub Stars</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <GitFork className="w-6 h-6 text-blue-500" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {githubStats.loading ? '...' : githubStats.forks.toLocaleString()}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Forks</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Users className="w-6 h-6 text-purple-500" />
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {githubStats.loading ? '...' : githubStats.contributors.toLocaleString()}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Contributors</p>
          </div>
        </div>

        {/* Core Contributors */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Core Contributors
          </h3>
          {contributors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contributors.slice(0, 4).map((contributor) => (
                <a
                  key={contributor.login}
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center hover:transform hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {contributor.login}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {contributor.contributions} contributions
                  </p>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Loading contributors...</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Contribute?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you're fixing bugs, adding features, or improving documentation, 
            every contribution helps make Thorn better for everyone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://github.com/ThornLang/JavaThorn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </a>
            <a
              href="https://github.com/ThornLang/JavaThorn/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
            >
              <BookOpen size={20} />
              <span>Contributing Guide</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;