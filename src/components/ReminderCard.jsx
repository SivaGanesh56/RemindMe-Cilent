import React from 'react';
import { Card } from 'react-bootstrap';
import { getIcon } from './utils';

const ReminderCard = (props) => {
    const { title="test", description="test description", date = new Date(), platform = 'whatsapp', details="kssskskk", onEdit, onDelete} = props;

    return (
        <div>
            <Card className="reminder">
                <div className="row mt-2 ml-0">
                        <Card.Title className="col-8">{title}</Card.Title>
                        <i className="far fa-edit col-2 edit" onClick={onEdit} />
                        <i className="fas fa-trash-alt col-2 delete" onClick={onDelete} />
                </div>
                <Card.Subtitle className="ml-3 mb-2">{date.toDateString()}</Card.Subtitle>
                <p className="ml-2"><i className={getIcon(platform)} /> {details}</p>
                <Card.Text className="m-1">
                        {description}
                    </Card.Text>
                
            </Card>
        </div>
    );
}

export default ReminderCard;
