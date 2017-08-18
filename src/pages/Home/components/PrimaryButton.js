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
    background: ${props => props.hoverBg || "#2c3e50"};
    box-shadow: 0 14px 28px rgba(242, 77, 88, 0.17),
      0 10px 10px rgba(66, 77, 88, 0.15);
  }
`;

export default Button;
