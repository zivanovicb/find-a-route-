import styled from "styled-components";

const Headline = styled.h2`
  color: ${props => (props.color ? props.color : props.theme.cohesiveBlue)};
  font-size: 2em;
  margin: 50px 0 15px 0;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  @media screen and (min-width: 960px) {
    font-size: 2.6em;
  }
`;
export default Headline;
