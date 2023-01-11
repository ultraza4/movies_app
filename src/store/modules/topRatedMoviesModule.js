import axios from "axios";

export const topRatedMoviesModule = {
    state: () => ({
        topRatedMovies: {},
        searchQuery: ''
    }),
    getters: {
        getTopRatedMovies(state) {
            return state.popularMovies
        },
        getSearchedMovies(state, getters){
            return getters.getTopRatedMovies.filter(movie => movie.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setTopRatedMovies(state, movies) {
            state.topRatedMovies = movies;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
            console.log(state.searchQuery)
        }
    },
    actions: {
        async fetchTopRatedMovies({state,commit}) {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
                commit("setTopRatedMovies", response.data.results);
                console.log(state.topRatedMovies)
            } catch (error) {
                console.log(error)
            }
        }    
    },
    namespaced: true
}