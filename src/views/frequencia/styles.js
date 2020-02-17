import styled from "styled-components";

export const HomeContainer = styled.div`
  flex-wrap: wrap;

  h2 {
    padding: 10px;
  }
`;

export const DivFlex = styled.div`
  flex: 3;
`

export const HomeHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
  border-bottom: 3px solid;
  border-image: linear-gradient(to right, #4d2c8e 20%,#ffcd02 30%, #ffcd02 40%, #e84f47 60%, #e84f47 65%, #65c1ac 85%) 5;
  display: flex;
  flex-wrap: nowrap;

  a p {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    color: #4d2c8e;
    margin: 0;
  }
`;

export const HomeTitle = styled.h1`
  color: #4d2c8e;
  font-weight: bold;
  margin: 20px 20px 0;
`

export const HomeLogo = styled.img`
  width: 220px;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
`;

export const NameHeader = styled.span`
  font-family: "Arial";
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  margin: auto 15px;
  color: white;
`;
