import { reactive } from "vue";
import * as api from "../services/api";
import { CategoryShow } from "types/CategoryShow";

export const store = reactive({
  categories: [] as CategoryShow[],

  async getCategories(): Promise<CategoryShow[]> {
    if (this.categories?.length > 0) {
      return this.categories;
    }

    const [
      trendingMoviesResponse,
      tvShowsResponse,
      moviesResponse,
      popularMoviesResponse,
      trendingShowsByActorResponse,
    ] = await Promise.all([
      api.getTrendingMovies(),
      api.getTrendingTvShows(),
      api.getMovies(),
      api.getPopularMovies(),
      api.getTrendingShowsByActor(),
    ]);

    const trendingMovies: CategoryShow = {
      name: "Trending Movies: ",
      results: trendingMoviesResponse,
    };

    const tvShows: CategoryShow = {
      name: "Trending TV Shows: ",
      results: tvShowsResponse,
    };

    const movies: CategoryShow = {
      name: "Top Rated Tv/Movies: ",
      results: moviesResponse,
    };

    const popularMovies: CategoryShow = {
      name: "Popular Movies: ",
      results: popularMoviesResponse,
    };

    const trendingShowsByActor: CategoryShow = {
      name: "Trending Tv/Movies by Actors: ",
      results: trendingShowsByActorResponse,
    };

    store.categories = [
      movies,
      trendingMovies,
      tvShows,
      popularMovies,
      trendingShowsByActor,
    ];

    return this.categories;
  },
});
