import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function WorkspaceCard(props) {
  return (
    <div>
      <Col>
        <Card>
          <Link
            style={{ textDecorationColor: "black" }}
            to={`/workspace/${props.id}`}
            replace
          >
            <Card.Img
              style={{
                objectFit: "scale-down",
                height: "50vh",
              }}
              variant="top"
              src={props.imgUrl}
            />
          </Link>
          <Card.Body>
            <Card.Title style={{ color: "black", listStyleType: "none" }}>
              {props.title}
            </Card.Title>
            <Card.Text style={{ color: "black", listStyleType: "none" }}>
              {props.description.slice(0, 100)}
              {"..."}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default WorkspaceCard;
