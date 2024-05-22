import Exame from './components/exame';
import AgendamentoForm from './components/modal-agendamento';
import { useState } from 'react';	

function Endoscopia() {
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
      titulo="Endoscopia"
      descricao="Endoscopia é um exame voltado para a análise do sistema digestivo — mais especificamente, da chamada parte alta. Ele serve para diagnosticar doenças comuns, como úlcera, gastrite, refluxo e até os diferentes tipos de câncer que podem afetar essa região do organismo."
      videoUrl="https://www.youtube.com/embed/khObM6qHRfs"
      onAgendar={handleShowModal}
     />   
      <AgendamentoForm
      show={showModal}
      onHide={handleHideModal}
      title="Agendar Exame de Endoscopia"
      successMessage="Seu agendamento foi realizado com sucesso. Obrigado!"
      tipo="Endoscopia"
     />
    </>
  );
}

export default Endoscopia;