import Container from "react-bootstrap/Container";
import { Row, Col, Form, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import HeroImg2 from "../assets/HeroBG2.jpg";
import HeroImg3 from "../assets/HeroBG3.jpg";
import HeroImg4 from "../assets/HeroBG4.jpg";
import Card from "react-bootstrap/Card";
import "./Gallery.css";
import http from "../http";
import { useEffect, useState } from "react";

const Gallery = () => {
  const storage = import.meta.env.VITE_API;
  const api = http();
  const [allegiance, setAllegiance] = useState([]);
  const [homeWorld, setHomeWorld] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [selectedAllegiance, setSelectedAllegiance] = useState("");
  useEffect(() => {
    getAllegiance();
    getHomeWorld();
    getCharacters();
    return () => {};
  }, []);

  async function getAllegiance() {
    const { data } = await api.get("/allegiance");
    setAllegiance(data);
  }
  async function getHomeWorld() {
    const { data } = await api.get("/homeworld");
    setHomeWorld(data);
  }
  async function getCharacters() {
    let url = "/characters";
    if (selectedAllegiance) {
      url += `?allegiance=${selectedAllegiance}`;
    }
    const { data } = await api.get(url);
    setCharacters(data);
    console.log(data);
  }

  const handleAllegianceChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedAllegiance(selectedValue);
    console.log(selectedValue);
    getCharacters();
  };

  return (
    <>
      <div className="heroGallery">
        <Carousel fade>
          <Carousel.Item className="hero">
            <img src={HeroImg2} />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="hero">
            <img src={HeroImg3} />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="hero">
            <img src={HeroImg4} />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container className="mt-4">
        <Row>
          <Col sm="12" md="3">
            <Form inline="true">
              <Row>
                <Col xs="auto">
                  <Form.Select
                    defaultValue="0"
                    aria-label="Default select example"
                    className="mb-4"
                    onChange={handleAllegianceChange}
                  >
                    <option value="0" disabled>
                      Select Allegiance
                    </option>
                    {allegiance.map((allegiance, index) => {
                      return (
                        <option key={index} value={allegiance}>
                          {allegiance}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Col>
                <Col xs="auto">
                  <Button variant="dark" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col sm="12" md="9">
            <Row>
              {characters.map((characters, index) => {
                return (
                  <Col key={index} sm="6" lg="4">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={`${storage}${characters.thumbnail}`}
                      />
                      <Card.Body>
                        <Card.Title>{characters.name}</Card.Title>
                        <Card.Text>{characters.about}</Card.Text>
                        <Button variant="primary">More</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
