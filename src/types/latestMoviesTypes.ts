
export type Dates = {
   maximum: string;
   minimum: string;
}

export type LatestMovieType = {
   adult: boolean;
   backdrop_path: string;
   genre_ids: number[];
   id: number;
   original_language: string;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   release_date: string;
   title: string;
   video: boolean;
   vote_average: number;
   vote_count: number;
}

export type LatestMoviesRootObject = {
   dates: Dates;
   page: number;
   results: LatestMovieType[];
   total_pages: number;
   total_results: number;
}

export type LatestMoviesStateType = {
   latestMovies: LatestMovieType[];
   totalPage: Number;
   currentPage: Number;
}
