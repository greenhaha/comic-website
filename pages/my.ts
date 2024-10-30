import React from 'react';
import { useUserStore } from '../store/userStore';

const MyPage: React.FC = () => {
  const { user, updateUser } = useUserStore();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">My Page</h1>
      <div className="border p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-2">User Information</h2>
        <p className="text-gray-700 mb-4">Name: {user.name}</p>
        <p className="text-gray-700 mb-4">Email: {user.email}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => updateUser({ name: 'New Name', email: 'newemail@example.com' })}
        >
          Update User
        </button>
      </div>
    </div>
  );
};

export default MyPage;
