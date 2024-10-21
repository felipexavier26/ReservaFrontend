import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import URL from '../../../api/Index';
import ModalView from '../../modal/modalReserva/ModalView';
import ModalDelete from '../../modal/modalReserva/ModalDelete';
import ModalUpdate from '../../modal/modalReserva/ModalUpdate';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Reservas.css';

function Reservas() {
    const [salas, setData] = useState([]);
    const [selectedSala, setSelectedSala] = useState(null);
    const [showView, setShowView] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        URL.get('/reserva_salas')
            .then((response) => {
                console.log(response.data);
                setData(response.data.salas);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    const handleShowView = (sala) => {
        setSelectedSala(sala);
        setShowView(true);
    };

    const handleCloseView = () => {
        setShowView(false);
        setSelectedSala(null);
    };

    const handleShowUpdate = (sala) => {
        setSelectedSala(sala);
        setShowUpdate(true);
    };

    const handleCloseUpdate = () => {
        setShowUpdate(false);
        setSelectedSala(null);
    };

    const handleShowDelete = (sala) => {
        setSelectedSala(sala);
        setShowDelete(true);
    };

    const handleCloseDelete = () => {
        setShowDelete(false);
        setSelectedSala(null);
    };

    const columns = [
        {
            name: <b>ID</b>,
            selector: row => row.id,
            sortable: true,
            width: '80px',
            minWidth: '60px',
        },
        {
            name: <b>Nome da Sala</b>,
            selector: row => row.nome_sala,
            sortable: true,
            width: '200px',
            minWidth: '60px',

        },
        {
            name: <b>Data e Hora de Início</b>,
            selector: row => new Date(row.dt_hr_inicio).toLocaleString('pt-BR'),
            sortable: true,
            width: '200px',
            minWidth: '60px',

        },
        {
            name: <b>Data e Hora de Término</b>,
            selector: row => new Date(row.dt_hr_termino).toLocaleString('pt-BR'),
            sortable: true,
            width: '200px',
            minWidth: '60px',
        },
        {
            name: <b>Nome do Responsável</b>,
            selector: row => row.nome_responsavel,
            sortable: true,
            width: '200px',
            minWidth: '60px',
        },
        {
            name: <b>Status</b>,
            selector: row => row.status,
            sortable: true,
            width: '130px',
            minWidth: '60px',
        },
        {
            name: <b>Ação</b>,
            cell: (row) => (
                <div className="d-flex flex-wrap justify-content-start" style={{ width: '330px', minWidth: '60px' }}>
                    <Button className="btn btn-info btn-custom me-2 mb-2" onClick={() => handleShowView(row)}>Visualizar</Button>
                    <Button className="btn btn-primary btn-custom me-2 mb-2" onClick={() => handleShowUpdate(row)}>Atualizar</Button>
                    <Button className="btn btn-danger btn-custom mb-2" onClick={() => handleShowDelete(row)}>Deletar</Button>
                </div>
            ),
            
            
}
    ];

const filteredSalas = salas.filter(
    sala =>
        sala.nome_sala.toLowerCase().includes(filterText.toLowerCase()) ||
        sala.nome_responsavel.toLowerCase().includes(filterText.toLowerCase())
);

return (
    <>


        <div className="container-xl mt-5">
            <h2 className="text-center flex-grow-1 mb-0">Reservas</h2>
            <div className="container-fluid mb-5 d-flex align-items-center justify-content-between">
                <Link to="/registro">
                    <Button className="btn btn-primary btn-custom me-2">
                        Cadastrar
                    </Button>
                </Link>

                <div className="col-3">
                    <input
                        type="text"
                        placeholder="Pesquisar reservas..."
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
                    noDataComponent="Nenhuma reserva disponível"
                />
            </div>

            {selectedSala && showView && (
                <ModalView
                    show={showView}
                    handleClose={handleCloseView}
                    sala={selectedSala}
                />
            )}

            {selectedSala && showDelete && (
                <ModalDelete
                    show={showDelete}
                    handleClose={handleCloseDelete}
                    sala={selectedSala}
                    setData={setData}
                    salas={salas}
                />
            )}

            {selectedSala && showUpdate && (
                <ModalUpdate
                    show={showUpdate}
                    handleClose={handleCloseUpdate}
                    sala={selectedSala}
                    setData={setData}
                />
            )}
        </div>
    </>
);
}

export default Reservas;
