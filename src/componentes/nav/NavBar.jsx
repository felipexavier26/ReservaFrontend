import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './navbar.css';
import Home from '../pages/home/Home';
import Empresa from '../pages/empresa/Empresa';
import Contato from '../pages/contato/Contato';
import Reservas from '../reservas/reservaList/Reservas';
import ReservasAtivas from '../reservas/reservaAtivas/ReservasAtivas';
import ReservasCanceladas from '../reservas/reservaCanceladas/ReservasCanceladas';
import Registro from '../registro/reservas/Registro';
import RegistroSalas from '../registro/salas/RegistroSalas';
import Salas from '../salas/Salas';
import NotFound from '../pages/erro/NotFound';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <BrowserRouter>
                <nav className="navbar">
                    <div className="menu-icon" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                        <Link to="/empresa" onClick={toggleMenu}>Empresa</Link>
                        <Link to="/reservas" onClick={toggleMenu}>Reservas</Link>
                        <Link to="/reservasativas" onClick={toggleMenu}>Reservas Ativas</Link>
                        <Link to="/reservacancelado" onClick={toggleMenu}>Reservas Canceladas</Link>
                        <Link to="/salas" onClick={toggleMenu}>Salas</Link>
                        <Link to="/contato" onClick={toggleMenu}>Contato</Link>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/empresa" element={<Empresa />} />
                    <Route path="/reservas" element={<Reservas />} />
                    <Route path="/reservasativas" element={<ReservasAtivas />} />
                    <Route path="/reservacancelado" element={<ReservasCanceladas />} />
                    <Route path="/salas" element={<Salas />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/registrosalas" element={<RegistroSalas />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default NavBar;
