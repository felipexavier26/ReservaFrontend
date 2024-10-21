import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import URL from '../../../api/Index';
import Input from '../../form/Input';

function ModalUpdate({ show, handleClose, sala, setData }) {
    const [nomeSala, setNomeSala] = useState('');
    const [nomeResponsavel, setNomeResponsavel] = useState('');
    const [dtInicio, setDtInicio] = useState('');
    const [dtTermino, setDtTermino] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (sala) {
            setNomeSala(sala.nome_sala);
            setNomeResponsavel(sala.nome_responsavel);
            setDtInicio(sala.dt_hr_inicio);
            setDtTermino(sala.dt_hr_termino);
            setStatus(sala.status || '');
        }
    }, [sala]);



    const handleUpdate = () => {
        const updatedData = {
            nome_sala: nomeSala,
            nome_responsavel: nomeResponsavel,
            dt_hr_inicio: dtInicio,
            dt_hr_termino: dtTermino,
            status: status,
        };

        URL.put(`/reserva_salas/${sala.id}`, updatedData)
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
                else if (error.response && error.response.data.errors.nome_responsavel) {
                    alert(error.response.data.errors.nome_responsavel);
                }

                else if (error.response && error.response.data.errors.dt_hr_inicio) {
                    alert(error.response.data.errors.dt_hr_inicio);
                }

                else if (error.response && error.response.data.errors.dt_hr_termino) {
                    alert(error.response.data.errors.dt_hr_termino);
                }
                else if (error.response && error.response.data.errors.status) {
                    alert(error.response.data.errors.status);
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
                <div className="mb-3">
                    <Input
                        text='Nome do Responsável'
                        type="text"
                        name="nomeResponsavel"
                        value={nomeResponsavel}
                        placeholder="Digite o nome do responsável"
                        handleOnChange={(e) => setNomeResponsavel(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <Input
                        text='Data e Hora de Início'
                        type="datetime-local"
                        name="dtInicio"
                        value={dtInicio}
                        handleOnChange={(e) => setDtInicio(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <Input
                        text='Data e Hora de Término'
                        type="datetime-local"
                        name="dtTermino"
                        value={dtTermino}
                        handleOnChange={(e) => setDtTermino(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="mb-1"><b>Status</b></label>
                    <select
                        style={{ border: '1px solid #14458b', padding: '0.7em', }}
                        id="status"
                        name="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="form-control select-custom"
                    >
                        <option value="">Selecione o status</option>
                        <option value="ativas">Ativas</option>
                        <option value="canceladas">Canceladas</option>
                    </select>
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
