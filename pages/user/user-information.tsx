import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import styled from "styled-components";
import UserInfoInputComponent from "../../components/user-info-input.component";
import $api from "../../lib/axios";
import {setUserData} from "../../store/slices/userSlice";
import ButtonLoaderComponent from "../../components/button-loader.component";
import AuthService from "../../utils/auth-api-helpers/auth-service";

const TopLevelContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  padding-top: 200px;
`

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: 30px;
  gap: 30px;
`

const CustomButton = styled.button`
  border: 1px solid rgb(58,167,51);
  background-color: rgb(58,167,51);
  color: white;
  width: 300px;
  height: 55px;
  border-radius: 10px;
  padding: 16px 24px;
  line-height: 1.5;
  display: inline-block;
  text-align: center;
  font-size: 17px;
  font-weight: 800;
  font-style: normal;
  text-transform: initial;
  letter-spacing: .5px;
  cursor: pointer;
  align-self: center;
  
  :disabled {
    cursor: not-allowed;
  }
`

const UserInformation = () => {
    const isAuth = useSelector((state: RootState) => state.userState.isUserAuthenticated);
    const {firstName, email, lastName} = useSelector((state: RootState) => state.userState.userData);
    const [isEmailEditable, setIsEmailEditable] = useState(false);
    const [isFirstNameEditable, setIsFirstNameEditable] = useState(false);
    const [isLastNameEditable, setIsLastNameEditable] = useState(false);
    const firstNameRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const lastNameRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const emailRef = useRef<HTMLInputElement>({} as HTMLInputElement);
    const router = useRouter();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const onClickHandler = async () => {
        if (firstName===firstNameRef.current?.value) {
            setIsFirstNameEditable(false);
        }
        if (lastName===lastNameRef.current?.value) {
            setIsLastNameEditable(false);
        }
        if (email===emailRef.current?.value) {
            setIsEmailEditable(false);
        }

        if (firstNameRef.current&&firstName!=firstNameRef.current?.value ||
            lastNameRef.current&&lastName!=lastNameRef.current?.value ||
            emailRef.current&&email!=emailRef.current?.value) {

            try {
                setIsLoading(true);
                const response = await AuthService.updateUserInformation(firstNameRef.current?.value, lastNameRef.current?.value, emailRef.current?.value);
                dispatch(setUserData(response.data));
                setIsLoading(false);
                setIsFirstNameEditable(false);
                setIsLastNameEditable(false);
                setIsEmailEditable(false);
            } catch (e: any) {
                console.log(e);
            }
        }
    }

    useEffect(() => {
        if (!isAuth) {
            router.push('/404');
        }
    }, [isAuth]);

    if (!isAuth) {
        return null;
    }

    //TODO: validate email inputs

    return (
        <TopLevelContainer>
                <ContentContainer>
                    <UserInfoInputComponent ref={firstNameRef} isEditable={isFirstNameEditable} setIsEditable={setIsFirstNameEditable} label="First Name" infoToDisplay={firstName}/>
                    <UserInfoInputComponent ref={lastNameRef} isEditable={isLastNameEditable} setIsEditable={setIsLastNameEditable} label="Last Name" infoToDisplay={lastName}/>
                    <UserInfoInputComponent ref={emailRef} isEditable={isEmailEditable} setIsEditable={setIsEmailEditable} label="Email" infoToDisplay={email}/>
                    {(isEmailEditable || isFirstNameEditable || isLastNameEditable) && <CustomButton disabled={isLoading} onClick={onClickHandler}>{
                        isLoading ? <ButtonLoaderComponent/> : "Save changes"
                    }</CustomButton>}
                </ContentContainer>
        </TopLevelContainer>
    )
}

export default UserInformation