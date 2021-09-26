import { Card, Container, Row, Col } from "react-bootstrap";
import workspaces from "../services/workspacesService";
import WorkspaceCard from "../components/WorkspaceCard";
function Workspaces() {
  return (
    <>
      <h1
        style={{
          margin: 20,
        }}
        className="text-center"
      >
        Explore the top MiamiCoin-Holder Exclusive Workspaces in Town.
      </h1>
      <Container fluid>
        <Row xs={1} md={3} className="g-4">
          {workspaces.map((workspace, idx) => (
            <WorkspaceCard
              id={workspace.id}
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
    </>
  );
}

export default Workspaces;
