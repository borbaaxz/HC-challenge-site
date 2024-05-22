import { Container, Row, Col, Image, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          <div>
            <h1 className="display-4 font-weight-bold mb-4">
              Instituto da Criança e do Adolescente
            </h1>
            <p className="lead mb-4">
            Dedicados a criar um futuro mais saudável para as crianças, com tecnologia de ponta e corações cheios de esperança.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="#instituicao"
              className="shadow-sm"
            >
              Saiba mais
            </Button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="text-center">
            <Image
              src="homevector.png"
              id="homevector"
              fluid
              className="img-fluid animate-bounce"
              alt="Home Vector"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;