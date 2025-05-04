import { Component } from "react";
import { withRouter } from "react-router-dom";
import firebase from "../../Firebase";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: ""
    };

    this.entrar = this.entrar.bind(this);
  }

  async entrar() {
    const { email, senha } = this.state;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, senha);
      this.props.history.push("/principal");
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      alert("Usuário não cadastrado");
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
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
        <button onClick={this.entrar}>Entrar</button>
        <br />
        <br />
        <Link to="/cadastro">Ir para Cadastro</Link>
      </div>
    );
  }
}
export default withRouter(Login);
