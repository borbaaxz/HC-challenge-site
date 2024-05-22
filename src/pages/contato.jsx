import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contato() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Row>
            <Col md={7} className="mb-4 mb-md-0">
              <div className="contact-info fs-5 lh-lg">
                <p>
                  <strong>ICr Instituto da Criança e do Adolescente</strong>
                  <br />
                  <span className="">(11) 2661-8500</span>
                </p>
                <p className="mt-4">
                  <strong>Marcação de consultas - 2ª a 6ª feira</strong>
                  <br />
                  <span className="">
                    ICr <br/> (11) 2661-8635 <br/> (7:00 às 16:00)
                    <br />
                    ITACI  <br/>  (11) 2661-8962 <br/> (11) 2661-8963  <br/>  (14:00 às 16:00)
                  </span>
                </p>
                <p className="mt-4">
                  <strong>Agendamento de exames - 2ª a 6ª feira</strong>
                  <br />
                  <span className="">
                    (11) 2661-8548
                    <br />
                    (11) 2661-8670
                    <br />
                    Pessoalmente no 2º andar do ICr <br/>(11:00 às 15:00)
                  </span>
                </p>
              </div>
            </Col>
            <Col md={5}>
              <div className="bg-light p-4 rounded">
                <h5 className="mb-4 fs-3">Envie sua dúvida</h5>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Nome"
                      className="fs-5 py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="fs-5 py-2"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Mensagem"
                      className="fs-5 py-2"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 fs-5 py-2"
                  >
                    Enviar
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contato;