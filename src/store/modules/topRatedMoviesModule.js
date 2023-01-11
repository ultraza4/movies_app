import axios from "axios";

export const topRatedMoviesModule = {
    state: () => ({
        topRatedMovies: {},
    }),
    getters: {
        getTopRatedMovies(state) {
            return state.popularMovies
        }
    },
    mutations: {
        setTopRatedMovies(state, movies) {
            state.topRatedMovies = movies;
        }
    },
    actions: {
        async fetchTopRatedMovies({state,commit}) {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
                commit("setTopRatedMovies", response.data.results);
            } catch (error) {
                console.log(error)
            }
        }    
    },
    namespaced: true
}