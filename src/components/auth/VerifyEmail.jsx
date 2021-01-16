import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useData } from '../../contexts/DataContext';
import Layout from './Layout';

const VerfiyEmail = () => {

    // TODO: Add respective icons before text

    const { currentUser, verifyEmail } = useAuth();
    const [, dispatch] = useData();
    const { emailVerified = false } = currentUser || {};

    const [error, setError] = useState('');

    const resendVerifyMail =  async () => {
        setError('');
        dispatch({ type: 'setLoading', payload: true });
        try {
            await verifyEmail();
        } catch (error) {
            setError('Failed to send verification mail');
        }

        dispatch({ type: 'setLoading', payload: false });

    }

    return (
        <Layout>
            { error && <Alert variant="danger">{error}</Alert> }
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
               <Button variant="link"onClick={resendVerifyMail} > Resend Verification Mail</Button> | <Button variant="link"><Link to="/login"> Log In</Link> </Button>
            </div>
        </Layout>
    );
}

export default VerfiyEmail;
