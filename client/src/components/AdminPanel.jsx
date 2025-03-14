import React, { useState, useEffect } from 'react';

const AdminPanel = ({ user }) => {
  const [pendingUsers, setPendingUsers] = useState([]);

  useEffect(() => {
    const fetchPendingUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users/pending', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch pending users');
        }
        const data = await response.json();
        setPendingUsers(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchPendingUsers();
  }, []);

  const approveUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}/approve`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to approve user');
      }
      setPendingUsers(pendingUsers.filter(user => user._id !== userId));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Admin Panel</h1>
      <h2 className="text-2xl font-bold mb-4">Pending Users</h2>
      {pendingUsers.length === 0 ? (
        <p>No pending users</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pendingUsers.map(user => (
            <div key={user._id} className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h3 className="text-xl font-bold mb-2 text-white">{user.name}</h3>
              <p className="text-gray-400 mb-2">{user.email}</p>
              <p className="text-gray-400 mb-2">Roll No: {user.rollNumber}</p>
              <p className="text-gray-400 mb-4">Passout Batch: {user.passoutBatch}</p>
              <button
                onClick={() => approveUser(user._id)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Approve
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;