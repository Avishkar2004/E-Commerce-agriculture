import React, { useState } from 'react';
import { useAuth } from '../actions/authContext';
import Cart from './Cart';
import { FaUserEdit, FaSave, FaSignOutAlt } from 'react-icons/fa'; // Importing icons

const Profile = () => {
    const { authenticatedUser, logout } = useAuth();
    const [editMode, setEditMode] = useState(false);

    // Sample cart data (this can be dynamic, loaded from the backend)
    const cartData = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
    ];

    const handleLogout = () => {
        logout();
    };

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    // Check if the user is logged in
    if (!authenticatedUser) {
        return <div>Please log in to view your profile.</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
                <div className="mb-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Welcome, {authenticatedUser.username}
                    </h2>
                    <p className="text-gray-600 text-lg mt-2">
                        {authenticatedUser.email}
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                        <span className="flex items-center">
                            <FaUserEdit className="mr-2" />
                            Shopping Cart
                        </span>
                    </h3>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                        <Cart cartDataPass={cartData} />
                    </div>
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        className={`flex items-center bg-blue-500 text-white px-6 py-3 rounded-md font-semibold transition-transform transform hover:scale-105 ${
                            editMode ? 'bg-green-500' : ''
                        }`}
                        onClick={handleEdit}
                    >
                        {editMode ? (
                            <>
                                <FaSave className="mr-2" /> Save Changes
                            </>
                        ) : (
                            <>
                                <FaUserEdit className="mr-2" /> Edit Profile
                            </>
                        )}
                    </button>
                    <button
                        className="flex items-center bg-red-500 text-white px-6 py-3 rounded-md font-semibold transition-transform transform hover:scale-105"
                        onClick={handleLogout}
                    >
                        <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
