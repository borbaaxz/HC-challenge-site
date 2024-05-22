import Exame from './components/exame';
import AgendamentoForm from './components/modal-agendamento';
import { useState } from 'react';	

function Colonoscopia() {
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
      titulo="Colonoscopia"
      descricao="A colonoscopia é um exame utilizado para analisar a saúde do interior do cólon e do reto usando um colonoscópio, um tubo fino e flexível com uma luz e uma câmera na ponta. Com ele, é possível identificar lesões sugestivas de câncer colorretal, pólipos e outras condições médicas."
      videoUrl="https://www.youtube.com/embed/j1ZBcF054BE"
      onAgendar={handleShowModal}
     />   
      <AgendamentoForm
      show={showModal}
      onHide={handleHideModal}
      title="Agendar Exame de Colonoscopia"
      successMessage="Seu agendamento foi realizado com sucesso. Obrigado!"
      tipo="Colonoscopia"
     />
    </>
  );
}

export default Colonoscopia;