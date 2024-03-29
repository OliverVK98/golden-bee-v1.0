import styled from "styled-components";
import Image from "next/image";
import {useEffect} from "react";
import {createPortal} from "react-dom";
import SignInForm from "../sign-in-form/sign-in-form";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/store";
import {setIsSignInModalOpen} from "../../store/slices/modalSlice";

const ModalContainer = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  z-index: 1000;
  height: fit-content;
  width: 450px;
  box-shadow: 0px 0px 10px 1px rgb(222,226,230);

  @media (max-width: 576px) {
    width: 300px;
  }
`

const TopPartContainer = styled.div`
  display: flex;
  height: 60px;
  border-bottom: 1px solid rgb(222,226,230);
`

const TextContainer = styled.div`
  width: 95%;
  margin-right: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 576px) {
    font-size: 25px;
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const BlackBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 999;
`

const SignInModal = () => {
    const isSignInModalOpen = useSelector((state: RootState) => state.modalState.isSignInModalOpen)
    const dispatch = useDispatch();

    const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            dispatch(setIsSignInModalOpen(false));
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleEscapeKeyPress);
        return () => {
            document.removeEventListener("keydown", handleEscapeKeyPress);
        };
    }, []);

    if (!isSignInModalOpen) return null

    return createPortal(
        <>
            <BlackBackground onClick={()=>dispatch(setIsSignInModalOpen(!isSignInModalOpen))}/>
            <ModalContainer>
                <TopPartContainer>
                    <TextContainer>
                        Sign In
                    </TextContainer>
                    <ImageContainer>
                        <Image src="/icons/close.svg" alt="close-icon" height={30} width={30}
                                onClick={()=>dispatch(setIsSignInModalOpen(!isSignInModalOpen))}/>
                    </ImageContainer>
                </TopPartContainer>
                <SignInForm/>
            </ModalContainer>
        </>, document.getElementById('modal-portal') as HTMLElement
    )
}

export default SignInModal