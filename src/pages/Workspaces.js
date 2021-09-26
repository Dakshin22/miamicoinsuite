import { Card, Container, Row, Col } from "react-bootstrap";
import workspaces from "../services/workspacesService";
import WorkspaceCard from "../components/WorkspaceCard";
function Workspaces() {
  return (
    <Container fluid>
      <Row xs={1} md={3} className="g-4">
        {workspaces.map((workspace, idx) => (
          <WorkspaceCard
          id = {workspace.id}
            key={workspace.id}
            title={workspace.title}
            description={workspace.description}
            address={workspace.address}
            amenities={workspace.amenities}
            price={workspace.price}
            url={workspace.url}
            imgUrl={workspace.imgUrl}
            currentlyAt={workspace.currentlyAt}
            accessed={workspace.accessed}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Workspaces;
