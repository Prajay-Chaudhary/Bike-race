import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { CirclesWithBar } from "react-loader-spinner";
import "./Riders.css"
import axios from "axios"
import React, { useState, useEffect } from "react"


function Rider() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

 // get all bikers
  const loadBikers = async()=>{
    try {
      setLoading(true)
      await axios
        .get("https://boulder-bike-race.herokuapp.com/api/v1/bikers")
        .then((response) => {
          setData(response.data)
          setLoading(false)
          console.log(response.data)
        })

    } catch (err) {
      console.log(err)
      setLoading(false)
    }finally{
      setLoading(false)
    }
       }

  useEffect(() => {
  // get all bikers
   loadBikers()
  }, [])

  // display loading if request for getting bikers is triggered
  if(loading){
    return (
      <div className="container d-flex justify-content-center p-5">
        <div className="row mt-5 p-5 text-center">
          <div className="col-12 m-5 p-5">
            <CirclesWithBar
              height="100"
              width="100"
              color="#C16607"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              outerCircleColor="red"
              innerCircleColor="green"
              barColor="#C16607"
              ariaLabel="circles-with-bar-loading"
            />
          </div>
        </div>
      </div>
    );
  } 

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

export default Rider
