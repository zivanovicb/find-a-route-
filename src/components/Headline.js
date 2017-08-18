import styled, { keyframes } from "styled-components";

const hidnseek = keyframes`
	0% {
		opacity: 0;
	}

	50% {
		opacity: 1;
	}

  100%{
    opacity:0;
  }
`;

const Headline = styled.h2`
  color: ${props => (props.color ? props.color : props.theme.cohesiveBlue)};
  font-size: 2em;
  margin: 50px 0 15px 0;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  @media screen and (min-width: 960px) {
    font-size: 2.6em;
  }
  &.routes-headline {
    position: relative;
    display: none;
    ::after {
      content: "";
      display: inline-block;
      width: 30px;
      height: 3px;
      position: absolute;
      bottom: 10px;
      margin-left: 3px;
      background: ${props => props.theme.blue};
      animation: ${hidnseek} 2s ease-out infinite;
    }
  }
`;
export default Headline;
