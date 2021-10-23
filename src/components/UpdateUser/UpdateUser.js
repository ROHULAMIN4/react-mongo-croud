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
  return (
    <div>
      <h2> Update {user.name}</h2>
      <small>{id}</small>
    </div>
  );
};

export default UpdateUser;
