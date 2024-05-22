import Exame from './components/exame';
import AgendamentoForm from './components/modal-agendamento';
import { useState } from 'react';	

function Ressonancia() {
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
      titulo="Ressonância Magnética"
      descricao="A ressonância magnética (RM) é um exame de diagnóstico por imagem não invasivo, seguro e completamente indolor. O equipamento com tecnologia de ponta gera imagens anatômicas detalhadas e tridimensionais de órgãos e tecidos moles."
      videoUrl="https://www.youtube.com/embed/gwtkEdd5YZk"
      onAgendar={handleShowModal}
     />   
      <AgendamentoForm
      show={showModal}
      onHide={handleHideModal}
      title="Agendar Exame de Ressonância Magnética"
      successMessage="Seu agendamento foi realizado com sucesso. Obrigado!"
      tipo="Ressonância Magnética"
     />
    </>
  );
}

export default Ressonancia;