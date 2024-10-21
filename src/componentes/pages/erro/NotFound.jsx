// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Estilos personalizados

function NotFound() {
    return (
        <div className="not-found-container">
            <h1>404</h1>
            <h2>Oops! Página não encontrada.</h2>
            <p>A página que você está procurando não existe ou foi movida.</p>
            <Link to="/" className="home-link">
                Voltar para a página inicial
            </Link>
        </div>
    );
}

export default NotFound;
