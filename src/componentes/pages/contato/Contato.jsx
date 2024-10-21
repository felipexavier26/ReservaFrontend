import React, { useState } from 'react';
import './contato.css'
import Input from '../../form/Input';
import Textarea from '../../form/Textarea';


function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        setFormData({ nome: '', email: '', mensagem: '' });
    };

    return (
        <div className="container-sm mt-4"> {/* Diminuiu mt-5 para mt-4 */}
            <h2 className="text-center mb-3">Entre em Contato Conosco</h2> {/* Diminuiu mb-4 para mb-3 */}
            <form onSubmit={handleSubmit}>
                <div className="mb-2"> {/* Diminuiu mb-3 para mb-2 */}
                    <Input
                        type="text"
                        text="Nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-2"> {/* Diminuiu mb-3 para mb-2 */}
                    <Input
                        type="email"
                        text="Email"
                        name="email"
                        placeholder="Digite seu E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-2"> {/* Diminuiu mb-3 para mb-2 */}
                    <Textarea
                        text="Mensagem"
                        name="mensagem"
                        placeholder="Digite sua mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>

    );
}

export default Contato;
