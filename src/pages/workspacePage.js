import React, { useState, useEffect } from "react";
import workspaces from "../services/workspacesService";
import {
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  Card,
} from "react-bootstrap";

const WorkspacePage = ({ match }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSeconds((seconds) => seconds + 1);
      window.location.reload(false);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [seconds]);

  const id = match.params.id;
  const workspace = workspaces.find((workspace) => {
    return parseInt(workspace.id) === parseInt(id);
  });

  return (
    <>
      <Container fluid>
        <Card className="text-center">
          <Card.Header as="h1">{workspace.title}</Card.Header>
          <Card.Img
            style={{
              objectFit: "scale-down",
              height: "50vh",
            }}
            variant="top"
            src={workspace.imgUrl}
          />
          <Card.Body>
            <Card.Title>
              {" "}
              $MIA holders currently here: {workspace.currentlyAt}
            </Card.Title>
            <Card.Title>
              {" "}
              $MIA holders who have accessed this workspace:{" "}
              {workspace.accessed}
            </Card.Title>
            <Card.Text>{workspace.description}</Card.Text>
            <Card.Text>Amenities: {workspace.amenities}</Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Non $MIA Holder Price: <strong>${workspace.price}</strong> Per Month
              </ListGroupItem>
              <ListGroupItem>Location: {workspace.address}</ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default WorkspacePage;
