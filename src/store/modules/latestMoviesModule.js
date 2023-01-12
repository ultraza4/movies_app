import axios from "axios";

export const latestMoviesModule = {
    state: () => ({
        latestMovies: {},
        totalPage: Number,
        currentPage: 1
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
        setTotalPage(state, totalPage){
            state.totalPage = totalPage
        },
        setCurrentPage(state, page){
            state.currentPage = page;
        }
    },
    actions: {
        async fetchLatestMovies({state,commit}) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${state.currentPage}`)
                commit("setLatestMovies", response.data.results);
                commit("setTotalPage", response.data.total_pages);
                console.log(state.currentPage)
            } catch (error) {
                console.log(error)
            }
        },    
    },
    namespaced: true
}