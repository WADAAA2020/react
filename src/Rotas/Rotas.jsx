import { Routes, Route } from "react-router-dom";
import { Inicial } from '../Paginas/Inicial'
import { Autor } from '../Paginas/Autor';
import { Curiosidades } from '../Paginas/Curiosidades';
import { Conteudo } from '../Componentes/Conteudo';

export function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Inicial />} >
                <Route index element={<Conteudo />} />
                <Route path='autor' element={<Autor />} />
                <Route path='curiosidades' element={<Curiosidades />} />
            </Route>    
        </Routes>
    )
}