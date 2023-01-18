import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setIsSignInModalOpen} from "../redux/slices/modalSlice";

const CustomShopButton = styled.button`
  border: none;
  background-color: rgb(58,167,51);
  color: white;
  width: 400px;
  height: 55px;
  border-radius: 10px;
  padding: 16px 24px;
  line-height: 1.5;
  text-align: center;
  font-size: 17px;
  font-weight: 800;
  font-style: normal;
  letter-spacing: .5px;
  cursor: pointer;
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px
`

const GuestOrUserComponent = () => {
    const isUserAuthenticated = useSelector((state: RootState) => state.userState.isUserAuthenticated);
    const dispatch = useDispatch();

    if(isUserAuthenticated) return(
        <ButtonsContainer>
            <CustomShopButton>
                Checkout
            </CustomShopButton>
        </ButtonsContainer>
    )

    return (
        <ButtonsContainer>
            <CustomShopButton onClick={()=>dispatch(setIsSignInModalOpen(true))}>
                Sign In
            </CustomShopButton>
            <CustomShopButton>
                Checkout as a Guest
            </CustomShopButton>
        </ButtonsContainer>
    )
}

export default GuestOrUserComponent