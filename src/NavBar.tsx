import React, { useState } from 'react';
import styled from 'styled-components/macro'
// import BoxShadow from './box-shadow/BoxShadow'
// import logo from './logo.svg';
import menu from './menu.svg'
import { Navs } from './data'


const NavBar = styled.div`
  background-color: #f7f7f7;
  height: 100%;
`

const ErixLogo = styled.div`
  font-size: 27px;
  color: #002d48;
  top: -10px;
  left: 10px;
`


const ImgWrapper = styled.img`
  :hover{
    cursor: pointer;
  }
`

const NavList = styled.ul`
list-style-type: none;
padding: 3px 0 3px 3px;
`

const MainMenuWrapper = styled.div`
  display: flex;
  min-height: 45px;
  :hover{
    cursor: pointer;
  }
`

const NavItem = styled.li<{ selected: boolean }>`
  background-color: ${({ selected }) => selected ? '#ffffff' : 'inherit'};
  border-right: ${({ selected }) => selected ? '4px solid #00ebb9' : 'none'};
`

const TitleWrapper = styled(MainMenuWrapper)`
  display: flex;
`

const Dot = styled.div<{ size: number, selected: boolean }>`
  margin: auto 0;
  border: 1px solid #00ebb9;
  background-color: ${({ selected }) => selected ? '#00ebb9' : 'transparent'};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
`
const InnerNav = styled.ul`
  padding-left: 1px;
  list-style-type: none;
`

export const Title = styled.div`
padding: 5px;
font-family: Roboto;
font-size: 20px;
font-weight: bold;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
color: #002d48;
`

export const InnerTitle = styled(Title)`
font-weight: 500;
opacity: 0.8;
`

export const ParentDot = styled.div`
// margin: auto 0;
// width:40px;
`



interface Props {
  setShouldExpand: (v: boolean) => void
  isExpanded: boolean
}


const FooNavBar: React.FC<Props> = ({ setShouldExpand, isExpanded }) => {
  const [sa, set] = useState<string>("Organisations")
  return (
    <NavBar>
      <div>
        <div>
          <ImgWrapper src={menu} alt="menu" width={70} onClick={() => setShouldExpand(!isExpanded)} />
        </div>
        <ErixLogo>Erix</ErixLogo>
      </div>
      <NavList>
        {Navs.map(({ title, children }) => (
          <NavItem key={title} selected={title === sa && children.length === 0}>
            <MainMenuWrapper onClick={() => set(children.length > 0 ? children[0].title : title)}>
              <Dot size={8} selected={title === sa && children.length === 0} />
              <Title>{title}</Title>
            </MainMenuWrapper>
            {children.length > 0 && <InnerNav>
              {children.map(({ title }) => (
                <NavItem key={title} selected={title === sa}>
                  <TitleWrapper onClick={() => set(title)}>
                    <Dot size={4} selected={title === sa} />
                    <InnerTitle>{title}</InnerTitle>
                  </TitleWrapper>
                </NavItem>
              ))}
            </InnerNav>}
          </NavItem>
        ))}
      </NavList>
    </NavBar>
  );
}

export default FooNavBar;