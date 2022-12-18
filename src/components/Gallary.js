import "./Gallary.css";
import React, { useState, useEffect } from "react";


const Gallary = () => {
  const [pictures, setPictures] = useState([]);
  const [image, setImage] = useState(40);

  const handleImages = () => {
    setImage(image + 40);
  };

  useEffect(() => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d2e7dfec4591bf56092752c9584afc3a&tags=bikerace%2C+BoulderBikeTour&per_page=${image}&page="+page+"&format=json&nojsoncallback=1`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (j) {
        let pickArray = j.photos.photo.map((pic) => {
          var farmId = pic.farm;
          var serverId = pic.server;
          var id = pic.id;
          var secret = pic.secret;
          var srcPath =
            "https://farm" +
            farmId +
            ".staticflickr.com/" +
            serverId +
            "/" +
            id +
            "_" +
            secret +
            ".jpg";
          return (
            <img
              src={srcPath}
              alt="bikes"
              className="mt-2
                image 
                p-4"
            ></img>
          );
        });
        setPictures(pickArray);
      });
  }, [image]);

  return (
    <div className="container-fluid text-center">
      <div className="row bg-black p-5"></div>
      <div className="row text-center">
        <h1 className="fw-bolder display-4 radient-text text ">
          Photos from the event
        </h1>
      </div>
      <div className="row justify-content-center mb-4">{pictures}</div>
      <div className="row justify-content-center my-5">
        <div className="col-5">
          <button
            className="btn btn-outline-danger text-center px-3 py-2 radient-text"
            onClick={handleImages}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallary
