import "./Gallary.css";
import React from "react";

const GallaryItem = ({ url, id }) => {
  return (
    <div>
      <div
        className="mt-2
                image 
                "
        data-bs-toggle="modal"
        data-bs-target={`#a${id}`}
      >
        <img
          src={url}
          alt="bikes"
          className="mt-2
                image 
                p-2"
        />
      </div>

      <div
        className="modal fade"
        id={`a${id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-content">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-black"
                id="staticBackdropLabel"
              >
                #bikerace #BoulderBikeTour
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={url}
                alt="bikes"
                className="pop-up-image mx-auto img-fluid imgFull"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallaryItem;
