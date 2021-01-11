import React from 'react';
import { Card } from 'react-bootstrap';

const Reminder = (props) => {
    const { title, description, date } = props;
    return (
        <div>
            <Card className="reminder" style={{ width: '18rem' }}>
                <Card.Body>
                    <div className="row">
                        <Card.Title className="col-8">{title}</Card.Title>
                        <i className="far fa-edit col-2 edit"></i>
                        <i className="fas fa-trash-alt col-2 delete"></i>
                    </div>
                    <Card.Subtitle>
                        {date}
                    </Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Reminder;
