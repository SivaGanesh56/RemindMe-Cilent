import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Layout from './Layout';

const VerfiyEmail = () => {

    // TODO: Add respective icons before text

    const { currentUser } = useAuth();

    const { emailVerified = false } = currentUser || {};

    return (
        <Layout>
            <Card>
                <Card.Body>
                    <div className="text-center mb-4">
                        {emailVerified ?
                            <>
                                <h2>You are already verified</h2>
                                <p>Please Login with our credentials</p>
                            </> :
                            <h2>Please Check Our Mail For Verification</h2>
                        }
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </Layout>
    );
}

export default VerfiyEmail;
