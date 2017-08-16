import React, { Component } from "react";
import styled from "styled-components";
import AutoComplete from "./AutoComplete";
import LocationHr from "./LocationHr";
import PrimaryButton from "./PrimaryButton";

const Wrapper = styled.div`margin-top: 50px;`;
const Container = styled.div`
  @media screen and (min-width: 960px) {
    width: 960px;
    margin: 0 auto;
  }
`;
const LocationPickers = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  @media screen and (max-width: 960px) {
    flex-flow: column wrap;
  }
`;

const Button = PrimaryButton.extend`
  position: relative;
  top: 5px;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0;
`;
export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <LocationPickers>
            <AutoComplete
              label="Choose starting point"
              items={["apple", "orange", "carrot"]}
              onChange={selectedItem => console.log(selectedItem)}
            />
            <LocationHr
              style={{
                position: "relative",
                top: "15px"
              }}
            />
            <AutoComplete
              label="Choose destination"
              items={["apple", "orange", "carrot"]}
              onChange={selectedItem => console.log(selectedItem)}
            />
            <Button>Add route</Button>
          </LocationPickers>
        </Container>
      </Wrapper>
    );
  }
}
