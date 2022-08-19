import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function ContactUs(props) {
  
  const [credentials, setCredentials] = useState({ firstName:"",lastName:"", gender:"", email: "", password: "" });
  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        gender: credentials.gender,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history("/student");
      alert("Logged in succesfully!!")
    } else {
      alert("User already exists");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container border my-3">
        <form onSubmit={handleSubmit}>
          <div className="row g-3 m-2 p-2">
            <div className="col">
              <input
                required
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                name="firstName"
                value={credentials.firstName}
                onChange={onChange}
              />
            </div>
            <div className="col">
              <input
                required
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                name="lastName"
                value={credentials.lastName}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="m-2 p-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              required
              type="email"
              className="form-control m-2 p-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="m-2 p-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Gender
            </label>
            <input
              required
              type="text"
              className="form-control m-2 p-2"
              name="gender"
              value={credentials.gender}
              onChange={onChange}
            />
          </div>
          <div className="row g-3 align-items-center m-2 p-2">
            <label htmlFor="inputPassword6" className="col-form-label">
              Password
            </label>
            <div className="col-auto m-2 p-2">
              <input
                required
                type="password"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
            </div>
            <div className="col-auto">
              <span id="passwordHelpInline" className="form-text">
                Must be 8-20 characters long.
              </span>
            </div>
          </div>
          <div className="m-2 p-2 form-check">
            <input
              required
              type="checkbox"
              className="form-check-input m-2 p-2"
              id="exampleCheck1"
            />
            <label className="form-check-label m-1 p-1" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary m-2 p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
