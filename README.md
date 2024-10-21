<h1>Sistema de Reservas de Salas - Frontend</h1>

<p>
Este é o frontend do projeto <strong> Sistema de Reservas de Salas,</strong> desenvolvido em React. A aplicação permite que os usuários visualizem, reservem e gerenciem salas de forma intuitiva e prática.
</p>

<h1>Tecnologias Utilizadas</h1>
<li><strong>React: </strong> Biblioteca JavaScript para construção de interfaces de usuário.</li>
<li><strong>API Laravel:</strong> Backend em PHP para gerenciar o armazenamento e manipulação de dados.</li>
<li><strong>Axios:</strong> Cliente HTTP para comunicação com a API Laravel.</li>
<li><strong>Bootstrap:</strong> Framework CSS para design responsivo e modais..</li>
<li><strong>React-Router-Dom:</strong> Para navegação entre diferentes componentes.</li>
<li><strong>React Data Table Component:</strong>  Para a exibição de dados em formato de tabela.</li>


<h1>Funcionalidade de Interface</h1>
<ul>
    <li><strong>Gerenciamento de Salas:</strong>
        <ul>
            <li><strong>Listagem de Salas:</strong> Tabela responsiva que exibe todas as salas disponíveis, com opções para editar e excluir.</li>
            <li><strong>Cadastro de Salas:</strong> Formulário para adicionar novas salas, onde o usuário pode selecionar as salas cadastradas no banco de dados a partir de um <code>select</code>.</li>
        </ul>
    </li>
    <li><strong>Gerenciamento de Reservas:</strong>
        <ul>
            <li><strong>Listagem de Reservas:</strong> Tabela responsiva que exibe todas as reservas de salas, com opções para editar e excluir.</li>
            <li><strong>Cadastro de Reservas:</strong> Formulário para adicionar novas reservas, permitindo que o usuário escolha entre as salas disponíveis a partir de um <code>select</code> que busca as salas cadastradas no banco de dados.</li>
        </ul>
    </li>
    <li><strong>Modal de Exclusão:</strong> Modal de confirmação utilizando Bootstrap para garantir que o usuário deseja realmente excluir salas ou reservas.</li>
</ul>

<br>


<h1>Instruções de Instalação e Execução</h1>
<ol>
    <li><strong>Clone o repositório:</strong>
        <pre><code>git clone https://github.com/felipexavier26/ReservaFrontend.git</code></pre>
    </li>
    <li><strong>Navegue até o diretório do projeto:</strong>
        <pre><code>cd ReservaFrontend</code></pre>
    </li>
    <li><strong>Instale as dependências:</strong>
        <pre><code>npm install</code></pre>
    </li>
    <li><strong>Inicie o servidor de desenvolvimento:</strong>
        <pre><code>npm run dev</code></pre>
    </li>
</ol>


