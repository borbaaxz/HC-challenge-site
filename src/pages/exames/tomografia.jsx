import Exame from './components/exame';
import AgendamentoForm from './components/modal-agendamento';
import { useState } from 'react';	

function Tomografia() {
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
      titulo="Tomografia"
      descricao="A tomografia é um um procedimento de imagem de raio-x computadorizado, responsável por produzir imagens de excelente qualidade dos órgãos internos e diagnosticar diversas doenças potencialmente graves. Além de ser indolor, é um exame não invasivo, simples e rápido."
      videoUrl="https://www.youtube.com/embed/fX_kaHguMz0"
      onAgendar={handleShowModal}
     />   
      <AgendamentoForm
      show={showModal}
      onHide={handleHideModal}
      title="Agendar Exame de Ressonância Magnética"
      successMessage="Seu agendamento foi realizado com sucesso. Obrigado!"
      tipo="Tomografia"
     />
    </>
  );
}

export default Tomografia;