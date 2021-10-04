import React from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="form">
      <form
      // onSubmit={handleSubmit} action="/signUp" method="post"
      >
        <h2 style={{ textAlign: "center" }}>Sign Up</h2>

        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          name="firstName"
          // onChange={handleUser}
          // value={userData.firstName}
        />
        <label htmlFor="lname">Last name:</label>
        <input
          type="text"
          name="lastName"
          // onChange={handleUser}
          // value={userData.lastName}
        />
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          name="userName"
          // onChange={handleUser}
          // value={userData.userName}
        />
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          placeholder="@mail.com"
          // onChange={handleUser}
          // value={userData.email}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Must have 8 characters"
          // onChange={handleUser}
          // value={userData.password}
        />

        <Link to="/LogIn">
          <p style={{ textAlign: "right" }}>Already have Account?</p>
        </Link>
        <button
          type="submit"
          value="Submit"
          className="formSubmit"
          // onClick={handleSubmit}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
