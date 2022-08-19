import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="d-grid align-items-center justify-content-center">
          <div className="text-center">
            <h1>Welcome to Internship Portal</h1>
          </div>
          <div className="d-grid gap-2 mx-2 my-2">
            <Link
              className="btn btn-outline-success"
              type="submit"
              to="/login"
            >
              <h1>Student</h1>
            </Link>
            <Link
              className="btn btn-outline-success"
              type="submit"
              to="/startup"
            >
              <h1>Startup</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
