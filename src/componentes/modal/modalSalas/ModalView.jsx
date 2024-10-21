import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalView({ show, handleClose, sala }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="text-center">Detalhes da Sala</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <td>{sala.id}</td>
                        </tr>
                        <tr>
                            <th>Nome da Sala</th>
                            <td>{sala.nome_sala}</td>
                        </tr>

                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalView;
