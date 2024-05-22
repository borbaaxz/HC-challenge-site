import Exame from './components/exame';
import AgendamentoForm from './components/modal-agendamento';
import { useState } from 'react';	

function Ultrassonografia() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Exame
      titulo="Ultrassonografia"
      descricao="O exame de ultrassom, também chamado ultrassonografia ou ecografia, é um dos exames de imagem mais usados na medicina. Esse procedimento não invasivo permite visualizar, com detalhes, as movimentações das estruturas internas do paciente, bem como seus órgãos e tecidos."
      videoUrl="https://www.youtube.com/embed/QlI5whLlwWg"
      onAgendar={handleShowModal}
     />   
      <AgendamentoForm
      show={showModal}
      onHide={handleHideModal}
      title="Agendar Exame de Ultrassonografia"
      successMessage="Seu agendamento foi realizado com sucesso. Obrigado!"
      tipo="Ultrassonografia"
     />
    </>
  );
}

export default Ultrassonografia;