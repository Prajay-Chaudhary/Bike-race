import React from "react";
import "./Footer.css"
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="black" className="text-center text-lg-start text-white">
      <section className="d-flex justify-content-lg-between  border-bottom">
        <div className="container-fluid pb-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 pb-0 pt-md-3 pt-sm-0 mt-0 mb-sm-1">
              <span>Get connected with us on social networks:</span>
            </div>
            <div className="col-md-6 col-sm-12 ">
              <MDBContainer className="pb-0 mt-0">
                <MDBBtn
                  floating
                  className="m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                >
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>

                <MDBBtn
                  floating
                  className="m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                >
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>

                <MDBBtn
                  floating
                  className="m-1"
                  style={{ backgroundColor: "#dd4b39" }}
                  href="#!"
                >
                  <MDBIcon fab icon="google" />
                </MDBBtn>
                <MDBBtn
                  floating
                  className="m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="#!"
                >
                  <MDBIcon fab icon="instagram" />
                </MDBBtn>

                <MDBBtn
                  floating
                  className="m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="#!"
                >
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>

                <MDBBtn
                  floating
                  className="m-1"
                  style={{ backgroundColor: "#333333" }}
                  href="#!"
                >
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </MDBContainer>
            </div>
          </div>
        </div>
      </section>

      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                <MDBIcon
                  color="secondary"
                  icon="gem"
                  className="me-3 text-center"
                />
                Boulder Bike Tour
              </h6>
              <p className="paragraph-align">
                Boulder Bike Tour is a non-profit community racing organization
                at the foot of the Rocky Mountains, founded in 1958, whose
                mission is to help and inspire people through bike-racing.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                HELP
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Photos
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Rider
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Our goal
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy policy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Accessability
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cookies
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-header">
                Contact
              </h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Colorado, CL 10012, US
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@boulderbikerace.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 footer-header"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a
          className="text-reset fw-bold footer-header"
          href="https://boulderbikerace.com/"
        >
          boulderbikerace.com
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer;
