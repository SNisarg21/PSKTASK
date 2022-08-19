import React from "react";
import "./file.css";
import { Link } from "react-router-dom";
import temp from "./6th.jpg";

function Student() {
  return (
    <>
      <div className="container mb-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card mt-3">
              <div className="product-1 align-items-center p-2 text-center">
                <h2>S1</h2>
                <img src={temp} alt="#" className="rounded" />
                <div className="mt-3 info">
                  <h3>
                    <Link
                      className="btn btn-outline-success"
                      type="submit"
                      to=""
                    >
                      Apply
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mt-3">
              <div className="product-1 align-items-center p-2 text-center">
                <h2>NAME</h2>
                <img src={temp} alt="#" className="rounded" />
                <div className="mt-3 info">
                  <h3>
                    <Link
                      className="btn btn-outline-success"
                      type="submit"
                      to=""
                    >
                      Apply
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mt-3">
              <div className="product-1 align-items-center p-2 text-center">
                <h2>NAME</h2>
                <img src={temp} alt="#" className="rounded" />
                <div className="mt-3 info">
                  <h3>
                    <Link
                      className="btn btn-outline-success"
                      type="submit"
                      to=""
                    >
                      Apply
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mt-3">
              <div className="product-1 align-items-center p-2 text-center">
                <h2>NAME</h2>
                <img src={temp} alt="#" className="rounded" />
                <div className="mt-3 info">
                  <h3>
                    <Link
                      className="btn btn-outline-success"
                      type="submit"
                      to=""
                    >
                      Apply
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mt-3">
              <div className="product-1 align-items-center p-2 text-center">
                <h2>NAME</h2>
                <img src={temp} alt="#" className="rounded" />
                <div className="mt-3 info">
                  <h3>
                    <Link
                      className="btn btn-outline-success"
                      type="submit"
                      to=""
                    >
                      Apply
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
