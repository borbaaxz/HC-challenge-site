import { Container, Row, Col, Image } from "react-bootstrap";

function Instituicao() {
  return (
    <Container className="my-5">
      <Row className="align-items-center flex-column-reverse flex-md-row">
        <Col md={7} className="mb-4 mb-md-0">
          <h1 className="display-4 mb-4">Instituto da Criança e do Adolescente</h1>
          <p className="lead mb-4">
            Fundado em 1976 por um grupo de pediatras liderados pelo Prof. Eduardo Marcondes, o Instituto da Criança do Hospital das Clínicas da FMUSP comemorou em dezembro de 2016, 40 anos homenageando seus pioneiros.
          </p>
          <hr className="mb-4" />
          <p>
            O instituto ocupa uma área de cerca de 25 mil metros quadrados, destinada ao atendimento ambulatorial e internações com 226 leitos e mais de 70 mil atendimentos ambulatoriais por ano.
          </p>
          <p>
            Atende pacientes do Sistema Único de Saúde e de operadoras de planos de saúde (Saúde Suplementar) por meio de suas enfermarias, Centro Cirúrgico, UTI Pediátrica, Ambulatório, Unidade de Diálise, Pronto-Socorro e Centro de Diagnóstico.
          </p>
          <p className="mb-4">
            A utilização de tecnologia de ponta possibilita a realização de procedimentos diagnósticos e terapêuticos de alta complexidade, como cirurgias de grande porte, transplantes, hemodiálise especializada, tratamento de recém-nascidos de alto risco, atendimento de Terapia Intensiva e assistência a doenças crônicas complexas na infância e na adolescência.
          </p>
        </Col>
        <Col md={5} className="d-flex justify-content-center mb-4 mb-md-0">
          <Image
            src="fmusp.png"
            fluid
            rounded
            className="shadow img-vertical"
            alt="Instituto da Criança e do Adolescente"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Instituicao;