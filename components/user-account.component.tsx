import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import UserDropdownComponent from "./user-dropdown.component";
import {useState} from "react";

const UserAccountContainer = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  position: relative;
  user-select: none;
`

const UserAccountComponent = () => {
    const {lastName, firstName} = useSelector((state: RootState) => state.userState.userData);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    return (
        <>
            <UserAccountContainer onClick={()=>setIsDropDownOpen(!isDropDownOpen)}>
                {firstName[0]}{lastName[0]}
            </UserAccountContainer>
            {isDropDownOpen && <UserDropdownComponent setIsDropDownOpen={setIsDropDownOpen} lastName={lastName} firstName={firstName}/>}
        </>
    )
}

export default UserAccountComponent