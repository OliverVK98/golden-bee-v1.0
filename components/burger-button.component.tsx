import React, { useState } from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {setIsBurgerMenuOpen} from "../store/slices/isBurgerMenuOpenSlice";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #333;
    border-radius: 10px;
  }
`;

const BurgerButtonComponent = () => {
    const dispatch = useDispatch();

    return (
        <StyledBurger onClick={() => dispatch(setIsBurgerMenuOpen(true))}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

export default BurgerButtonComponent