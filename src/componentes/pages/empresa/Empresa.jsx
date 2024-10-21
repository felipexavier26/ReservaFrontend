import React from 'react';
import { Link } from 'react-router-dom';

function Empresa() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Sobre a Empresa</h2>
            <p>
                Empresa tem se dedicado a oferecer soluções de alta qualidade no gerenciamento de reservas de salas. Nossa missão é proporcionar uma experiência excepcional aos nossos clientes, facilitando o processo de reserva e gestão de espaços.
            </p>
            <h4 className="mt-4">Missão</h4>
            <p>
                Nossa missão é simplificar a forma como as pessoas reservam e utilizam espaços, promovendo eficiência e organização.
            </p>
            <h4 className="mt-4">Visão</h4>
            <p>
                Ser a plataforma líder em gerenciamento de reservas de salas, reconhecida pela sua inovação e excelência no atendimento ao cliente.
            </p>
            <h4 className="mt-4">Valores</h4>
            <ul>
                <li>Inovação: Estamos sempre em busca de novas soluções e melhorias.</li>
                <li>Transparência: Valorizamos a honestidade e a clareza em nossas ações.</li>
                <li>Compromisso: Estamos comprometidos com a satisfação dos nossos clientes.</li>
                <li>Trabalho em equipe: Acreditamos que juntos somos mais fortes.</li>
            </ul>
            <h4 className="mt-4">Nossos Serviços</h4>
            <p>
                Oferecemos uma plataforma intuitiva para reservas de salas, com recursos como:
            </p>
            <ul>
                <li>Reserva rápida e fácil de salas.</li>
                <li>Gerenciamento de horários e disponibilidade.</li>
                <li>Suporte dedicado para nossos clientes.</li>
            </ul>
            <h4 className="mt-4">Contato</h4>
            <p>
                Para mais informações sobre nossos serviços, entre em contato conosco através do nosso <Link to="/contato">formulário de contato</Link>.
            </p>
        </div>
    );
}

export default Empresa;
