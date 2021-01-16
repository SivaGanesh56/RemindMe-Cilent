const Reducer = (state, action) => {
    switch (action.type) {
        case 'setLoading':
            return {
                ...state,
                isLoading: action.payload 
            };
       
        default:
            return state;
    }
};

export default Reducer;