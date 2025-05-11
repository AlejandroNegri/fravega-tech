export type User = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  name?: string;
  bio?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
  html_url?: string;
};

export type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
};
