import "./Gallary.css";
import React, { useState, useEffect } from "react";
import GallaryItem from "./GallaryItem";

const Gallary = () => {
  const [pictures, setPictures] = useState([]);
  const [image, setImage] = useState(40);

  const handleImages = () => {
    setImage(image + 40);
  };


  useEffect(() => {
    const fectData = async () => {
      const pics = await fetch(
        // flicker API
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d2e7dfec4591bf56092752c9584afc3a&tags=bikerace%2C+BoulderBikeTour&per_page=${image}&page="+page+"&format=json&nojsoncallback=1`
      );
      const data = await pics.json();

      console.log("dta :", data.photos.photo);
      setPictures(data.photos.photo);
    };

    fectData();
  }, [image]);

  return (
    <>
      <div className="container-fluid text-center">
        <div className="row bg-black p-5"></div>
        <div className="row text-center">
          <h1 className="fw-bolder display-4 radient-text text ">
            Photos from the event
          </h1>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center mb-4">
          {pictures.length > 0
            ? pictures?.map((pic) => {
                // make image url
                const url = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;

                return <GallaryItem key={pic.id} id={pic.id} url={url} />;
              })
            : "No images found"}
        </div>
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
    </>
  );
};

export default Gallary;
