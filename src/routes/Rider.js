import React from 'react'
import { Data } from "../assets/Data";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Rider.css"
function Rider() {
  return (
    <div className="container-fluid">
      <div className="row bg-black p-5">
        <Row className="g-4 text-center ml-1 ml-md-0 text-center">
          <Col className=" text-black justify-content-center wrapper">
            {Data.map((item) => (
              <Card className="mb-4 mx-md-4 mx-0 bg-white pt-3 px-5 align-items-center box-effects">
                <Card.Img
                  variant="left"
                  src={item.imgUrl}
                  className=" profile-image"
                />
                <Card.Body>
                  <Card.Title>
                    {item.first}&nbsp;{item.last}
                  </Card.Title>
                  <Card.Text className="text-warning">{item.city}</Card.Text>
                  <Card.Text className="text-warning">{item.state}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Rider

    