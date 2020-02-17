import React from "react";
import * as Styles from "./styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { message } from "antd";
import "../../utils/react-tabs/index.css";
import * as moment from "moment";

const ClockTabs = () => {
  return (
    <Styles.TabsClock>
      <Tabs>
        <TabList>
          <Tab>Entrada</Tab>
          <Tab>Almoço</Tab>
          <Tab>Saída</Tab>
        </TabList>
        <Styles.DivContent>
          <TabPanel>
            <button onClick={Entrada}>Bater ponto</button>
          </TabPanel>
          <TabPanel>
            <button onClick={Almoco}>Bater ponto</button>
          </TabPanel>
          <TabPanel>
            <button onClick={Saida}>Bater ponto</button>
          </TabPanel>
        </Styles.DivContent>
      </Tabs>
    </Styles.TabsClock>
  );
};

const Entrada = () => {
  localStorage.setItem(
    "entrada",
    JSON.stringify({
      dateTime: moment().format("L, h:mm:ss a")
    })
  );

  message.success("Sucesso!");
};

const Almoco = () => {
  localStorage.setItem(
    "almoco",
    JSON.stringify({
      dateTime: moment().format("L, h:mm:ss a")
    })
  );
  message.success("Sucesso!");
};
const Saida = () => {
  localStorage.setItem(
    "saida",
    JSON.stringify({
      dateTime: moment().format("L, h:mm:ss a")
    })
  );
  message.success("Sucesso!");
};

export default ClockTabs;
