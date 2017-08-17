import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-right: ${props => props.marginRight || "20px"};
  path {
    fill: ${props => props.fill || props.theme.blue};
  }
  :hover {
    path {
      fill: ${props => props.hoverFill || props.theme.blue};
    }
  }
`;

const Svg = ({ icon, fill, hoverFill, width, height, style }) => {
  const icons = {
    location: () => {
      return (
        <Wrapper
          style={style}
          fill={fill}
          hoverFill={hoverFill}
          width={width}
          height={height}
        >
          <svg
            width={width}
            height={height}
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 71.9 97.7"
            style={{ position: "absolute", top: "0", left: "0" }}
          >
            <g>
              <path
                className="st0"
                d="M36,0C16.1,0,0,16.1,0,36c0,5.2,1.1,10.1,3.1,14.7c9,19.7,26.2,40.5,31.3,46.4c0.4,0.4,0.9,0.7,1.5,0.7
          		s1.1-0.3,1.5-0.7c5.1-5.9,22.3-26.7,31.3-46.4c2.1-4.6,3.1-9.5,3.1-14.7C71.9,16.1,55.8,0,36,0z M36,54.7
          		c-10.3,0-18.7-8.4-18.7-18.7c0-10.3,8.4-18.7,18.7-18.7S54.7,25.7,54.7,36C54.7,46.3,46.3,54.7,36,54.7z"
              />
            </g>
          </svg>
        </Wrapper>
      );
    }
  };
  return icons[icon]();
};

export default Svg;
