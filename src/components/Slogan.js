import React, { useState, useEffect } from "react";
import axios from "axios";
import successfull from "../assets/successfull.png";
import contestImage from "../assets/contestImage.jpg";
import "./Slogan.css";

function Slogan() {
  const [email, setEmail] = useState("");
  const [slogan, setSlogan] = useState("");
  const [error, setError] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (slogan.length > 50) {
      setError("Slogan must be 50 characters or less");
    } else {
      setError("");
    }
    if (email.length > 0 && slogan.length > 0) {
      axios
        .post('https://boulder-bike-race.herokuapp.com/api/v1/contests', {
          email: email,
          slogan: slogan,
          first_name: first_name,
          last_name: last_name,
        })
        .then((res) => {
          console.log(res);
          setConfirmation(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // confirmation div
  const [confirmation, setConfirmation] = useState(false);

  if (confirmation) {
    return (
      <section className=" d-flex flex-wrap lg:h-screen align-items-center">
        <div className="w-full px-4 py-5 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Thank you for participating
            </h1>

            <p className="mt-4 text-gray-500">
              <img
                src={successfull}
                alt="confirmation"
                className="confirmationImg"
              />
              <a
                href="/"
                className="ml-3 inline-block rounded-lg bg-red-700 px-5 py-3 text-sm font-medium text-white"
              >
                Go Back
              </a>
            </p>
          </div>
        </div>

        <div className=" h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="container-fluid mb-5">
        <div className="row bg-black p-5"></div>
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="mx-auto text-center pb-3">
              <h1 className="font-bold text">Get started today!</h1>

              <p className="mt-4 text-gray-500">
                Send us an idea of a slogan for the competition
                <br />
                the winner will get a free trip to the event 🚲
              </p>
            </div>
            <div className="div d-flex align-items-center justify-content-center">
              <form
                action=""
                className="mx-auto mt-8 mb-0"
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="text" className="text text-start">
                    Email
                  </label>
                  <div className="">
                    <input
                      type="email"
                      className="w-small p-3 mb-3 text-sm shadow-sm form-control form-control-lg"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="text" className="text">
                    First Name
                  </label>
                  <div className="">
                    <input
                      type="text"
                      className="w-small p-3 mb-3 text-sm shadow-sm form-control form-control-lg"
                      placeholder="Enter Your First Name"
                      onChange={(e) => setFirst_name(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="text" className="text">
                    Last Name
                  </label>
                  <div className="">
                    <input
                      type="text"
                      className="w-small p-3 mb-3 text-sm shadow-sm form-control form-control-lg"
                      placeholder="Enter Your Last Name"
                      onChange={(e) => setLast_name(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="text">
                    Slogan
                  </label>
                  <div className="">
                    <textarea
                      type="password"
                      className="w-small p-3 mb-3 text-sm shadow-sm form-control form-control-lg"
                      placeholder="Max.50 characters Slogan"
                      onChange={(e) => setSlogan(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <button
                    type="submit"
                    className="btn btn-outline-danger text-center px-5 py-3 radient-text"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-7 d-flex align-items-center justify-content-center">
            <div className="">
              <img
                alt="slogan image"
                src={contestImage}
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slogan;
