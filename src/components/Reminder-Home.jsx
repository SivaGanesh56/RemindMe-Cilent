import React, { useState } from 'react';
import Reminder from './Reminder';
import AddReminder from './AddReminder';


const Home = () => {

    const [reminders, setReminders] = useState([]);
    const [show, setShow] = useState(false);

    const addNew = () => {
        setShow(true);
    }

    const handleHide = () => {
        setShow(false);
    }

    const handleSubmit = (data) => {
        setShow(false);
        setReminders([...reminders, data]);
    }

    return (
        <>
            <button className="btn btn-primary" onClick={addNew}>Add New</button>
            <div className="reminders row">
            {
                reminders.map((item, index) => {
                    const {title, description, date} = item;
                    return(
                        <Reminder
                            key={index}
                            title={title}
                            description={description}
                            date={date}
                         />
                    );
                })
            }
            </div>
            {show && <AddReminder onHide={handleHide} onApply={handleSubmit} />}
        </>
    );
}
export default Home;
