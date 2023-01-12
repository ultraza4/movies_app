import axios from "axios";

export const latestMoviesModule = {
    state: () => ({
        latestMovies: {},
    }),
    getters: {
        getLatestMovies(state) {  
            return state.latestMovies;
        }
    },
    mutations: {
        setLatestMovies(state,movies) {
            state.latestMovies = movies;
        },
    },
    actions: {
        async fetchLatestMovies({state,commit}) {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
                commit("setLatestMovies", response.data.results);
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        },    
    },
    namespaced: true
}