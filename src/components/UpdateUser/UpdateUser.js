import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateUser = () => {
  const [user, sertUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => sertUser(data));
  }, []);
  const hanldeNameChange = (e) => {
    const updateName = e.target.value;
    const updateUser = { name: updateName, email: user.email };
    sertUser(updateUser);
  };
  const handleEmailChange = (e) => {
    const updateEmail = e.target.value;
    const updateUser = { email: updateEmail, name: user.name };
    sertUser(updateUser);
  };
  const hanldeUpdate = (e) => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated data successfully!");

          sertUser({});
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2> Update {user.name}</h2>
      <small>{id}</small>
      <form onClick={hanldeUpdate}>
        <input
          type="text"
          value={user.name || ""}
          onChange={hanldeNameChange}
        />
        <input
          type="email"
          value={user.email || ""}
          onChange={handleEmailChange}
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
