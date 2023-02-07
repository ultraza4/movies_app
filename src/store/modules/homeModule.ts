import { PopularMovieType ,homeStateType,RootObject } from "@/types/popularMoviesTypes";
import { Commit } from 'vuex';
import axios from "axios";

export const homeModule = {
    state: () :homeStateType => ({
        popularMovies: [],
        bannerMovie: {} as PopularMovieType,
    }),
    getters: {
        getPopularMovies(state: homeStateType): PopularMovieType[] {
            return state.popularMovies
        },
        getBannerMovie(state: homeStateType): PopularMovieType {  
            return state.bannerMovie;
        }
    },
    mutations: {
        setPopularMovies(state: homeStateType, movies: Array<PopularMovieType>) {
            state.popularMovies = movies;
        },
        setBannerMovie(state: homeStateType, bannerMovie: PopularMovieType) {
            state.bannerMovie = bannerMovie;
        },
    },
    actions: {
        async fetchPopularMovies({state,commit}: {state: homeStateType,commit: Commit } ): Promise<void> {
            try {
                const response = await axios.get<RootObject>('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
                commit("setPopularMovies", response.data.results);
                commit('setBannerMovie', state.popularMovies[Math.floor(Math.random() *(state.popularMovies.length - 1))])
            } catch (error) {
                console.log(error)
            }
        },        
    },
    namespaced: true
}