import React, { useState } from 'react';
import { useAuth } from '../actions/authContext';
import Cart from './Cart';

const Profile = () => {
    const { logout } = useAuth;

    const userData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
    };

    const cartData = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
    ];

    const [editMode, setEditMode] = useState(false);

    const handleLogout = () => {
        logout();
    };

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    return (
        <div className="bg-white rounded-md shadow-md container">
            <h2 className="text-2xl font-semibold mb-4">{userData.name}'s Profile</h2>
            <div className="mb-4">
                <strong>Email:</strong> {userData.email}
            </div>
            <div className="mb-6 max-w-full">
                <h3 className="text-xl font-semibold mb-2">Shopping Cart</h3>
                <div className="bg-red-100 pb-12  rounded-md">
                    <Cart cartDataPass={cartData} />
                </div>
            </div>
            <div className="flex justify-end space-x-4">
                <button
                    className={`bg-blue-500 text-white px-4 py-2 rounded-md ${editMode ? 'bg-green-500' : ''}`}
                    onClick={handleEdit}
                >
                    {editMode ? 'Save Changes' : 'Edit Profile'}
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;
