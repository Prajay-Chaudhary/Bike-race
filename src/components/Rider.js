import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Riders.css";
import axios from "axios";
import React, { useState, useEffect } from "react";


function Rider() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get('https://boulder-bike-race.herokuapp.com/api/v1/bikers')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <section>
      <div className="container-fluid">
        <div className="row bg-black p-5 mx-auto">
          <Row className="g-4 text-center ml-1 ml-md-0 text-center">
            <Col className=" text-black justify-content-center wrapper">
              {data &&
                data.map((biker) => (
                  <Card className="mb-4 mx-md-4 mx-0 bg-white pt-3 px-5 align-bikers-center box-effects">
                    <Card.Img
                      variant="left"
                      src={biker.image}
                      className=" profile-image"
                    />
                    <Card.Body>
                      <Card.Title>
                        {biker.first_name}&nbsp;{biker.last_name}
                      </Card.Title>
                      <Card.Text className="text-warning">
                        {biker.city_of_origin}
                      </Card.Text>
                      <Card.Text className="text-warning">
                        {biker.state_of_origin}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}

export default Rider;
