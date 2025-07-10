import { useState, useEffect } from 'react';

interface GitHubStats {
  stars: number;
  forks: number;
  contributors: number;
  loading: boolean;
  error: string | null;
}

interface GitHubContributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export const useGitHubStats = (owner: string, repo: string): GitHubStats => {
  const [stats, setStats] = useState<GitHubStats>({
    stars: 0,
    forks: 0,
    contributors: 0,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setStats(prev => ({ ...prev, loading: true, error: null }));

        // Fetch repository data
        const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!repoResponse.ok) {
          throw new Error('Failed to fetch repository data');
        }
        const repoData = await repoResponse.json();

        // Fetch contributors data
        const contributorsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`);
        let contributorsCount = 0;
        if (contributorsResponse.ok) {
          const contributorsData = await contributorsResponse.json();
          contributorsCount = Array.isArray(contributorsData) ? contributorsData.length : 0;
        }

        setStats({
          stars: repoData.stargazers_count || 0,
          forks: repoData.forks_count || 0,
          contributors: contributorsCount,
          loading: false,
          error: null
        });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        setStats({
          stars: 0,
          forks: 0,
          contributors: 0,
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    };

    fetchGitHubData();
  }, [owner, repo]);

  return stats;
};

export const useGitHubContributors = (owner: string, repo: string) => {
  const [contributors, setContributors] = useState<GitHubContributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=4`);
        if (!response.ok) {
          throw new Error('Failed to fetch contributors');
        }

        const data = await response.json();
        setContributors(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching contributors:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
        setContributors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, [owner, repo]);

  return { contributors, loading, error };
};