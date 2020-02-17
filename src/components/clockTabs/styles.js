import styled from "styled-components";

export const TabsClock = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 80px;
  width: 40em;
  height: 30em;
  border-radius: 5px;
`;

export const DivContent = styled.div`
  height: calc(100% - 60px);
  padding: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  h2 {
    margin: 0 0 0 10px;
  }

  button {
    width: 120px;
    height: 40px;
    font-size: 13px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    background-color: #4bb543;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.3);
    color: #fff;
  }
`;

export const DivRow = styled.div`
  margin-right: 40px;

  p {
    margin: 10px 0 0;
  }
`;
