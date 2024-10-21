import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import URL from '../../../api/Index';


function ModalDelete({ show, handleClose, sala, setData, salas }) {
    const handleConfirmDelete = () => {
        URL.delete(`/reserva_salas/${sala.id}/`) 
            .then((response) => {
                console.log(response.data);
                setData(salas.filter(s => s.id !== sala.id));
                alert(`Sala com ID: ${sala.id} deletada com sucesso!`);
                handleClose(); 
                window.location.reload(); 
            })
            .catch((error) => {
                console.error("Erro ao deletar sala:", error);
                alert("Erro ao deletar sala. Tente novamente.");
            });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar Exclusão</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Você tem certeza que deseja excluir a sala: <strong>{sala.nome_sala}</strong>?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={handleConfirmDelete}>
                    Deletar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDelete;
