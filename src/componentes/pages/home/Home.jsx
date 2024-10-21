import React from 'react';

function Home() {
    return (
        <div className="container text-center mt-5">
            <h1>Sistema de Gerenciamento de Reservas de Salas</h1>
            <p className="mt-4">
                Bem-vindo ao nosso <strong>Sistema de Gerenciamento de Reservas de Salas</strong>, uma solução eficiente para organizar e otimizar o uso dos espaços disponíveis na sua instituição.
            </p>
            <p>
                Com o nosso sistema, você poderá:
            </p>
            <ul className="list-unstyled">
                <li><strong>Reservar Salas:</strong> Faça reservas de salas de forma rápida e fácil, selecionando a data e o horário desejados.</li>
                <li><strong>Gerenciar Reservas:</strong> Visualize, edite e cancele suas reservas a qualquer momento, garantindo flexibilidade e controle.</li>
                <li><strong>Consultar Disponibilidade:</strong> Verifique a disponibilidade de salas em tempo real para planejar suas atividades com eficiência.</li>
                <li><strong>Interface Amigável:</strong> Navegue por uma interface intuitiva e fácil de usar, projetada para tornar a experiência do usuário a mais agradável possível.</li>
            </ul>
            <p className="mt-4">
                Aproveite a comodidade e a organização que o nosso sistema oferece. Reserve sua sala hoje e maximize a utilização dos espaços disponíveis!
            </p>
        </div>
    );
}

export default Home;
