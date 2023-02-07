import { topRatedMoviesStateType,topRatedMovieType,RootObject  } from "@/types/topRatedMoviesTypes";
import { Commit } from "vuex";
import axios from "axios";

export const topRatedMoviesModule= {
    state: (): topRatedMoviesStateType => ({
        topRatedMovies: [],
        searchQuery: '',
        totalPage: new Number,
        currentPage: 1
    }),
    getters: {
        getTopRatedMovies(state: topRatedMoviesStateType): topRatedMovieType[] {
            return state.topRatedMovies
        },
        getSearchedMovies(state: topRatedMoviesStateType, getters: any): topRatedMovieType[] {
            return getters.getTopRatedMovies.filter((movie: topRatedMovieType): boolean => movie.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setTopRatedMovies(state: topRatedMoviesStateType , movies: topRatedMovieType[]): void {
            state.topRatedMovies = movies;
        },
        setSearchQuery(state: topRatedMoviesStateType, searchQuery: string): void {
            state.searchQuery = searchQuery
        },
        setTotalPage(state: topRatedMoviesStateType, totalPage: Number): void{
            state.totalPage = totalPage
        },
        setCurrentPage(state: topRatedMoviesStateType, page: Number): void{
            state.currentPage = page;
        }
    },
    actions: {
        async fetchTopRatedMovies({state,commit}: {state: topRatedMoviesStateType, commit: Commit}): Promise<void> {
            try {
                const response = await axios.get<RootObject>(`https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${state.currentPage}`)
                commit("setTopRatedMovies", response.data.results);
                commit("setTotalPage", response.data.total_pages)
            } catch (error) {
                console.log(error)
            }
        }    
    },
    namespaced: true
}