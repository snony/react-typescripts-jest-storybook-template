import React, {useState} from 'react';
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
padding: 3px;
`

const MainMenuWrapper = styled.div`
  display: flex;
  :hover{
    cursor: pointer;
  }
`

const NavItem = styled.li<{selected:boolean}>`
  background-color: ${({selected})=>selected? '#ffffff':'inherit'};
  border-right: ${({selected})=>selected? '2px solid #00ebb9':'none'};
`

const TitleWrapper = styled(MainMenuWrapper)`
  display: flex;
`

const Dot = styled.div<{ size: number }>`
  margin: auto 0;
  border: 1px solid black;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
`
const InnerNav = styled.ul`
  padding: 3px;
`

const Title = styled.div`
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

const InnerTitle = styled(Title)`
font-weight: 500;
opacity: 0.8;
`

interface Props {
    setShouldExpand: (v: boolean) => void
    isExpanded: boolean
}


const FooNavBar: React.FC<Props> = ({ setShouldExpand, isExpanded }) => {
    const [sa, set] = useState<string>("Organisations")
    console.log(sa)
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
                    <NavItem key={title} selected={title===sa && children.length===0}>
                        <MainMenuWrapper onClick={()=>set(children.length> 0? children[0].title:title)}>
                            <Dot size={8} />
                            <Title>{title}</Title>
                            <div />
                        </MainMenuWrapper>
                        {children.length > 0 && <InnerNav>
                            {children.map(({ title}) => (
                                <NavItem key={title} selected={title===sa}>
                                    <TitleWrapper onClick={()=>set(title)}>
                                        <Dot size={4}/>
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