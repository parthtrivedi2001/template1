import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
    return (
        <Navbar expand="lg" sticky="top" className="navbar-bg">
            <Container fluid>
                <Navbar.Brand className='p-2 bg-primary text-white rounded' href="#">
                    Logo Brand
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">Products</Nav.Link>
                        <Nav.Link href="">Sample Card</Nav.Link>
                        <Nav.Link href="">Layout Design</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed In Here : <a href="#login">
                            <button className='btn btn-primary'>Login</button>
                        </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;