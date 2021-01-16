import React, { useState } from 'react';
import ReminderCard from './ReminderCard';


const Reminders = () => {

    const [reminders, setReminders] = useState([1,2,3,4]);

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
                         />
                    );
                })
            }
            </div>
        </>
    );
}
export default Reminders;
