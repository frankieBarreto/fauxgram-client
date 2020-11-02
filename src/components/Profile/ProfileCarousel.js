import React from "react";
import { Container, Col, Row, Image, Carousel, Card } from "react-bootstrap";




const ProfileCarousel = (props) => {
  console.log(props)
  function generateCarousel(array) {
    array.map((follower) => (
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={follower.profileImg} roundedCircle />
          </Col>
        </Row>
      </Container>
    ));
  }
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <Card>{generateCarousel(props.followers)}</Card>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default ProfileCarousel;
