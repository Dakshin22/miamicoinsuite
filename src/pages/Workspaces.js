import { Card, Row, Col } from "react-bootstrap";
import workspaces from "../services/workspacesService";
import WorkspaceCard from "../components/WorkspaceCard";
function Workspaces() {
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {workspaces.map((workspace, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={workspace.imgUrl} />
              <Card.Body>
                <Card.Title>{workspace.title}</Card.Title>
                <Card.Text>
                  {workspace.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Workspaces;
