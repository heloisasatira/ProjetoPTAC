import { useState } from "react";

import { Link } from "react-router-dom";

import "./style.css";

export default function ToDo() {
    const [atividade, setAtividade] = useState("");//definir que inicialmente atividade será uma string

    const [lista, setLista] = useState([]);//definir que lista será um array

    const [id, setId] = useState(1);// "estado" para contar os ids

    const [idUsuario, setIdUsuario] = useState(1);
    const [listaUsuario, setListaUsuario] = useState([]);//definir que atividade2 será um array
    const [nome, setNome] = useState("");//definir que nome será um array


    const salvarN = (e) => {//para coletar o nome do usuário
        e.preventDefault();//previnir a ação de enviar o formulário
        setListaUsuario([...listaUsuario, {
            nome: nome,
            id: idUsuario //conceder o id atual
        }]);
        setIdUsuario(id + 1);
        setNome("");
        console.log(listaUsuario);
    };


    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id
        }]);
        setId(id + 1);
        setAtividade("");
    };
    const remover = (id) => {
        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
        const auxLista = [];
        lista.map((lista) => {
            if (lista.id !== id) {
                auxLista.push(lista);
            }
        });
        setLista(auxLista);
    }
    return (
        <div class="container">
            <Link to="/">home</Link>


            <h4>Adicione aqui o seu nome</h4>
            <form class="form" onSubmit={salvarN}>
                <input type="text"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value) }} />
                <button>nome de usuário</button>
            </form>
            {listaUsuario.map((user) =>
                <ul key={user.id}>
                    <li class="nome">
                        <p>{user.nome}</p>
                    </li>
                </ul>
           )}
       
            <h3>Liste aqui os seus artistas favoritos</h3>
            <form onSubmit={salvar}>
                <input type="text"
                    value={atividade}
                    onChange={(e) => { setAtividade(e.target.value) }} />
                <button>add</button>
            </form>

            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        <p>{ativ.atividade}</p>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
           )}

        </div>
    );
}
