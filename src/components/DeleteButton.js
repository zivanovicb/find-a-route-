import styled from "styled-components";
import Button from "./Button";

const DeleteButton = styled.button`
  position: relative;
  ${props => Button};
  color: ${props => props.theme.red};
  border: 1px solid rgba(242, 77, 88, .19);
  background: rgba(208, 76, 88, .35);
  div {
    color: "white";
    position: absolute;
    bottom: 0;
    right: 0;
    background: ${props => props.theme.darkRed};
    border: 1px solid rgba(242, 77, 88, .19);
    border-radius: 5px;
    z-index: 9999;
    height: 0;
    width: 0;
    overflow: hidden;
  }
  :hover {
    background: rgba(208, 76, 88, .6);
  }
`;

export default DeleteButton;
