import React, { useState, useEffect } from 'react';
import './styles.css'
import URL from '../../api/Index';

function SelectForm({ text, name, handleOnchange }) {
    const [salas, setSalas] = useState([]);

    useEffect(() => {
        URL.get('/salas')
            .then((response) => {
                console.log(response.data.salas);
                setSalas(response.data.salas);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='form_control'>
            <label htmlFor={name} className='mb-1'>{text}</label>
            <select
                name={name}
                onChange={handleOnchange}                
                className="form-control"
            >
                <option value="">Selecione uma opção</option>
                {salas.length > 0 ? (
                    salas.map((sala) => (
                        <option value={sala.nome_sala} key={sala.id}>
                            {sala.nome_sala}
                        </option>
                    ))
                ) : (
                    <option disabled>Nenhuma opção disponível</option>
                )}
            </select>
        </div>
    );
}

export default SelectForm;
