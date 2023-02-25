import React, { useState } from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {setIsBurgerMenuOpen} from "../store/slices/isBurgerMenuOpenSlice";

interface IBurgerProps {
    isBurgerMenuOpen: boolean | null
}

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
    background-color: ${(props: IBurgerProps) => props.isBurgerMenuOpen ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props: IBurgerProps) => props.isBurgerMenuOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props: IBurgerProps) => props.isBurgerMenuOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props: IBurgerProps) => props.isBurgerMenuOpen ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props: IBurgerProps) => props.isBurgerMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const BurgerButtonComponent = () => {
    const isBurgerMenuOpen = useSelector((state: RootState) => state.isBurgerMenuOpenState.isBurgerMenuOpen);
    const dispatch = useDispatch();

    return (
        <>
            <StyledBurger isBurgerMenuOpen={isBurgerMenuOpen} onClick={() => dispatch(setIsBurgerMenuOpen(!isBurgerMenuOpen))}>
                <div />
                <div />
                <div />
            </StyledBurger>
        </>
    )
}

export default BurgerButtonComponent