import styled from "styled-components";

interface IButtonProps {
    isPrimary: boolean;
    mainColor: string;
    secondaryColor: string;
    borderColor: string;
    type?: string
}

const CustomRoundButton = styled.button`
  background-color: ${(props: IButtonProps) => (props.isPrimary 
          ? props.mainColor : props.secondaryColor)};
  color: #3aaa35;
  border: 1px solid ${(props) => props.borderColor};
  padding: 0;
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100px;
`

export default CustomRoundButton;