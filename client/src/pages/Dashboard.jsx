import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/dashboard')
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="text-center border-t">
              <td className="py-2">{u.id}</td>
              <td className="py-2">{u.name}</td>
              <td className="py-2">{u.email}</td>
              <td className="py-2">{u.status ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
