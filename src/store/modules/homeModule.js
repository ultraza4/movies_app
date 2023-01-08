import axios from "axios";

export const homeModule = {
    state: () => ({
        movies: {},
        bannerMovie: {},
    }),
    getters: {
        getMovies(state) {
            return state.movies
        },
        getBannerMovie(state) {  
            return state.bannerMovie;
        }
    },
    mutations: {
        setMovies(state, movies) {
            state.movies = movies;
        },
        setBannerMovie(state,bannerMovie) {
            state.bannerMovie = bannerMovie;
        },
    },
    actions: {
        async fetchMovies({state,commit}) {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
                commit("setMovies", response.data.results);
                commit('setBannerMovie', state.movies[Math.floor(Math.random() *(state.movies.length - 1))])
            } catch (error) {
                console.log(error)
            }
        },
        // getRandomInt(min, max) {
        //     return Math.floor(Math.random() * (max - min) + min)
        // },
        
    },
    namespaced: true
}