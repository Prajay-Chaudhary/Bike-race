import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "./HeroImage.css";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";

const HeroImage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["On April 21, 2023", "Hurry Up!", "Join for contest!"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner mt-0" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={9} xl={7}>
            <TrackVisibility>
              <div>
                <span className="tagline mb-2 ms-1 m-md-0 p-2 ">
                  Welcome to Colorado bike race.
                </span>
                <h1 className="py-2 px-4 my-3 bg-black colarado-banner">
                  {`Colorado Summer Bike Races,`}{" "}
                  <span
                    className="txt-rotate ms-1 m-md-0"
                    dataperiod="1000"
                    data-rotate='[ "On April 21, 2023", "Hurry Up!", "Join for contest!" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p className="ms-2 m-md-0 paragraph-align">
                  Cyclists around the world over look forward to Colorado’s
                  bike-racing season. The physical challenge of our lofty
                  altitude (ideal for bragging rights) combines with amazing
                  alpine views for a cycler’s dream destination.
                </p>
                <Link to={"/Contest"}>
                  <button
                    className="btn btn-outline-success ms-2"
                    onClick={() => console.log("connect")}
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </Link>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HeroImage;
