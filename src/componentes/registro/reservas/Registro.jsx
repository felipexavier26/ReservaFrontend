import React, { useState } from 'react';
import Input from '../../form/Input';
import SelectForm from '../../form/SelectForm';
import URL from '../../../api/Index';
import './registro.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Registro() {
    const navigate = useNavigate();

    const [nomeSala, setNomeSala] = useState('');
    const [nomeResponsavel, setNomeResponsavel] = useState('');
    const [dtInicio, setDtInicio] = useState('');
    const [dtTermino, setDtTermino] = useState('');
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const InsertData = {
            nome_sala: nomeSala,
            nome_responsavel: nomeResponsavel,
            dt_hr_inicio: dtInicio,
            dt_hr_termino: dtTermino
        };

        URL.post('/reserva_salas', InsertData)
            .then((response) => {
                console.log(response.data);
                if (response.data.status) {
                    alert('Reserva cadastrada com sucesso!');
                    setNomeSala('')
                    setNomeResponsavel('')
                    setDtInicio()
                    setDtTermino('')
                    setErrors({});
                    setErrorMessage('');
                    navigate("/reservas");
                }
            })
            .catch((error) => {
                console.error('Erro ao cadastrar a reserva:', error);

                if (error.response && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                    setErrorMessage('');
                } else if (error.response && error.response.data.message) {
                    setErrorMessage(error.response.data.message);
                    setErrors({});
                } else {
                    setErrorMessage('Erro ao cadastrar a reserva. Tente novamente.');
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
                    <SelectForm
                        text="Nome sala"
                        name="nome_sala"
                        value={nomeSala}
                        handleOnchange={(e) => setNomeSala(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <Input
                        type="text"
                        text="Nome do responsável"
                        name="nome_responsavel"
                        placeholder="Digite o nome do responsável"
                        value={nomeResponsavel}
                        handleOnChange={(e) => setNomeResponsavel(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <Input
                        type="datetime-local"
                        text="Data início"
                        name="dt_hr_inicio"
                        value={dtInicio}
                        handleOnChange={(e) => setDtInicio(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <Input
                        type="datetime-local"
                        text="Data término"
                        name="dt_hr_termino"
                        value={dtTermino}
                        handleOnChange={(e) => setDtTermino(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default Registro;
