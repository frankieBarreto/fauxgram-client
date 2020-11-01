import React from "react";
import { Container, Col, Row, Image, Carousel, Card } from "react-bootstrap";
const ProfileCarousel = (props) => {
  function generateCarousel(friends) {
    return friends.map((friend) => (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src={friend.profileImg} roundedCircle />
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    ));
  }
  return (<Card>{generateCarousel(props.followers)}</Card>)
};
export default ProfileCarousel;
