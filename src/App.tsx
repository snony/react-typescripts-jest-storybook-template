import * as React from 'react';
import './App.css';
import styled from 'styled-components/macro'


const FooStyle = styled.div`
  min-height: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 5px 5px;
  // grid-template-columns: 2px 3fr 2px 1fr 2px;
  // grid-template-rows: 2px auto 2px;
`

const SomeStyle = styled.div`
// grid-column-start: 2;
// grid-column-end: 3;
background-color: blue;
// grid-row-start: 2;
// grid-row-end: 3;
`

export const OtherContent = styled.div`
  // grid-area: otherContent;
  background-color: red;
  // grid-column-start: 4;
  // grid-column-end: 5;
  // grid-row-start: 2;
  // grid-row-end: 3;
`


class App extends React.Component {
  public render() {
    return (
      <FooStyle>
        <SomeStyle>Click On me</SomeStyle>
        <OtherContent>This is Two</OtherContent>
      </FooStyle>
    );
  }
}

export default App;
