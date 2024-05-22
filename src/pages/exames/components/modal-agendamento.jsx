import { useState } from 'react';
import { Modal, Form, Alert, Button } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function ModalAgendamento({ show, onHide, title, successMessage, tipo }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: '',
    tipo,
  });
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.nome.trim()) {
      errors.nome = 'O campo Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      errors.email = 'O campo Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email inválido';
    }

    if (!formData.telefone.trim()) {
      errors.telefone = 'O campo Telefone é obrigatório';
    }

    if (!formData.data.trim()) {
      errors.data = 'O campo Data é obrigatório';
    }

    if (Object.keys(errors).length === 0) {
      // Enviar dados do formulário
      console.log('Dados do formulário:', formData);

      fetch('https://script.google.com/macros/s/AKfycbxx3EtauB-DMKGIzHpsQMguCEWob4e4r2wqATqFqrRWwHADuJRQqIW8SR395q0pM-WNcg/exec',{
        method: 'POST',
        body: JSON.stringify(formData)
      }).then(response => {
        console.log('response', response);
      });
  
      setShowConfirmation(true);
    } else {
      setErrors(errors);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showConfirmation ? (
          <Alert variant="success">
            <Alert.Heading>Agendamento confirmado!</Alert.Heading>
            <p>{successMessage}</p>
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                isInvalid={!!errors.nome}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nome}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Digite seu telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                isInvalid={!!errors.telefone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefone}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formData">
              <Form.Label>Data Preferencial</Form.Label>
              <Form.Control
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
                isInvalid={!!errors.data}
              />
              <Form.Control.Feedback type="invalid">
                {errors.data}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" id="agendar">
              Agendar
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ModalAgendamento;