import { useEffect, useState } from 'react';
import './App.css';
import { supabase, type User } from './supabase';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('users').select();

      if (error) {
        console.error('Error fetching users:', error);
      } else {
        setUsers(data || []);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>ShellPad</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.email || user.id}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
