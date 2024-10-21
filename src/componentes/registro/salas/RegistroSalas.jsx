import React, { useState } from 'react';
import Input from '../../form/Input';
import URL from '../../../api/Index';
import './registro.css'
import { Navigate, useNavigate } from 'react-router-dom';

function RegistroSalas() {
    const navigate = useNavigate();

    const [nomeSala, setNomeSala] = useState('');
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const InsertData = {
            nome_sala: nomeSala,
        };

        URL.post('/salas', InsertData)
            .then((response) => {
                console.log(response.data);
                if (response.data.status) {
                    alert('Sala cadastrada com sucesso!');
                    setNomeSala('')
                    navigate("/salas");
                }
            })
            .catch((error) => {
                console.error('Erro ao cadastrar a sala:', error);

                if (error.response && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                    setErrorMessage('');
                } else if (error.response && error.response.data.message) {
                    setErrorMessage(error.response.data.message);
                    setErrors({});
                } else {
                    setErrorMessage('Erro ao cadastrar a sala. Tente novamente.');
                    setErrors({});
                }
            });
    };

    return (
        <div className="container-sm mt-1">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center mb-3">Cadastre-se Agora</h2>

                {errorMessage && (
                    <ul className="alert alert-danger">
                        <li>
                            {errorMessage}
                        </li>

                    </ul>
                )}

                {Object.keys(errors).length > 0 && (
                    <ul className="alert alert-danger">
                        <span>
                            {Object.keys(errors).map((key, index) => (
                                <li key={index}>{errors[key][0]}</li>
                            ))}
                        </span>
                    </ul>
                )}



                <div className="mb-3">
                    <Input
                        type="text"
                        text="Nome da Sala"
                        name="nome_sala"
                        placeholder="Digite o nome da sala"
                        value={nomeSala}
                        handleOnChange={(e) => setNomeSala(e.target.value)}
                    />
                </div>



                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default RegistroSalas;
