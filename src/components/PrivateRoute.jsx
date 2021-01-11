import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {

                switch(true) {
                    case currentUser && currentUser.emailVerified:
                        return <Component {...props} />;
                    
                    case currentUser && !currentUser.emailVerified: 
                        return <Redirect to="/verify-email" />;
                    
                    default:
                        return <Redirect to="/login" />;
                }
            }}
        >

        </Route>
    );
}

export default PrivateRoute;
