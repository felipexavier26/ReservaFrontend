import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import URL from '../../../api/Index';

function ReservasCanceladas() {
    const [salas, setSalas] = useState([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        URL.get('/reserva_salas')
            .then((response) => {
                console.log(response.data);
                setSalas(response.data.salas.filter(sala => sala.status === 'canceladas'));
            })
            .catch((error) => {
                console.error("Erro ao buscar salas:", error);
            });
    }, []);

    const columns = [
        {
            name: <b>ID</b>,
            selector: row => row.id,
            sortable: true,
        },
        {
            name: <b>Nome da Sala</b>,
            selector: row => row.nome_sala,
            sortable: true,
        },
        {
            name: <b>Data e Hora de Início</b>,
            selector: row => new Date(row.dt_hr_inicio).toLocaleString('pt-BR'),
            sortable: true,
        },
        {
            name: <b>Data e Hora de Término</b>,
            selector: row => new Date(row.dt_hr_termino).toLocaleString('pt-BR'),
            sortable: true,
        },
        {
            name: <b>Nome do Responsável</b>,
            selector: row => row.nome_responsavel,
            sortable: true,
        },
        {
            name: <b>Status</b>,
            selector: row => row.status,
            sortable: true,
        }
    ];

    const filteredSalas = salas.filter(
        sala =>
            sala.nome_sala.toLowerCase().includes(filterText.toLowerCase()) ||
            sala.nome_responsavel.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div className="container-xl mt-5">
            
            <h2 className='text-center mb-4'>Reservas Canceladas</h2>

            <div className="mb-3" style={{ textAlign: 'right' }}>
                <div className="col-4 d-inline-block">
                    <input
                        type="text"
                        placeholder="Pesquisar reservas canceladas..."
                        className="form-control"
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>
            </div>

            <div className="table-responsive">
                <DataTable
                    columns={columns}
                    data={filteredSalas}
                    pagination
                    highlightOnHover
                    striped
                    noDataComponent="Nenhuma reserva cancelada disponível"
                />
            </div>
        </div>
    );
}

export default ReservasCanceladas;
