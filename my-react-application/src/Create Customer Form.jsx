import React, { useState } from 'react';

const CreateCustomerForm = ({ onCreate }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCustomer = { name, email, phone };
        onCreate(newCustomer);
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Phone</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <button type="submit">Create Customer</button>
        </form>
    );
};

export default CreateCustomerForm;
