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
`

const NavTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #002d48;
  width: 88%;
`

const NavTitleInCollapseState = styled(NavTitle)`
  width: 0px;
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

const NavBar = styled.div<{ shouldCollapse: boolean }>`
  background-color: #f7f7f7;
  height: 100%;
  :hover{
    position: ${({ shouldCollapse }) => shouldCollapse ? 'absolute' : 'normal'};
    z-index: ${({ shouldCollapse }) => shouldCollapse ? '1' : '0'};
    box-shadow: ${({ shouldCollapse }) => shouldCollapse ? '2px 0 2px -2px #888' : '0 0 0 0 transparent'};
  }
  
  ${NavTitleInCollapseState}{
    display: none;
  }

  &:hover ${ErixLogo}{
    display:${({ shouldCollapse }) => shouldCollapse ? 'none' : 'block'};
    width:${({ shouldCollapse }) => shouldCollapse ? '0' : '10px'};
  } 
  &:hover ${NavTitleInCollapseState}{
    display: inline-block;
    width: 88%;
  }
`
// width: ${({ shouldCollapse }) => shouldCollapse ? '0px' : '88%'};
// display:${({ shouldCollapse }) => shouldCollapse ? 'none' : 'block'};

const App: React.FC = () => {
  const [isInCollapseState, setIsInCollapseState] = useState(false)

  return (
    <Container>
      <NavBar shouldCollapse={isInCollapseState}>
        <Header>
          <div>
            <ImgWrapper src={menu} alt="menu" width={70} onClick={() => setIsInCollapseState(!isInCollapseState)} />
          </div>
          {!isInCollapseState && <ErixLogo>Erix</ErixLogo>}
        </Header>
        <NavContainer>
          {Navs.map(nav =>
            <NavItem key={nav.title}>
              <NavToggle />
              {!isInCollapseState && <NavTitle>{nav.title}</NavTitle>}
              {isInCollapseState && <NavTitleInCollapseState>{nav.title}</NavTitleInCollapseState>}
            </NavItem>)}
        </NavContainer>
      </NavBar>
      <Content>
        The content is Here, The content is Here The content is Here The content is HereThe content is
        HereThe content is Here The content is HereThe content is HereThe content is Here  The content is Here
        The content is Here The content is Here The content is Here
      </Content>
    </Container>
  );
}

export default App;