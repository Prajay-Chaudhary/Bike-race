import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import contestImage from "../assets/contestImage.jpg";
import "./Slogan.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Slogan() {
  // success and error message
  const successMsg = () => toast.success("Slogan submitted successfully!");
  const errorMsg = () => toast.error("oops something went wrong");

  // my hooks
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [slogan, setSlogan] = useState("");
  const [btnValue, setBtnValue] = useState("SUBMIT");
  const [error, setError] = useState("");
  const contestsMutation = useMutation({
    mutationFn: (data) =>
      axios({
        method: "POST",
        url: "http://127.0.0.1:3001/api/v1/contests",
        header: {
          "Content-Type": "application/json",
        },
        data,
      }),
    onSuccess: () => {
      setFirstname("");
      setLastname("");
      setEmail("");
      setSlogan("");
      successMsg();
    },
    onError: () => {
      errorMsg();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if all fields are filled
    if (!firstname || !lastname || !email || !slogan) {
      setError("*All fields are required");
      return true;
    }
    // check if the email is valid
    if (/\S+@\S+\.\S+/.test(email) === false) {
      setError("*Enter a valid email address");
      return true;
    }

    // check for length of slogan
    if (slogan.length > 50) {
      setError("*Slogan idea must be under 50 characters");
      return true;
    }

    // when all input fields are filled
    if (firstname && lastname && email && slogan) {
      setError("");

      // prepare data
      contestsMutation.mutateAsync({
        first_name: firstname,
        last_name: lastname,
        email,
        slogan,
      });
    }
  };

  return (
    <section>
      <div className="container-fluid mb-5">
        <div className="row bg-black p-5"></div>
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="mx-auto text-center pb-3">
              <h1 className="font-bold text">Get started today!</h1>

              <p className="mt-4">
                Send us an idea of a slogan for the competition
                <br />
                the winner will get a free trip to the event 🚲
              </p>
            </div>

            <div className="div d-flex align-items-center justify-content-center">
              <ToastContainer />
              <form
                action=""
                className="mx-auto mt-8 mb-0"
                onSubmit={handleSubmit}
              >
                <div>
                  <p className="text-danger">{error}</p>
                  <label htmlFor="text" className="text text-start mr-1">
                    Email
                  </label>
                  <span className="fas fa-envelope text-info"></span>
                  <div className="">
                    <input
                      type="email"
                      className="w-small p-3 mb-3 text-sm shadow-sm form-control form-control-lg"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="text" className="text mr-1">
                    First Name
                  </label>
                  <span className="fas fa-user-circle text-info"></span>
                  <div className="">
                    <input
                      type="text"
                      className="w-small p-3 mb-3 text-sm shadow-sm form-control form-control-lg"
                      placeholder="Enter Your First Name"
                      onChange={(e) => setFirstname(e.target.value)}
                      value={firstname}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="text" className="text mr-1">
                    Last Name
                  </label>
                  <span className="fas fa-user-circle text-info"></span>
                  <div className="">
                    <input
                      type="text"
                      className="w-small p-3 mb-3 text-sm shadow-sm form-control form-control-lg"
                      placeholder="Enter Your Last Name"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="text">
                    Slogan
                  </label>
                  <span className="fas fa-text text-info"></span>
                  <div className="">
                    <textarea
                      type="password"
                      className="w-small p-3 mb-3 text-sm shadow-sm form-control form-control-lg"
                      placeholder="Max.50 characters Slogan"
                      rows="3"
                      maxLength="100"
                      value={slogan}
                      onChange={(e) => setSlogan(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    type="submit"
                    className="btn btn-outline-danger text-center px-5 py-3 radient-text"
                    onClick={handleSubmit}
                    value={contestsMutation.isLoading ? "Loading..." : "Submit"}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
            <div className="">
              <img
                alt="slogan"
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
