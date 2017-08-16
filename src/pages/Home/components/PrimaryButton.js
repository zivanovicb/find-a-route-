import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  padding: 15px 25px;
  border-radius: 3px;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 3px;
  color: white;
  background: ${props => props.theme.blue};
  :hover {
    background: #2c3e50;
  }
`;

export default Button;
