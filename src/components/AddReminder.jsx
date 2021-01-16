import React from 'react';
import ReminderForm from './ReminderForm';

const AddReminder = () => {

    const onSubmit = (data) => {
        // TODO: make api call
        console.log(data);
    }

    return (
        <>
            <ReminderForm
                onSubmit={onSubmit}
            />
        </>
    );
}

export default AddReminder;
