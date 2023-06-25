export type Show = {
  id: number;
  title: string;
  genres: {
    id: number;
    name: string;
  }[];
  release_date: string;
  runtime: number | null;
  overview: string;
  poster_path?: string;
  profile_path?: string;
};
