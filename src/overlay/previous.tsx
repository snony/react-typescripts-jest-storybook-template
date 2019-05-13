import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components/macro'
// import BoxShadow from './box-shadow/BoxShadow'
// import logo from './logo.svg';
import menu from './menu.svg'
import { Navs } from '../data'

const Container = styled.div`
  position: relative;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
`

const NavBar = styled.div`
  background-color: #f7f7f7;
  // position: absolute;
  // z-index: 1;
  height: 100%;
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
  margin-bottom: 10px;
  justify-content: space-between;
  width: 250px;
`

const NavTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #002d48;
  width: 88%;
`

const NavToggle = styled.div`
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid green;
`

const ImgWrapper = styled.img`
  :hover{
    cursor: pointer;
  }
`

const App: React.FC = () => {
  const [isInCollapseState, setIsInCollapseState] = useState(true)

  return (
    <Container>
      <NavBar>
        <Header>
          <div>
            <ImgWrapper src={menu} alt="menu" width={70} onClick={() => setIsInCollapseState(!isInCollapseState)} />
          </div>
          <ErixLogo>Erix</ErixLogo>
        </Header>
        <NavContainer>
          {Navs.map(nav =>
            <NavItem key={nav.title}>
              <NavToggle /><NavTitle>{nav.title}</NavTitle>
            </NavItem>)}
        </NavContainer>
      </NavBar>
      <Content>
        The content is Here
        </Content>
    </Container>
  );
}

export default App;