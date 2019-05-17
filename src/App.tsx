import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components/macro'
// import { Navs } from './data'
import BadNav, { Title, InnerTitle } from './NavBar'


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

export const OverLaySideBarWrapper = styled.div`
`

export const OverlayNavBar = styled.div`
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
  &:hover ${OverlayNavBar}{
    height: 100%;
    top: 0;
    display: block;
  }
`

const ExpandedState = styled.div`
${Title}{
  display: none;
}

${InnerTitle}{
  display: none;
}
`

export const App: React.FC = () => {
  //TODO change the name for this one
  const [shouldExpand, setShouldExpand] = useState(false)
  return (
    <Container>
      <SideBar >
        {!shouldExpand &&
          <SideBarExpanded>
            <BadNav setShouldExpand={setShouldExpand} isExpanded={shouldExpand} />
          </SideBarExpanded>}
        {shouldExpand &&
          <React.Fragment>
            <ExpandedState><BadNav setShouldExpand={setShouldExpand} isExpanded={shouldExpand} /></ExpandedState>
            <OverLaySideBarWrapper>
              <OverlayNavBar>
                <BadNav setShouldExpand={setShouldExpand} isExpanded={shouldExpand} />
              </OverlayNavBar>
            </OverLaySideBarWrapper>
        </React.Fragment>}
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