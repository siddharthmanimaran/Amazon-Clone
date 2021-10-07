import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function LogInPage() {
  const history = useHistory();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  }

  const userLogIn = async () => {
    try {
      const res = await axios.post("http://localhost:4000/Amazon/logIn", user);
      if (res.data.success) {
        alert("Logged In");
        history.push(`/HomePage/${res.data.userDetails._id}`);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Logged In Failed");
      console.log(err);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    userLogIn();
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>Log In</h1>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          name="userName"
          placeholder="userName"
          value={user.userName}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="********"
          value={user.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          value="Submit"
          className="formSubmit"
          onClick={handleSubmit}
        >
          Log In
        </button>
        <div className="link">
          Need an account?
          <Link to="/SignUp">sign up</Link>
        </div>
      </form>
    </div>
  );
}
