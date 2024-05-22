import Exame from './components/exame';
import AgendamentoForm from './components/modal-agendamento';
import { useState } from 'react';	

function Radiologia() {
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
      titulo="Radiologia (raio-X)"
      descricao="O exame de radiografia, popularmente conhecido como raio X, é um método de imagem utilizado para produzir imagens de estruturas internas do corpo. O nome se popularizou assim por conta das pequenas doses de radiação ionizante (ou seja, os raios X). Além disso, esse é o método mais antigo e mais aplicado para diagnóstico por imagem dentro da Medicina. Através dele, pode-se, por exemplo, diagnosticar ossos fraturados, tumores e corpos estranhos, dentre outras inúmeras aplicações."
      videoUrl="https://www.youtube.com/embed/tFEU2VJn5pY"
      onAgendar={handleShowModal}
     />   
      <AgendamentoForm
      show={showModal}
      onHide={handleHideModal}
      title="Agendar Exame de Radiologia (raio-X)"
      successMessage="Seu agendamento foi realizado com sucesso. Obrigado!"
      tipo="Radiologia (raio-X)"
     />
    </>
  );
}

export default Radiologia;