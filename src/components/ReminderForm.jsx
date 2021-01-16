import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Layout from './auth/Layout';
// import { useData } from '../contexts/DataContext';


const ReminderForm = (props) => {

    const [date, setDate] = useState(props.date);
    const [title, setTitle] = useState(props.title);
    const [message, setMessage] = useState(props.message);
    const [platform, setPlatform] = useState(props.platform || "email");
    const [details, setDetails] = useState(props.details);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    // const [state, dispatch] = useData();

    // const { userLogin = false } = state;

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');
        setLoading(true);

        try {
            // TODO: call api
        } catch (error) {
            console.log(error);
            setError('Failed to create Reminder')
        }

        setLoading(false);

    }

    const isEmailSelected = platform === "email";

    return (
        <Layout>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Reminder</h2>
                    { error && <Alert variant="danger">{error}</Alert> }
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="date">
                            <Form.Label>Date</Form.Label>
                            <br />
                            <DatePicker
                                selected={date}
                                onChange={date => setDate(date)}
                                required
                                className="form-control date"
                            />
                        </Form.Group>

                        <Form.Group id="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group id="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as="textarea"
                                rows={3}
                                value={message}
                                onChange={e => setMessage(e.target.value)} 
                                required
                            />
                        </Form.Group>

                        <Form.Group id="platform">
                            <Form.Label>Platform</Form.Label>
                            <Form.Control 
                                as="select"
                                defaultValue={platform}
                                onChange={e => setPlatform(e.target.value)}
                               required
                            >
                                <option value="email">Email</option>
                                <option value="whatsapp">What's App</option>
                                <option value="sms">SMS</option>
                                <option value="telegram">Telegram</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group id="details">
                            <Form.Label>{isEmailSelected ? "Email" : "Number"}</Form.Label>
                            <Form.Control
                                type={isEmailSelected ? "email": "number"}
                                value={details}
                                onChange={e => setDetails(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button type="submit" disabled={loading} className="w-100">Sign  Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            
        </Layout>
    );
}

export default ReminderForm;
