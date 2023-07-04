import Home from '../Componentes/Home'
import Paciente from '../Componentes/Paciente'
import Agendamentos from '../Componentes/Paciente'
import Medico from '../Componentes/Paciente'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>} />;
            <Route exact path="/Home" element={<Home/>}/>;
            <Route exact path="/pacientes" element={<Paciente/>}/>;
            <Route exact path="/consultas" element={<Agendamentos/>}/>;
            <Route exact path="/medicos" element={<Medico/>}/>;
        </Routes>
            
        </BrowserRouter>




    );

}