import React, { createContext, useReducer, useContext } from 'react';
import Reducer from './Reducer';

const initialState = {
    isLoading: false,
};

const DataContext = createContext(initialState);

export function useData() {
    return useContext(DataContext);
}

const Store = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>
    );
}


export default Store;
