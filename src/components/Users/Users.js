import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  //   deleting API
  const handleDeletin = (id) => {
    const procced = window.confirm("Are you sure to want to delete?");
    if (procced) {
      const url = `http://localhost:5000/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert("deleted seccessfully");
            const remaimgUsers = users.filter((user) => user._id !== id);
            setUsers(remaimgUsers);
          }
        });
    }
  };
  return (
    <div>
      <h2>This is Users</h2>
      <h2>Available users:{users.length}</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}: {user.email}
            <Link to={`/users/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDeletin(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
