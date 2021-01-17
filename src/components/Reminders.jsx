/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReminderCard from './ReminderCard';
import ReminderForm from './ReminderForm';
import { Modal } from 'react-bootstrap';


const Reminders = () => {

    // TODO: make api call to fetch user reminders

    const [reminders, setReminders] = useState([1,2,3,4]);
    // const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);

    const onEdit = (index) => {
        // setIndex(index);
        setShow(true);
    }

    const onDelete = (index) => {
        console.log(index);
        const modifiedReminders = [...reminders];
        modifiedReminders.splice(index,1);
        setReminders(modifiedReminders);
    }

    const onSubmit = (data) => {
        setShow(false);
        console.log(data);
    }

    const showModal = () => {
        console.log(show)
        return (
            <>
                <Modal show={show} onHide={() => setShow(false)}>
                    <Modal.Header><h2>Edit Reminder</h2></Modal.Header>
                    <Modal.Body>
                        <ReminderForm
                            classes="modal-form"
                            onSubmit={onSubmit}
                            date= {new Date()}
                        />
                    </Modal.Body>
                </Modal>
            </>
        );
    }

    return (
        <>
            <div className="reminders row">
            {
                reminders.map((item, index) => {
                    const {title, description, date} = item;
                    return(
                        <ReminderCard
                            key={index}
                            title={title}
                            description={description}
                            date={date}
                            onEdit={() => onEdit(index)}
                            onDelete={() => onDelete(index)}
                         />
                    );
                })
            }
            </div>
            { show && showModal() }
        </>
    );
}
export default Reminders;
