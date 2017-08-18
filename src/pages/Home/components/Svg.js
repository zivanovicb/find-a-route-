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

const Svg = ({ className, icon, fill, hoverFill, width, height, style }) => {
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
    },
    arrow: () => {
      return (
        <Wrapper
          style={style}
          fill={fill}
          hoverFill={hoverFill}
          width={width}
          height={height}
          className={className}
        >
          <svg
            width={width}
            height={height}
            style={{ position: "absolute", top: "0", left: "0" }}
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 493.4 219.3"
          >
            <g>
              <path d="M490.5,102.2L380.9,2.3c-3-2.5-6.4-2.9-10-1.4c-3.6,1.5-5.4,4.3-5.4,8.3v64H9.1c-2.7,0-4.9,0.9-6.6,2.6
                    C0.9,77.4,0,79.6,0,82.2v54.8c0,2.7,0.9,4.9,2.6,6.6c1.7,1.7,3.9,2.6,6.6,2.6h356.3v64c0,3.8,1.8,6.6,5.4,8.3c3.6,1.5,7,1,10-1.7
                    l109.6-101.1c1.9-1.9,2.9-4.2,2.9-6.8C493.4,106.3,492.4,104.1,490.5,102.2z" />
            </g>
          </svg>
        </Wrapper>
      );
    },
    switch: () => {
      return (
        <Wrapper
          style={style}
          fill={fill}
          hoverFill={hoverFill}
          width={width}
          height={height}
          className={className}
        >
          <svg
            width={width}
            height={height}
            style={{ position: "absolute", top: "0", left: "0" }}
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 100 68"
          >
            <g>
              <path d="M70,10H20V0L0,17l20,16v-9h50V10z M100,52L80,35v10H30v14h50v9L100,52z" />
            </g>
          </svg>
        </Wrapper>
      );
    },
    clock: () => {
      return (
        <Wrapper
          style={style}
          fill={fill}
          hoverFill={hoverFill}
          width={width}
          height={height}
          className={className}
        >
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 299.995 299.995"
          >
            <g>
              <g>
                <path d="M149.995,0C67.156,0,0,67.158,0,149.995s67.156,150,149.995,150s150-67.163,150-150S232.834,0,149.995,0z
          			 M214.842,178.524H151.25c-0.215,0-0.415-0.052-0.628-0.06c-0.213,0.01-0.412,0.06-0.628,0.06
          			c-5.729,0-10.374-4.645-10.374-10.374V62.249c0-5.729,4.645-10.374,10.374-10.374s10.374,4.645,10.374,10.374v95.527h54.47
          			c5.729,0,10.374,4.645,10.374,10.374C225.212,173.879,220.571,178.524,214.842,178.524z" />
              </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </Wrapper>
      );
    },
    road: () => {
      return (
        <Wrapper
          style={style}
          fill={fill}
          hoverFill={hoverFill}
          width={width}
          height={height}
          className={className}
        >
          <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 519.6 365.4"
          >
            <g>
              <path d="M512.2,311.5L393.1,13.4c-1.5-3.6-4-6.8-7.4-9.4c-3.4-2.7-7-4-10.9-4h-96.8c2.5,0,4.7,0.9,6.6,2.7c1.9,1.8,2.9,3.9,3.1,6.4
          		l4.3,54.8c0.2,2.7-0.6,4.9-2.3,6.6c-1.7,1.7-3.8,2.6-6.3,2.6h-47.4c-2.5,0-4.6-0.9-6.3-2.6c-1.7-1.7-2.5-3.9-2.3-6.6l4.3-54.8
          		c0.2-2.5,1.2-4.6,3.1-6.4c1.9-1.8,4.1-2.7,6.6-2.7h-96.8c-3.8,0-7.4,1.3-10.9,4c-3.4,2.7-5.9,5.8-7.4,9.4L7.4,311.5
          		C2.5,323.3,0,334.3,0,344.6c0,13.9,4.4,20.8,13.1,20.8h201c-2.5,0-4.6-0.9-6.3-2.7c-1.7-1.8-2.5-3.9-2.3-6.4l5.7-73.1
          		c0.2-2.5,1.2-4.6,3.1-6.4c1.9-1.8,4.1-2.7,6.6-2.7h77.7c2.5,0,4.7,0.9,6.6,2.7c1.9,1.8,3,3.9,3.1,6.4l5.7,73.1
          		c0.2,2.5-0.6,4.6-2.3,6.4c-1.7,1.8-3.8,2.7-6.3,2.7h201c8.8,0,13.1-6.9,13.1-20.8C519.6,334.3,517.1,323.3,512.2,311.5z
          		 M302.9,211.3c0.2,2.3-0.6,4.2-2.3,5.7c-1.7,1.5-3.7,2.3-6,2.3H225c-2.3,0-4.3-0.8-6-2.3c-1.7-1.5-2.5-3.4-2.3-5.7v-1.1l6.9-91.4
          		c0.2-2.5,1.2-4.6,3.1-6.4c1.9-1.8,4.1-2.7,6.6-2.7h53.1c2.5,0,4.7,0.9,6.6,2.7c1.9,1.8,3,3.9,3.1,6.4l6.9,91.4L302.9,211.3
          		L302.9,211.3z" />
            </g>
          </svg>
        </Wrapper>
      );
    }
  };
  return icons[icon]();
};

export default Svg;
