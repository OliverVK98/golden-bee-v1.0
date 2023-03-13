import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import UserDropdown from "../user-dropdown/user-dropdown";
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

const UserAccount = () => {
    const providerUserData = useSelector((state: RootState) => state.userState.providerUserData);
    const userData = useSelector((state: RootState) => state.userState.userData);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    return (
        <>
            <UserAccountContainer onClick={()=>setIsDropDownOpen(!isDropDownOpen)}>
                {
                    Object.keys(providerUserData).length > 0 ? providerUserData.name[0] : `${userData?.firstName[0]}${userData?.lastName[0]}`
                }
            </UserAccountContainer>
            {isDropDownOpen && <UserDropdown setIsDropDownOpen={setIsDropDownOpen}/>}
        </>
    )
}

export default UserAccount