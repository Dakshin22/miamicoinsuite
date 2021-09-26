import { Card, Col, ListGroupItem, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
function WorkspaceCard(props) {
  return (
    <div>
      <Col>
        <Card bg="light" text="black" className="text-center">
          <Link
            
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
            <Card.Title>
              {props.title}{" "}<BsFillPeopleFill/> {props.accessed}
            </Card.Title>
            <Card.Text >
              {props.description.slice(0, 200)}
              {"..."}
              
            </Card.Text>
            <Card.Text >
              Amenities: {props.amenities}
              
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default WorkspaceCard;
