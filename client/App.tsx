import  { useState } from 'react';
import UserLayout from './components/layouts/UserLayout';
import AdminLayout from './components/layouts/AdminLayout';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      {isAdmin ? <AdminLayout /> : <UserLayout />}
      <button onClick={() => setIsAdmin(!isAdmin)}>Toggle Admin/User</button>
    </div>
  );
}

export default App;