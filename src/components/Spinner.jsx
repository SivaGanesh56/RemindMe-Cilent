import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import { useData } from '../contexts/DataContext';
import { useAuth } from '../contexts/AuthContext';


const Spinner = () => {

    const [state] = useData();

    const { loading } = useAuth();

    return (
        <div  className="loader">
            <FadeLoader
                color="black"
                loading={state?.isLoading || loading }
                margin={18}
                radius={10}
                width={10}
                height={20}
            />
        </div>
    );
}

export default Spinner;
