import { Navbar, Nav, Container, Image, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <Image src="logo2.png" width={200} className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#instituicao" className="nav-link-custom">Instituição</Nav.Link>
            <NavDropdown title="Exames Médicos" id="exames-dropdown" className="nav-dropdown-custom">
              <NavDropdown.Item href="#exames/colonoscopia" className="dropdown-item-custom">Colonoscopia</NavDropdown.Item>
              <NavDropdown.Item href="#exames/ecocardiograma" className="dropdown-item-custom">Ecocardiograma</NavDropdown.Item>
              <NavDropdown.Item href="#exames/endoscopia" className="dropdown-item-custom">Endoscopia</NavDropdown.Item>
              <NavDropdown.Item href="#exames/radiologia" className="dropdown-item-custom">Radiologia (Raio-X)</NavDropdown.Item>
              <NavDropdown.Item href="#exames/tomografia" className="dropdown-item-custom">Tomografia</NavDropdown.Item>
              <NavDropdown.Item href="#exames/ultrassonografia" className="dropdown-item-custom">Ultrassonografia</NavDropdown.Item>
              <NavDropdown.Item href="#exames/ressonancia" className="dropdown-item-custom">Ressonância Magnética</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contato" className="nav-link-custom">Dúvidas e Contato</Nav.Link>
            <NavDropdown title="Entretenimento" id="entretenimento-dropdown" className="nav-dropdown-custom">
              <NavDropdown.Item href="#entretenimento/jogos" className="dropdown-item-custom">Jogos</NavDropdown.Item>
              <NavDropdown.Item href="#entretenimento/desenhos" className="dropdown-item-custom">Desenhos</NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Projeto" id="projeto-dropdown" className="nav-dropdown-custom">
              <NavDropdown.Item href="#action/3.1" className="dropdown-item-custom">Problemas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className="dropdown-item-custom">Soluções</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;