import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState, useRef } from 'react';
import { FaVolumeUp, FaVolumeOff } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
function Exame({ titulo, descricao, videoUrl, onAgendar  }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const synth = window.speechSynthesis;
  const textRef = useRef(null);

  const handlePlayAudio = () => {
    if (!isPlaying && textRef.current) {
      const utterance = new SpeechSynthesisUtterance(textRef.current.textContent);
      utterance.lang = 'pt-BR';
      synth.speak(utterance);
      setIsPlaying(true);
    }
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>
            {titulo}{' '}
            <Button
              variant="primary"
              onClick={handlePlayAudio}
              disabled={isPlaying}
            >
              {isPlaying ? <FaVolumeOff /> : <FaVolumeUp />}
            </Button>
          </h1>
          <p ref={textRef}>{descricao}</p>
          <Button variant="primary" onClick={onAgendar}>
            Agendar Exame
          </Button>
        </Col>
        <Col md={6}>
          <div className='videoWrapper'>
            <iframe
              width={"100%"}
              height={"100%"}
              src={videoUrl}
              title={titulo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Exame;