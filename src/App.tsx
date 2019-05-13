import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components/macro'
// import { Navs } from './data'
import BadNav from './NavBar'


export const Content = styled.div`
  
`


export const SideBarExpanded = styled.div`
position: relative;
background: red;
z-index: 1;
`

export const ErixLogo = styled.div`
  width: 70px;
  position: relative;
  font-size: 27px;
  color: #002d48;
  top: -10px;
  left: 10px;
`

export const Container = styled.div`
  // position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`

export const NavBar2 = styled.div`

`

export const SideBarExpanded2 = styled.div`
// position: absolute;
`

export const ChildOfSideBar = styled.div`
  position: absolute;
  z-index: 1;
  display:none;
  background-color: red;
  transition: display 0.5s;
`

export const SideBar = styled.div`
  background-color: #f7f7f7;
  height: 100%;
  min-width: 40px;
  &:hover ${ChildOfSideBar}{
    // width: 200px;
    height: 100%;
    top: 0;
    display: block;
  }
`

export const App: React.FC = () => {
  const [shouldExpand, setShouldExpand] = useState(false)
  return (
    <Container>
      <SideBar >
        <SideBarExpanded2>
          {shouldExpand && <ChildOfSideBar>
            <BadNav setShouldExpand={setShouldExpand} isExpanded={shouldExpand} />
          </ChildOfSideBar>}
        </SideBarExpanded2>
        {!shouldExpand && <SideBarExpanded>
          <BadNav setShouldExpand={setShouldExpand} isExpanded={shouldExpand} />
        </SideBarExpanded>}
      </SideBar>
      <Content>
        The content is Here and much more
      </Content>
    </Container>
  );
}

export const RealNavBar = styled.div`
  
`

export default App;