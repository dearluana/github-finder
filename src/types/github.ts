export interface GithubInterface {
  login: string;
  avatar_url: string;
  blog?: string;
  location?: string;
  name: string;
  bio?: string;
  public_repos: number;
  followers: number;
  following: number;
  created: string;
}
