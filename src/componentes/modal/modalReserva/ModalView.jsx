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
                            <th>Nome da Sala</th>
                            <td>{sala.nome_sala}</td>
                        </tr>
                        <tr>
                            <th>Data e Hora de Início</th>
                            <td>{new Date(sala.dt_hr_inicio).toLocaleString('pt-BR')}</td>
                        </tr>
                        <tr>
                            <th>Data e Hora de Término</th>
                            <td>{new Date(sala.dt_hr_termino).toLocaleString('pt-BR')}</td>
                        </tr>
                        <tr>
                            <th>Nome do Responsável</th>
                            <td>{sala.nome_responsavel}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{sala.status}</td>
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
