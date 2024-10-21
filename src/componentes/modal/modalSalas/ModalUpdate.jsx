import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import URL from '../../../api/Index';
import Input from '../../form/Input';

function ModalUpdate({ show, handleClose, sala, setData }) {
    const [nomeSala, setNomeSala] = useState('');

    useEffect(() => {
        if (sala) {
            setNomeSala(sala.nome_sala);
        }
    }, [sala]);

    


    const handleUpdate = () => {
        const updatedData = {
            nome_sala: nomeSala,
        };

        URL.put(`/salas/${sala.id}`, updatedData)
            .then((response) => {
                setData((prev) =>
                    prev.map((s) => (s.id === sala.id ? response.data.salas : s))
                );
                alert('Sala atualizada com sucesso!');
                handleClose();
                window.location.reload(); 
            })
            .catch((error) => {

                if (error.response && error.response.data.message) {
                    alert(error.response.data.message);
                }
                else if (error.response && error.response.data.errors.nome_sala) {
                    alert(error.response.data.errors.nome_sala);
                }               
                else {
                    alert('Erro ao atualizar a sala. Tente novamente.');
                }
            });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Atualizar Sala</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <Input
                        text='Nome da Sala'
                        type="text"
                        name="nomeSala"
                        value={nomeSala}
                        placeholder="Digite o nome da sala"
                        handleOnChange={(e) => setNomeSala(e.target.value)}
                    />
                </div>
               

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                    Atualizar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalUpdate;
