import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://assessment-backent.onrender.com/api/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

    <div className="flex flex-wrap justify-center p-4 bg-gray-100 min-h-screen">
      {users.map(user => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  </div>
  );
}

export default App;
