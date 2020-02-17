import React from "react";
import * as Styles from "./styles";
import ClockTabs from "../../components/clockTabs";
import "antd/dist/antd.css";
import solides from "../../assets/solides.png";

function Home() {
  return (
    <Styles.HomeContainer>
      <Styles.HomeHeader>
        <Styles.HomeLogo src={solides} alt="logo"></Styles.HomeLogo>
        <Styles.DivFlex></Styles.DivFlex>
        <Styles.NameHeader>
          <a href="/frequencia">
            <p>Frequência</p>
          </a>
        </Styles.NameHeader>
      </Styles.HomeHeader>

      <Styles.HomeTitle>Ponto Digital</Styles.HomeTitle>

      <Styles.ClockTabs>
        <ClockTabs />
      </Styles.ClockTabs>
    </Styles.HomeContainer>
  );
}

export default Home;
