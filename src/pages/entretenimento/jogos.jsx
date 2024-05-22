import { Container, Row, Col, Button } from "react-bootstrap";

function Jogos() {
  const openFullscreen = (gameId) => {
    const game = document.getElementById(gameId);
    if (game.requestFullscreen) {
      game.requestFullscreen();
    } else if (game.mozRequestFullScreen) {
      game.mozRequestFullScreen();
    } else if (game.webkitRequestFullscreen) {
      game.webkitRequestFullscreen();
    } else if (game.msRequestFullscreen) {
      game.msRequestFullscreen();
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Área de Jogos</h1>
      <Row>
        <Col md={12} className="mb-4">
          <div>
           
              <iframe id="game" src="https://previews.customer.envatousercontent.com/files/284246327/index.html" allowfullscreen 

                  width={"100%"}
                  height={"500px"}
              ></iframe>
              <Button
                variant="primary"
                onClick={() => openFullscreen("game")}
              >
                Tela Cheia
              </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Jogos;