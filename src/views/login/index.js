import React, { Component } from "react";
import * as Styles from "./styles";
import { message } from "antd";

import solidesLogo from "../../assets/solides.png";

export default class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();

    let userLS = JSON.parse(localStorage.getItem("user"));
    let passwordLS = JSON.parse(localStorage.getItem("password"));

    userLS === username && password === passwordLS
      ? this.props.history.push("/Home")
      : message.error("Login e/ou senha errados!");
  };

  render() {
    return (
      <Styles.LoginWrapper>
        <Styles.LoginLogo src={solidesLogo} alt="logo"></Styles.LoginLogo>
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
          <button type="submit">Entrar</button>
          <a href="/Cadastro">Cadastrar</a>
        </form>
      </Styles.LoginWrapper>
    );
  }
}

let username;
let password;

const handleUsernameChange = e => {
  username = e.target.value;
};

const handlePasswordChange = e => {
  password = e.target.value;
};
