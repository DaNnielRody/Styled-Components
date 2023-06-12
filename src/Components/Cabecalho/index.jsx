import React from "react";
import styled from 'styled-components';
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI";

const StyledHeader = styled.nav`
    background-color: ${corPrimaria};
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    height: 10vh;
    align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const ButtonHeader = styled.button`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => props.primary ? 'white' : corPrimaria};
  color: ${(props) => props.primary ? corPrimaria : 'white'};
`

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <ButtonHeader primary href="https://google.com">
          Ajuda
        </ButtonHeader>
        <ButtonHeader href="https://google.com">
          Sair
        </ButtonHeader>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
