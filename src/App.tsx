import * as React from 'react';
import './App.css';
import styled from 'styled-components/macro'
// import BoxShadow from './box-shadow/BoxShadow'
// import logo from './logo.svg';
import menu from './menu.svg'
import { Navs } from './data'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const NavBar = styled.div`
  background-color: #f7f7f7;
`

const Header = styled.div`

`

const Content = styled.div`
background-color: #ffffff;

`

const ErixLogo = styled.div`
  width: 70px;
  position: relative;
  font-size: 27px;
  color: #002d48;
  top: -10px;
  left: 10px;
`

const NavContainer = styled.div`
`
/**
 * Recursive types
 */

const NavItem = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 500;
  color: #002d48;
`

class App extends React.Component {
  public render() {
    return (
      <Container>
        <NavBar>
          <Header>
            <div>
              <img src={menu} alt="menu" />
            </div>
            <ErixLogo>Erix</ErixLogo>
          </Header>
          <NavContainer>
            {Navs.map(nav =>
              <NavItem key={nav.title}>
                <div /><div>{nav.title}</div>
              </NavItem>)}
          </NavContainer>
        </NavBar>
        <Content>
          The content is Here
        </Content>
      </Container>
    );
  }
}

export default App;
