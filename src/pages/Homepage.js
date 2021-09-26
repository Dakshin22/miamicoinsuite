import { Row, Col, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
function HomePage() {
    return (
        <div
        style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            margin: 50,
          }}
      >
              <Row className="text-center">
                  Welcome to Explore$MIA
              </Row>
              <Row>
                  The exploration platform for MiamiCoin
              </Row>


        </div>
    );
  }
  
  export default HomePage;
  