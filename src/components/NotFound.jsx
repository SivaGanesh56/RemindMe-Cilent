import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const NotFound = () => {

    // TODO: add icon instead of !!!!

    return (
        <>
        <Jumbotron>
            <h1>oops!!!!</h1>
            <p>
                The Page you requested doesn't exist
            </p>
        </Jumbotron>
        </>
    );
}

export default NotFound;
