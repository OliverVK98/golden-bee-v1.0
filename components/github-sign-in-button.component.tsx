import styled from "styled-components";
import {signOut, useSession} from "next-auth/react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {useEffect, useState} from "react";
import AuthService from "../utils/auth-api-helpers/auth-service";
import {setIsUserAuthenticated, setProviderUserData} from "../store/slices/userSlice";
import {setIsSignInModalOpen} from "../store/slices/modalSlice";
import createPopUpWindow from "../utils/createPopUpWindow";
import ButtonLoaderBlackComponent from "./button-loader-black.component";

const GithubButton = styled.button`
  color: black;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 50px;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  border-radius: 3px;
  outline: none;
  padding-left: 20%;
  background: rgb(255, 255, 255) url('https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg') no-repeat scroll 10px 10px / 30px 30px padding-box border-box;
  border: 1px solid rgb(36, 41, 46);
  
  @media (max-width: 576px) {
    font-size: 12px;
    height: 40px;
    background: rgb(255, 255, 255) url('https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg') no-repeat scroll 10px 10px / 20px 20px padding-box border-box;
  }
`;

const GithubSpan = styled.span`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-self: flex-start;
  text-transform: uppercase;
  border: 0px none rgb(220, 74, 61);
`;

const ErrorContainer = styled.p`
  color: red;
  margin-top: -5px;
  margin-bottom: -5px;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`

const GithubSignInButtonComponent = () => {
    const {data, status} = useSession();
    const dispatch = useDispatch();
    const isUserAuthenticated = useSelector((state: RootState) => state.userState.isUserAuthenticated);
    const [isLoading, setIsLoading] = useState(false);
    const [githubUserExists, setGithubUserExists] = useState(false);

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
                setGithubUserExists(true);
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
        await createPopUpWindow("/github-popup", "Sign In");
    };

    return(
        <>
            <GithubButton type="button" onClick={() => onClickHandler()}>
                <GithubSpan>{
                    isLoading ? <ButtonLoaderBlackComponent/> : "Connect with Github"
                }</GithubSpan>
            </GithubButton>
            {githubUserExists && <ErrorContainer>
                User with that email already exists.
            </ErrorContainer>}
        </>
    )
}

export default GithubSignInButtonComponent;