import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import firebase from '../../Firebase';

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      loading: true,
    };
  }

  componentDidMount() {
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      firebase.firestore().collection("usuario").doc(currentUser.uid).get()
        .then(doc => {
          if (doc.exists) {
            this.setState({ userData: doc.data(), loading: false });
          } else {
            console.log("Erro ao carregar Firestore.");
            this.setState({ loading: false });
          }
        })
        .catch(error => {
          console.error("Erro ao carregar usuário: ", error);
          this.setState({ loading: false });
        });
    } else {
      console.log("Usuário não está logado.");
      this.setState({ loading: false });
      this.props.history.push("/");
    }
  }

  sair = () => {
    firebase.auth().signOut()
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Erro ao sair: ", error);
      });
  }

  render() {
    const { userData, loading } = this.state;

    if (loading) {
      return <div>Carregando...</div>;
    }

    if (!userData) {
        this.props.history.push("/");
    }

    return (
      <div>
        <h1>Principal</h1>
        <p>Nome: {userData.nome}</p>
        <p>Sobrenome: {userData.sobrenome}</p>
        <p>Data de nascimento: {userData.dataNascimento}</p>

        <div>
          <button onClick={this.sair}>Sair</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Principal);
