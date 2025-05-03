import { Component } from "react";
import { withRouter } from "react-router-dom";
import firebase from "../../Firebase";
import { Link } from "react-router-dom";

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      nome: "",
      sobrenome: "",
      dataNascimento: ""
    };

    this.criarUsuario = this.criarUsuario.bind(this);
  }

  async criarUsuario() {
    const { email, senha, nome, sobrenome, dataNascimento } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, senha);

      const user = firebase.auth().currentUser;
      if (user) {
        const dadosPessoais = {
          nome: nome,
          sobrenome: sobrenome,
          dataNascimento: dataNascimento
        }

        firebase.firestore().collection("usuario").doc(user.uid).set(dadosPessoais)
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });

        alert("Usuário criado com sucesso!");
        this.props.history.push("/principal");
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Erro: " + error.message);
    }
  }

  render() {
    return (
      <div>
        <h1>Página de Cadastro</h1>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => this.setState({ senha: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => this.setState({ nome: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Sobrenome"
          onChange={(e) => this.setState({ sobrenome: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Data de nascimento"
          onChange={(e) => this.setState({ dataNascimento: e.target.value })}
        />
        <br />
        <button onClick={this.criarUsuario}>Criar usuário</button>
        <br />
        <br />
        <Link to="/">Ir para Login</Link>
      </div>
    );
  }
}
export default withRouter(Cadastro);
