import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/nav.css"

function TopNav() {
  return (
    <>
      <Navbar className='row justify-content-start' id='navbar' style={{margin:0}}>
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/project">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNav;