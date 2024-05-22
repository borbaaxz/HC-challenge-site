import Exame from './components/exame';
import AgendamentoForm from './components/modal-agendamento';
import { useState } from 'react';	

function Ecocardiograma() {
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
      titulo="Ecocardiograma"
      descricao="O ecocardiograma é um exame que utiliza ondas sonoras para produzir imagens do seu coração. Com o teste é possível que o médico avalie e identifique possíveis doenças cardíacas, além de ser fundamental para o planejamento terapêutico e prognóstico delas."
      videoUrl="https://www.youtube.com/embed/9_mlupAUuYE"
      onAgendar={handleShowModal}
     />   
      <AgendamentoForm
      show={showModal}
      onHide={handleHideModal}
      title="Agendar Exame de Ecoardiograma"
      successMessage="Seu agendamento foi realizado com sucesso. Obrigado!"
      tipo="Ecoardiograma"
     />
    </>
  );
}

export default Ecocardiograma;