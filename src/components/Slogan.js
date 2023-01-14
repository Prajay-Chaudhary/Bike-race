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
  const errorMsg = (error) =>
    toast.error(error || "oops something went wrong", { delay: 1000 });

  // my hooks
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [slogan, setSlogan] = useState("");
  const [error, setError] = useState("");

  // errors state
  const [firstNameHasError, setFirstNameHasError] = useState(false);
  const [lastNameHasError, setLastNameHasError] = useState(false);
  const [emailHasError, setEmailHasError] = useState(false);
  const [sloganHasError, setSloganHasError] = useState(false);

  const contestsMutation = useMutation({
    mutationFn: (data) =>
      axios({
        method: "POST",
        url: "https://boulder-bike-race.herokuapp.com/api/v1/contests",
        header: {
          "Content-Type": "application/json",
        },
        data,
      }).then((r) => {
        console.log(r);
        if (r.data.id) return r.data;
        return Promise.reject(new Error(Object.values(r.data)[0].join(", ")));
      }),
    onSuccess: () => {
      setFirstname("");
      setLastname("");
      setEmail("");
      setSlogan("");
      successMsg();
    },
    onError: (error) => {
      console.log({ error });

      errorMsg(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // when all input fields are filled
    const mailOk = isEmailOk()
    const lastnameOk = isLastNameOk()
    const firstnameOk = isFirstNameOk()
    const sloganOk = isSloganOk()

    if (mailOk && lastnameOk && firstnameOk && sloganOk) {
      console.log("send...");
      // prepare data
      contestsMutation.mutateAsync({
        first_name: firstname,
        last_name: lastname,
        email,
        slogan,
      });

    }

  };

const isFirstNameOk =()=>{

  if (firstname === "") {
    setFirstNameHasError(true)
    return false
  }
  return true;
}

const isLastNameOk = () => {
    if (lastname === "") {
      setLastNameHasError(true);
      return false;
    }
    return true
}

const isSloganOk = () => {
  console.log("slogan checking");
    if (slogan === "" || slogan.length > 50) {
      setSloganHasError(true);
      return false;
    }
    return true;
}

const isEmailOk = () => {
  const isEmail = /\S+@\S+\.\S+/.test(email)
  console.log("good email :",isEmail)
    if (email === "" || !isEmail) {
      setEmailHasError(true)
      return false;
    }
    return true;
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
              <div className="mx-auto mt-8 mb-0">
                <div>
                  <p className="text-danger">{error}</p>
                  <label htmlFor="text" className="text text-start mr-1">
                    Email
                  </label>
                  <span className="fas fa-envelope text-info"></span>
                  <div className="">
                    <input
                      type="email"
                      className={`w-small p-3 mb-3 text-sm shadow-sm form-control form-control-lg ${
                        emailHasError ? "border border-danger border-5" : ""
                      }
                          ${
                            email !== ""
                              ? "border border-success border-[20px]"
                              : ""
                          }`}
                      placeholder="Enter email"
                      onChange={(e) => {
                        setEmail(e.target.value);

                        if (/\S+@\S+\.\S+/.test(email) === false) {
                          setEmailHasError(true);
                        } else {
                          setEmailHasError(false);
                        }
                      }}
                      value={email}
                      aria-describedby="basic-addon1"
                      required
                    />
                    <small
                      className={`text-danger mb-2 ${
                        emailHasError ? "d-block" : "d-none"
                      }`}
                    >
                      This is required
                    </small>
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
                      className={`w-small p-3 mb-3 text-sm shadow-sm form-control form-control-lg ${
                        firstNameHasError
                          ? "border border-danger border-5"
                          : " "
                      } ${
                        firstname !== ""
                          ? "border border-success border-[20px]"
                          : ""
                      }`}
                      placeholder="Enter Your First Name"
                      onChange={(e) => {
                        setFirstname(e.target.value);
                        setFirstNameHasError(false);
                      }}
                      value={firstname}
                    />
                    <small
                      className={`text-danger mb-2 ${
                        firstNameHasError ? "d-block" : "d-none"
                      }`}
                    >
                      This is required
                    </small>
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
                      className={`w-small p-3 mb-3 text-sm shadow-sm form-control form-control-lg ${
                        lastNameHasError ? "border border-danger border-5" : " "
                      } ${
                        lastname !== ""
                          ? "border border-success border-[20px]"
                          : ""
                      }`}
                      placeholder="Enter Your First Name"
                      onChange={(e) => {
                        setLastname(e.target.value);
                        setLastNameHasError(false);
                      }}
                      value={lastname}
                    />
                    <small
                      className={`text-danger mb-2 ${
                        lastNameHasError ? "d-block" : "d-none"
                      }`}
                    >
                      This is required
                    </small>
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
                      className={`w-small p-3 mb-3 text-sm shadow-sm form-control form-control-lg${
                        sloganHasError ? "border border-danger border-5" : ""
                      }
                          ${
                            slogan !== ""
                              ? "border border-success border-[20px]"
                              : ""
                          }`}
                      placeholder="Max.50 characters Slogan"
                      rows="3"
                      maxLength="100"
                      required
                      value={slogan}
                      onChange={(e) => {
                        setSlogan(e.target.value);
                        if (slogan.length > 50) {
                          setSloganHasError(true);
                        } else {
                          setSloganHasError(false);
                        }
                      }}
                    />
                    <small
                      className={`text-danger mb-2 ${
                        sloganHasError ? "d-block" : "d-none"
                      }`}
                    >
                      This is required
                    </small>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <button
                    className="btn btn-outline-danger text-center px-5 py-3 radient-text"
                    onClick={handleSubmit}
                  >
                    {contestsMutation.isLoading ? "Loading..." : "Submit"}
                  </button>
                </div>
              </div>
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
