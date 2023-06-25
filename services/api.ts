import axios from "axios";
import { APIResponse } from "~/types/APIResponse";

export const getMovies = async () => {
  const response = await axios.get(`/api/all/discover`);
  return response.data.results;
};

export const getItemByQuery = async (item: string) => {
  const response = await axios.get(`/api/all/search?query=${item}`);
  return response.data;
};

export const getItemById = async (id: string) => {
  const response = await axios.get(`/api/all/${id}`);
  return response.data;
};

export const getPosterImg = async (path: string) => {
  const config = useRuntimeConfig();
  const response = await axios.get(
    path
      ? `${config.public.imgBaseUrl}/${path}`
      : "https://via.placeholder.com/300x500"
  );
  return response.data;
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`/api/movie/trending`);
  return response.data.results;
};

/* TV */

export const getTrendingTvShows = async () => {
  const response = await axios.get(`/api/tv/trending`);
  return response.data.results;
};

export const getPopularMovies = async () => {
  const response = await axios.get(`api/person/popular`);
  return response.data.results;
};

export const getTrendingShowsByActor = async () => {
  const response = await axios.get(`/api/person/trending`);
  return response.data.results;
};
