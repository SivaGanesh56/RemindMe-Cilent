import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddReminder = (props) => {

    const [date, setDate] = useState(undefined);
    const [title, setTitle] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [show, setShow] = useState(true);

    const handleHide = () => {
        setShow(false);
        props.onHide();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(false);
        const date_string = date.toLocaleDateString();
        const obj = {
            date: date_string,
            title,
            description
        };
        props.onApply(obj);
    }

    return (
        <div>
            <Modal show={show} onHide={handleHide}>
              <Modal.Header closeButton>
                <Modal.Title>Add Reminder</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>

                <Form.Group controlId="todoTitle">
                    <Form.Label>Enter Date</Form.Label>
                    <br />
                    <DatePicker
                        selected={date}
                        onChange={date => setDate(date)}
                        className="form-control date"
                    />
                </Form.Group>
                
                <Form.Group controlId="todoTitle">
                    <Form.Label>Enter Title</Form.Label>
                        <Form.Control 
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title"
                        />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Enter Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Enter Description"
                            rows={3}
                            maxLength={250}
                        />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                </Button>

                </Form>
              </Modal.Body>
            </Modal>
        </div>
    );
}

export default AddReminder;
