import React from 'react';
import ReminderForm from './ReminderForm';
import Layout from './auth/Layout';

const AddReminder = () => {

    const onSubmit = (data) => {
        // TODO: make api call
        console.log(data);
    }

    return (
        <Layout>
            <ReminderForm
                onSubmit={onSubmit}
            />
        </Layout>
    );
}

export default AddReminder;
