import React from 'react';
import axios from 'axios';

const DeleteCustomerFunction = ({ customerId }) => {
    const handleDelete = () => {
        axios.delete(`/api/customers/${customerId}`)
            .then(response => console.log('Customer deleted:', response.data))
            .catch(error => console.error('Error deleting customer:', error));
    };

    return (
        <button onClick={handleDelete}>Delete Customer</button>
    );
};

export default DeleteCustomerFunction;
