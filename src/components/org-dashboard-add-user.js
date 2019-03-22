import React from "react";
import '../stylesheets/dashboard-create-event.css';

// ------- TODO connect this form to server to create admin roles -----------

export default function OrgDashboardAddUser() {
    return (
        <section className='create-event-form'>
            <form action='submit'>
                <fieldset>
                    <legend>Add User Roles</legend>
                    <div className='create-event-row'>
                        <label htmlFor='event-name'> Name</label>
                        <input required type='text' placeholder='member-name' />
                    </div>

                    <div className='submit-cancel-buttons'>
                        <button className='submit'>Submit</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}
