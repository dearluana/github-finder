import { Dispatch, SetStateAction } from "react";
import { GithubInterface } from "./github";

export interface HomeContextInterface {
  github: GithubInterface | null;
  search: string;
  handleSearch: Dispatch<SetStateAction<string>>;
}
