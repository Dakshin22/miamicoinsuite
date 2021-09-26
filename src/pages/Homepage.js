import { Row, Col, Form, Button, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";

function HomePage() {
  return (
      <>
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        objectFit: "contain",
      }}
    >
        <Image src="https://pbs.twimg.com/profile_images/1415696015206748165/9WA48PM-_400x400.jpg" fluid/>
      <Row className="text-center">
        <h1 style={{fontSize: "100px"}}> Welcome to ExploreMiamiCoin </h1>
      </Row>
      <Row><h2>The exploration platform for MiamiCoin.</h2></Row>
    </div>
    </>
  );
}

export default HomePage;
