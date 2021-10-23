import React, { useRef } from "react";

const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const handle = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newuser = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newuser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the user.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>This is Add User</h2>
      <form onSubmit={handle}>
        <input type="text" ref={nameRef} placeholder="name" />
        <input type="email" name="" ref={emailRef} id="" placeholder="email" />
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default AddUser;
