import { LatestMoviesStateType,LatestMovieType,LatestMoviesRootObject } from "@/types/latestMoviesTypes";
import { Commit } from "vuex";
import axios from "axios";

export const latestMoviesModule = {
    state: (): LatestMoviesStateType => ({
        latestMovies: [],
        totalPage: new Number,
        currentPage: 1
    }),
    getters: {
        getLatestMovies(state: LatestMoviesStateType) {  
            return state.latestMovies;
        }
    },
    mutations: {
        setLatestMovies(state: LatestMoviesStateType,movies: LatestMovieType[]): void {
            state.latestMovies = movies;
        },
        setTotalPage(state: LatestMoviesStateType, totalPage: Number): void{
            state.totalPage = totalPage
        },
        setCurrentPage(state: LatestMoviesStateType, page: number): void{
            state.currentPage = page;
        }
    },
    actions: {
        async fetchLatestMovies({state,commit}: {state: LatestMoviesStateType,commit: Commit }): Promise<void> {
            try {
                const response = await axios.get<LatestMoviesRootObject>(`https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${state.currentPage}`)
                commit("setLatestMovies", response.data.results);
                commit("setTotalPage", response.data.total_pages);
            } catch (error) {
                console.log(error)
            }
        },    
    },
    namespaced: true
}