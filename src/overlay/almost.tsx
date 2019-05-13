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


const Header = styled.div`

`

const Content = styled.div`
background-color: #ffffff;

`

const ErixLogo = styled.div`
  font-size: 27px;
  color: #002d48;
`

const NavContainer = styled.div`
`


const ImgWrapper = styled.img`
  :hover{
    cursor: pointer;
  }
`


const NavItem = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 500;
  color: #002d48;
  margin-bottom: 10px;
`


export const NavToggle = styled.div`
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid green;
`

const SideBarItems = styled.div<{ inExpandState: boolean }>`
  display: ${({ inExpandState }) => inExpandState ? 'none' : 'block'};
`

const OverLay = styled.div<{ isOverlayState: boolean }>`
  display: none;
`
const NewNav = styled.div<{ inExpandState: boolean }>`

`

const SideBar = styled.div<{ shouldExpand: boolean }>`
  position: relative;
  background-color: #f7f7f7;
  height: 100%;
  min-width: 40px;
  :hover & ${OverLay}{
    display: ${({ shouldExpand }) => shouldExpand?'block': 'none'};
  }
`

const App: React.FC = () => {
  const [shouldExpand, setshouldExpand] = useState(false)
  return (
    <Container>
      <SideBar shouldExpand={shouldExpand}>
        <Header>
          <ImgWrapper src={menu} alt="menu" width={60} onClick={() => setshouldExpand(!shouldExpand)} />
          <ErixLogo>Erix</ErixLogo>
        </Header>
        <SideBarItems inExpandState={shouldExpand}>
          {Navs.map(nav =>
            <NavItem key={nav.title}>
              {nav.title}
            </NavItem>)}
        </SideBarItems>
        <OverLay isOverlayState={shouldExpand}>
          <Navigation />
        </OverLay>
      </SideBar>
      <Content>
        The content is Here
      </Content>
    </Container>
  );
}


export const Navigation: React.FC = () => (
  <React.Fragment>
    <NewNav inExpandState={true}>
      {Navs.map(nav =>
        <NavItem key={nav.title}>
          {nav.title}
        </NavItem>)}
    </NewNav>
  </React.Fragment>
)

export const Foo = (shouldExpand: boolean, setshouldExpand: (shouldExpand: boolean) => void) => (
  <div>
    <OverLay isOverlayState={shouldExpand}>
      This is the overlay I assume
    </OverLay>
    <Header>
      <ImgWrapper src={menu} alt="menu" width={60} onClick={() => setshouldExpand(!shouldExpand)} />
      <ErixLogo>This is the overlay I assume</ErixLogo>
    </Header>
    <NavContainer>

    </NavContainer>
  </div>
)
export default App;