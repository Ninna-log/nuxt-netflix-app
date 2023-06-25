import { Show } from "./Show";

export type APIResponse = {
  page: number;
  results: Show[];
  total_pages: number;
  total_results: number;
};
