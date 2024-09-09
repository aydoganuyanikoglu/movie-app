const Reduce = (state,action) => {
    switch(action.type){
        case 'FETCH_MOVIES':
            return{...state,movieList: action.payload,filteredMovieList:action.payload};

        case 'FILTER_MOVIES':
            const filteredMovieList = state.movieList.filter((movie) => 
            movie.title.toLowerCase().includes(action.payload.toLowerCase()))
            return{...state,filteredMovieList,filter:action.payload};

        default:
            return state;
    }
}

export default Reduce;