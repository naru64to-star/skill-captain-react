
import React from 'react';
import './App.css';
import UserContext from './Components/UserContext';
import UserDashboard from './Components/UserDashboard';

export default function App() {
  const user = { name: 'Jane Smith', email: 'jane@example.com' };

  return (
    <div className="App">
      <h1>Context API Demo</h1>
      <UserContext.Provider value={user}>
        <UserDashboard />
      </UserContext.Provider>
    </div>
  );
}
