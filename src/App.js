import './App.css';
import { useState } from 'react';
import AdminManager from './admin/AdminManager';

const usersMock = [
  {
    id: '203850029',
    name: 'daniel',
    actions: [
      { id: '0', name: 'Coffee', value: 50 },
      { id: '1', name: 'Spa', value: 150 },
    ],
  },
  {
    id: '12345678',
    name: 'ronen',
    actions: [
      { id: '2', name: 'furniture', value: 1250 },
      { id: '3', name: 'Dog', value: 550 },
    ],
  },
];

function App() {
  const [users, setUsers] = useState(usersMock);

  return (
    <div style={{ margin: '20px' }}>
      <AdminManager users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
