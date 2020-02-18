import React, { Component } from "react";
import * as Styles from "./styles";
import { message } from "antd";

import solidesLogo from "../../assets/solides.png";

export default class Cadastro extends Component {
  handleSubmit = e => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      message.error("As senhas não batem!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(username));
    localStorage.setItem("password", JSON.stringify(password));

    message.success("Cadastrado com sucesso!");

    setTimeout(this.props.history.push("/"), 1000);
  };

  render() {
    return (
      <Styles.CadastroWrapper>
        <Styles.CadastroLogo src={solidesLogo} alt="logo"></Styles.CadastroLogo>
        <form onSubmit={this.handleSubmit}>
          <input
            value={username}
            onChange={handleUsernameChange}
            placeholder="Usuário"
            required
          ></input>
          <input
            value={password}
            onChange={handlePasswordChange}
            placeholder="Senha"
            type="password"
            required
          ></input>
          <input
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
            placeholder="Confirmar senha"
            type="password"
            required
          ></input>
          <button type="submit">Cadastrar</button>
          <a href="/">Cancelar</a>
        </form>
      </Styles.CadastroWrapper>
    );
  }
}

let username;
let password;
let passwordConfirm;

const handleUsernameChange = e => {
  username = e.target.value;
};

const handlePasswordChange = e => {
  password = e.target.value;
};

const handlePasswordConfirmChange = e => {
  passwordConfirm = e.target.value;
};
