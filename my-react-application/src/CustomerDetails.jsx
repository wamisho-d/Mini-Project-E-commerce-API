import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerDetails = ({ customerId }) => {
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        axios.get(`/api/customers/${customerId}`)
            .then(response => setCustomer(response.data))
            .catch(error => console.error('Error fetching customer details:', error));
    }, [customerId]);

    if (!customer) return <div>Loading...</div>;

    return (
        <div>
            <h2>Customer Details</h2>
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Phone:</strong> {customer.phone}</p>
        </div>
    );
};

export default CustomerDetails;
