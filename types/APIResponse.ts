import { Item } from "./Item";

export type APIResponse = {
  page: number;
  results: Item[];
  total_pages: number;
  total_results: number;
};
