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
      <section className=" d-flex flex-wrap align-items-center">
        <div className="row bg-black p-5"></div>
        <div className="w-full px-4 py-5">
          <div className="mx-auto text-center">
            <h1 className="">Thank you for participating</h1>

            <p className="mt-4">
              <img
                src={successfull}
                alt="confirmation"
                className="confirmationImg img-fluid rounded"
              />
              <a href="/" className="bg-danger p-3">
                Go Back
              </a>
            </p>
          </div>
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
                      required
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
                      required
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
                      required
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
                      required
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
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
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
