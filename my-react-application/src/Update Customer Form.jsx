import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateCustomerForm = ({ customerId }) => {
    const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        axios.get(`/api/customers/${customerId}`)
            .then(response => setCustomer(response.data))
            .catch(error => console.error('Error fetching customer details:', error));
    }, [customerId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/customers/${customerId}`, customer)
            .then(response => console.log('Customer updated:', response.data))
            .catch(error => console.error('Error updating customer:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} required />
            </div>
            <div>
                <label>Phone</label>
                <input type="tel" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} required />
            </div>
            <button type="submit">Update Customer</button>
        </form>
    );
};

export default UpdateCustomerForm;
