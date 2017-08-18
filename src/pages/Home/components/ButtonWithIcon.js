import styled from "styled-components";

const ButtonWithIcon = styled.button`
  background-image: url(${props => props.url});
  background-size: 14px 14px;
  background-position: 10px center;
  background-repeat: no-repeat;
  background-color: ${props => props.bg || "#47B4FE"};
  padding: ${props => props.pTB || "10px"} 16px;
  padding-left: 32px;
  border-radius: 5px;
  color: white;
  :hover {
    cursor: pointer;
  }
`;
