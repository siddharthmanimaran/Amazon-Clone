import React from "react";

function ShippingPage() {
  return (
    <div className="form">
      <form
      //   onSubmit={submit}
      >
        <h1 style={{ textAlign: "center" }}>Shipping Details</h1>

        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          //   onChange={handleUser}
          //   value={user.firstName}
        />
        <label htmlFor="landMark">Phone Number</label>
        <input
          type="text"
          name="landMark"
          placeholder="(optional)"
          //   onChange={handleUser}
          //   value={user.password}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          //   onChange={handleUser}
          //   value={user.lastName}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter City Name"
          //   onChange={handleUser}
          //   value={user.userName}
        />
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="number"
          name="postalCode"
          placeholder="000 000"
          //   onChange={handleUser}
          //   value={user.email}
        />

        <label htmlFor="landMark">LandMark</label>
        <input
          type="text"
          name="landMark"
          placeholder="(optional)"
          //   onChange={handleUser}
          //   value={user.password}
        />

        {/* <Link to="/">
          <p style={{ textAlign: "right" }}>Already have Account?</p>
        </Link> */}
        <button
          type="submit"
          value="Submit"
          className="formSubmit"
          //   onClick={submit}
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default ShippingPage;
