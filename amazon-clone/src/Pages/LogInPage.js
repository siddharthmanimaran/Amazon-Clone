import React from "react";
import { Link } from "react-router-dom";

export default function LogInPage() {
  return (
    <div className="form">
      <form>
        <h1 style={{ textAlign: "center" }}>Log In</h1>
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          name="userName"
          placeholder="userName"
          // value={userData.userName}
          // onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="********"
          // value={userData.password}
          // onChange={handleChange}
        />

        <button
          type="submit"
          value="Submit"
          className="formSubmit"
          // onClick={handleSubmit}
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
