import HeroImg from "../assets/HeroBG.jpg";
import CardImg3 from "../assets/ash.jpg";
import CardImg2 from "../assets/Manda.jpg";
import CardImg from "../assets/Kofren.jpg";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import newsImg1 from "../assets/acolyte2.jpg";
import newsImg2 from "../assets/bad.jpeg";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <div className="hero">
        <img src={HeroImg} className="hero-img" />
      </div>
      <div className="mt-4">
        <h1 className="text-center">TV SHOWS</h1>
      </div>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card style={{ width: "22rem" }}>
              <img src={CardImg} className="card-img" />
              <Card.Body>
                <Card.Title className="text-center">Knights of Ren</Card.Title>
                <Card.Text className="mt-4">
                  In the wake of the fall of the Galactic Empire, a new darkness
                  emerged, shrouded in mystery and cloaked in shadow. Whispers
                  spread across the galaxy of a group of formidable warriors,
                  their allegiance pledged to the dark side of the Force. They
                  are the Knights of Ren.
                </Card.Text>
                <Button variant="primary" onClick={handleShowModal}>
                  Coming Soon
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "22rem" }}>
              <img src={CardImg2} className="card-img" />
              <Card.Body>
                <Card.Title className="text-center">The Mandalorian</Card.Title>
                <Card.Text className="mt-4">
                  In the far reaches of the galaxy, amidst the chaos following
                  the fall of the Empire, one lone warrior emerges from the
                  shadows, armed with his blaster and clad in beskar armor. He
                  is the Mandalorian, a legendary bounty hunter whose name
                  strikes fear into the hearts of outlaws and lawbreakers alike.
                </Card.Text>
                <Button variant="primary" onClick={handleShowModal}>
                  Coming Soon
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "22rem" }}>
              <img src={CardImg3} className="card-img" />
              <Card.Body>
                <Card.Title className="text-center">Ahsoka</Card.Title>
                <Card.Text className="mt-4">
                  As the apprentice of Anakin Skywalker, Ahsoka navigated the
                  tumultuous events of the Clone Wars, proving herself to be a
                  skilled warrior and strategic thinker. Her journey from an
                  eager young learner to a seasoned warrior was marked by trials
                  and tribulations, including battles against the forces of the
                  dark side, encounters with formidable adversaries, and moments
                  of profound self-discovery.
                </Card.Text>
                <Button variant="primary">Watch Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-5 mb-5">
        <h1>Discover More Galactic Adventures Yet to Come</h1>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img src={newsImg1} className="d-block w-100" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={newsImg2} className="d-block w-100" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* modal na yan */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Coming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Get ready to embark on an epic adventure in a galaxy far, far away.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
