import { Container, Row, Col } from "react-bootstrap";

function Desenhos() {
  return (
    <Container className="py-5">
      <Row>
        <Col md={8} className="mx-auto">
          <h1 className="text-center mb-4">Cinema Infantil</h1>
          <div className="embed-responsive">
                <iframe width="100%" height="600px"  src="https://www.youtube.com/embed/ahCEFiOZCUo" title="Pica-Pau em Português | LIVE | Compilação de Cenas Engraçadas | Desenhos Animados"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay" allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Desenhos;