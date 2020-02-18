import React from "react";
import * as Styles from "./styles";
import "antd/dist/antd.css";
import solidesLogo from "../../assets/solides.png";

function Frequencia() {
  return (
    <Styles.HomeContainer>
      <Styles.HomeHeader>
        <Styles.HomeLogo src={solidesLogo} alt="logo"></Styles.HomeLogo>
        <Styles.DivFlex></Styles.DivFlex>
        <Styles.NameHeader>
          <a href="/Home">
            <p>Home</p>
          </a>
        </Styles.NameHeader>
      </Styles.HomeHeader>

      <Styles.HomeTitle>Frequencia</Styles.HomeTitle>

      <Styles.Content>
        <h1>Entrada</h1>
        <h2>{Entrada()}</h2>
        <h1>Almoço</h1>
        <h2>{Almoco()}</h2>
        <h1>Saída</h1>
        <h2>{Saida()}</h2>
      </Styles.Content>
    </Styles.HomeContainer>
  );
}

const Entrada = () => JSON.parse(localStorage.getItem("entrada") || "{}").dateTime;

const Almoco = () => JSON.parse(localStorage.getItem("almoco") || "{}").dateTime;

const Saida = () => JSON.parse(localStorage.getItem("saida") || "{}").dateTime;

export default Frequencia;
