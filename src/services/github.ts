import { GithubInterface } from "types/github";

export const fetchGithub = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    return null;
  }
  return (await response.json()) as GithubInterface;
};
