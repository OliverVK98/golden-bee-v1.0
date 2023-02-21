import styled from "styled-components";
import {signIn, signOut, useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {setIsUserAuthenticated, setProviderUserData} from "../store/slices/userSlice";
import {setIsSignInModalOpen} from "../store/slices/modalSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import AuthService from "../utils/auth-api-helpers/auth-service";
import createPopUpWindow from "../utils/createPopUpWindow";
import ButtonLoaderBlackComponent from "./button-loader-black.component";

const GoogleButton = styled.button`
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  width: 100%;
  border-radius: 3px;
  padding-left: 20%;
  background: rgb(255, 255, 255) url('https://raw.githubusercontent.com/eswarasai/social-login/master/img/google-plus.png') no-repeat scroll 5px 0px / 50px 50px padding-box border-box;
  border: 1px solid rgb(220, 74, 61);
`

const GoogleSpan = styled.span`
  box-sizing: border-box;
  color: rgb(220, 74, 61);
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  border: 0px none rgb(220, 74, 61);
`

const ErrorContainer = styled.p`
  color: red;
  margin-top: -5px;
  margin-bottom: -5px;
`

const GoogleSignInButtonComponent = () => {
    const {data, status} = useSession();
    const dispatch = useDispatch();
    const isUserAuthenticated = useSelector((state: RootState) => state.userState.isUserAuthenticated);
    const [isLoading, setIsLoading] = useState(false);
    const [userExists, setUserExists] = useState(false);

    const signInProvider = async () => {
        try {
            setIsLoading(true);
            const response = await AuthService.socialLogin(data?.user?.email as string, data?.user?.name as string);
            if (response.status === 200) {
                dispatch(setProviderUserData({
                    email: data?.user?.email,
                    name: data?.user?.name,
                    providerId: response?.data?.userInfo.providerId
                }))
                dispatch(setIsUserAuthenticated(true));
                dispatch(setIsSignInModalOpen(false));
                setIsLoading(false);
            } else {
                await signOut({ redirect: false });
                setIsLoading(false);
                setUserExists(true);
            }
        } catch (e) {
            console.log (e);
        }
    }

    useEffect(()=>{
        if (!isUserAuthenticated) {
            if (status==="authenticated") {
                signInProvider();
            }
        }
    }, [status]);

    const onClickHandler = async () => {
        await createPopUpWindow("/google-popup", "Sign In");
    };

    return(
        <>
            <GoogleButton type="button" onClick={() => onClickHandler()}>
                <GoogleSpan>{
                    isLoading ? <ButtonLoaderBlackComponent/> : "Connect with Google"
                }</GoogleSpan>
            </GoogleButton>
            {userExists && <ErrorContainer>
                User with that email already exists.
            </ErrorContainer>}
        </>
    )
}

export default GoogleSignInButtonComponent