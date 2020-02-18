import styled from "styled-components";

export const CadastroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    max-width: 280px;

    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  form input {
    margin-top: 10px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 44px;
    padding: 0 15px;
    font-size: 14px;
  }

  form button {
    margin: 10px 0 0;
    background: #4bb0ee;
    border-radius: 5px;
    height: 44px;
    border: 0;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
  }

  form button:hover {
    background: #42a1db;
  }

  form a {
    margin: 10px 0 0;
    background: #fff;
    border-radius: 5px;
    height: 44px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form a:hover {
    color: #fff;
    background: #a2a2a2;
  }
`;

export const CadastroLogo = styled.img`
  width: 220px;
  background-repeat: no-repeat;
`;
