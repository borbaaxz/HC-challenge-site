import { Container, Row, Col, Image } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-primary text-white py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="mb-4 mb-md-0 text-center">
            <Image src="ona.png" fluid className="mb-3 footer" />
            <p className="mb-0">©2024 Copyright: Hospital das Clínicas.</p>
            <p className="mb-0">Todos os direitos reservados.</p>
          </Col>
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">Links Úteis</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-white">Início</a></li>
              <li><a href="#instituicao" className="text-white">Intituição</a></li>
              <li><a href="#" className="text-white">Serviços</a></li>
              <li><a href="#contato" className="text-white">Contato</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5 className="text-uppercase mb-3">Siga-nos</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
              <li><a href="#" className="text-white">Instagram</a></li>
              <li><a href="#" className="text-white">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;  