"use client";
import React, { useState, useEffect } from 'react';

// Define the structure of a User item
interface UserItem {
  id: number;
  product: string;
  quantity: number;
  unit: string;
}

const User: React.FC = () => {
  // Use the defined interface for the user state
  const [users, setUsers] = useState<UserItem[]>([
    { id: 1, product: 'All-Purpose Flour', quantity: 1000, unit: 'kg' },
    { id: 2, product: 'Bread Flour', quantity: 500, unit: 'kg' },
    { id: 3, product: 'Cake Flour', quantity: 200, unit: 'kg' },
  ]);

  useEffect(() => {
    // You can fetch data from API or database here
    // For demo purposes, we'll use the initial state
  }, []);

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 0) { // Prevent negative quantities
      setUsers((prevUsers) =>
        prevUsers.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleDeleteProduct = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>Supplier List</h1>
      </header>
      <main>
        <table className="user-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.product}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleUpdateQuantity(item.id, parseInt(e.target.value, 10) || 0)
                    }
                  />
                </td>
                <td>{item.unit}</td>
                <td>
                  <button onClick={() => handleDeleteProduct(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add-button">Add New Suoolier</button>
      </main>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
        }

        header {
          background-color: #f0f0f0;
          padding: 20px;
          text-align: center;
        }

        main {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }

        .user-table {
          width: 100%;
          border-collapse: collapse;
        }

        .user-table th,
        .user-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        .add-button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #4CAF50;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .add-button:hover {
          background-color: #3e8e41;
        }
      `}</style>
    </div>
  );
};

export default User;

