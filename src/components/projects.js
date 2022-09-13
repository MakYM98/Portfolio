import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/projects.css"


function Project() {
  return (
    <div id="projectArea">
        <h1 id='projectHeader'>Projects</h1>
        <Container>
          <Row>
            <Col className='projImg'>
              <h1>Image</h1>
            </Col>
            <Col>
              <h1>Test</h1>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Project;
