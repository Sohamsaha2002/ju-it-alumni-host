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
        <ul>
          {pendingUsers.map(user => (
            <li key={user._id} className="mb-4">
              <p>{user.name} ({user.email})</p>
              <button
                onClick={() => approveUser(user._id)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPanel;