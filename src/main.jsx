import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './layout';
import Home from './pages/home';
import Instituicao from './pages/instituicao';
import Contato from './pages/contato';
import './styles/main.scss'

import Colonoscopia from './pages/exames/colonoscopia';
import Ecocardiograma from './pages/exames/ecocardiograma';
import Endoscopia from './pages/exames/endoscopia';
import Radiologia from './pages/exames/radiologia';
import Tomografia from './pages/exames/tomografia';
import Ultrassonografia from './pages/exames/ultrassonografia';
import Ressonancia from './pages/exames/ressonancia';

import Jogos from './pages/entretenimento/jogos';
import Desenhos from './pages/entretenimento/desenhos';

ReactDOM.createRoot(document.getElementById('root')).render(
<HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path="instituicao" element={<Instituicao />} />
          <Route path="contato" element={<Contato />} />
          <Route path='/exames/colonoscopia' element={<Colonoscopia/>} />
          <Route path='/exames/ecocardiograma' element={<Ecocardiograma/>} />
          <Route path='/exames/endoscopia' element={<Endoscopia/>} />
          <Route path='/exames/radiologia' element={<Radiologia/>} />
          <Route path='/exames/tomografia' element={<Tomografia/>} />
          <Route path='/exames/ultrassonografia' element={<Ultrassonografia/>} />
          <Route path='/exames/ressonancia' element={<Ressonancia/>} />
          <Route path='/entretenimento/jogos' element={<Jogos/>} />
          <Route path='/entretenimento/desenhos' element={<Desenhos />} />
        </Route>
      </Routes>
    </HashRouter>
)
