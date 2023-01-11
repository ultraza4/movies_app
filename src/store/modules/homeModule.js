import axios from "axios";

export const homeModule = {
    state: () => ({
        popularMovies: {},
        bannerMovie: {},
    }),
    getters: {
        getPopularMovies(state) {
            return state.popularMovies
        },
        getBannerMovie(state) {  
            return state.bannerMovie;
        }
    },
    mutations: {
        setPopularMovies(state, movies) {
            state.popularMovies = movies;
        },
        setBannerMovie(state,bannerMovie) {
            state.bannerMovie = bannerMovie;
        },
    },
    actions: {
        async fetchPopularMovies({state,commit}) {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
                commit("setPopularMovies", response.data.results);
                commit('setBannerMovie', state.popularMovies[Math.floor(Math.random() *(state.popularMovies.length - 1))])
            } catch (error) {
                console.log(error)
            }
        },        
    },
    namespaced: true
}