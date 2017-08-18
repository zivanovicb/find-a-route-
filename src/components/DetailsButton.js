import Button from "./Button";
import styled from "styled-components";

const DetailsButton = styled.a`
  ${props => Button};
  color: ${props => props.theme.green};
  border: 1px solid rgba(112, 211, 175, .35);
  background: rgba(112, 211, 175, .24);
  :hover {
    background: rgba(112, 211, 175, .6);
  }
`;

export default DetailsButton;
