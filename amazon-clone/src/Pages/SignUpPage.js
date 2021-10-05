import React, { useState, useEffect } from "react";
// import useHistory from "react-r"
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {
  const history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });
  // useEffect(() =>{

  // })

  function handleUser(event) {
    const { name, value } = event.target;
    setUser((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  }

  const sendUser = async (req, res) => {
    try {
      // const res =
      await axios.post("http://localhost:4000/Amazon/signUp", user);
      // console.log(res);
      alert("Sign Up Success");
      history.push("/LogIn");
    } catch (err) {
      console.log(err);
      alert("Sign Up Failure");
    }
  };

  function submit(event) {
    event.preventDefault();
    console.log(user);
    sendUser();
  }
  return (
    <div className="form">
      <form onSubmit={submit}>
        <h2 style={{ textAlign: "center" }}>Sign Up</h2>

        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          name="firstName"
          onChange={handleUser}
          value={user.firstName}
        />
        <label htmlFor="lname">Last name:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleUser}
          value={user.lastName}
        />
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          name="userName"
          onChange={handleUser}
          value={user.userName}
        />
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          placeholder="@mail.com"
          onChange={handleUser}
          value={user.email}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Must have 8 characters"
          onChange={handleUser}
          value={user.password}
        />

        <Link to="/LogIn">
          <p style={{ textAlign: "right" }}>Already have Account?</p>
        </Link>
        <button
          type="submit"
          value="Submit"
          className="formSubmit"
          onClick={submit}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
