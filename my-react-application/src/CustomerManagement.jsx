import React, { useState } from 'react';
import CreateCustomerForm from './CreateCustomerForm';
import CustomerDetails from './CustomerDetails';
import UpdateCustomerForm from './UpdateCustomerForm';
import DeleteCustomerFunction from './DeleteCustomerFunction';

const CustomerManagement = () => {
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);

    const handleCreateCustomer = (newCustomer) => {
        
    };

    return (
        <div>
            <h1>Customer Management</h1>
            <CreateCustomerForm onCreate={handleCreateCustomer} />
            {selectedCustomerId && (
                <>
                    <CustomerDetails customerId={selectedCustomerId} />
                    <UpdateCustomerForm customerId={selectedCustomerId} />
                    <DeleteCustomerFunction customerId={selectedCustomerId} />
                </>
            )}
        </div>
    );
};

export default CustomerManagement;
