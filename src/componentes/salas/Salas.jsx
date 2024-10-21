import React, { useEffect, useState } from 'react';
import './salas.css';
import URL from '../../api/Index';
import ModalView from '../modal/modalSalas/ModalView';
import ModalDelete from '../modal/modalSalas/ModalDelete';
import ModalUpdate from '../modal/modalSalas/ModalUpdate';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

function Salas() {
    const [salas, setData] = useState([]);
    const [filteredSalas, setFilteredSalas] = useState([]);
    const [selectedSala, setSelectedSala] = useState(null);
    const [showView, setShowView] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        URL.get('/salas')
            .then((response) => {
                console.log(response.data);
                setData(response.data.salas);
                setFilteredSalas(response.data.salas); 
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    useEffect(() => {
        const filteredItems = salas.filter((sala) => {
            return sala.nome_sala && sala.nome_sala.toLowerCase().includes(filterText.toLowerCase());
        });
        setFilteredSalas(filteredItems);
    }, [filterText, salas]);

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
        },
        {
            name: <b>Ação</b>,
            cell: row => (
                <div className="d-flex flex-wrap justify-content-start" style={{  minWidth: '280px' }}>
                    <Button className="btn btn-info btn-custom me-2" onClick={() => handleShowView(row)}>Visualizar</Button>
                    <Button className="btn btn-primary btn-custom me-2" onClick={() => handleShowUpdate(row)}>Atualizar</Button>
                    <Button className="btn btn-danger btn-custom" onClick={() => handleShowDelete(row)}>Deletar</Button>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="container-xl container-sala mt-5">

                <h2 className="text-center flex-grow-1 mb-0">Lista de Salas</h2> <br />

                <div className="container-fluid mb-5 d-flex align-items-center justify-content-between">
                    <Link to="/registrosalas">
                        <Button className="btn btn-primary btn-custom me-2">
                            Cadastrar
                        </Button>
                    </Link>

                    <div className="col-4">
                        <input
                            type="text"
                            placeholder="Pesquisar salas..."
                            className="form-control"
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                        />
                    </div>
                </div>




                <DataTable
                    columns={columns}
                    data={filteredSalas}
                    pagination
                    highlightOnHover
                    striped
                    noDataComponent="Nenhuma sala disponível" 
                />

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

export default Salas;
