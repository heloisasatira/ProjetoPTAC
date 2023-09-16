import { useState } from "react";

import { Link } from "react-router-dom";

import "./style.css";

export default function ToDo() {
    const [atividade, setAtividade] = useState("");//definir que inicialmente atividade será uma string
    const [lista, setLista] = useState([]);//definir que lista será um array
    const [id, setId] = useState(1);// "estado" para contar os ids

    const [idUsuario, setIdUsuario] = useState(1);
    const [listaUsuario, setListaUsuario] = useState([]);//definir que listaUsuario será um array
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
            <h1>O DRAMA, O TEATRO E A ATUAÇÃO</h1>
            <p>"Drama, que em grego significa “ação”, é um gênero literário surgido na Grécia Antiga como, originalmente, uma forma de louvação religiosa ao deus Dionísio (Baco). Compõem o gênero dramático os textos em prosa ou em verso feitos para serem encenados no palco."
Veja mais sobre "Gênero dramático" em: https://brasilescola.uol.com.br/literatura/genero-dramatico.htm</p>

            <div class="box">
                    <div class="row"> <img src="https://i.pinimg.com/564x/39/c5/ef/39c5efbf8b5a81c880572a9671468070.jpg"/>
                      <span>Noite Estrelada, Van Gogh</span>
                    </div>
                </div>     
                <div class="box">
                    <div class="row"> <img src="https://norfipc.com/fotos/arte/Vincent-van-Gogh-Wheat-Field-with-Cypresses-1889.jpg"/>
                    <span>Campo de Trigo com ciprestes, Van Gogh</span></div> 
                </div>
                <div class="box">
                    <div class="row"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJiW5pU69MVRTmyMqwQzLzxIYt3Kzyhk0OA&usqp=CAU"/>
                    <span> O Quarto, Van Gogh</span></div> 
                </div>


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
       
            <h3 class="artistas">Liste aqui os seus artistas favoritos</h3>
            <form class="form" onSubmit={salvar}>
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
