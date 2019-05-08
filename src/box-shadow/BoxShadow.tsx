import * as React from 'react';
import styled from 'styled-components/macro'


const Windows = styled.div`
  width: 150px;
  height: 80px;
  border-radius: 6px;
  background-color: blue;
  box-shadow: 0px 0px 10px #aaaaaa;
`

class BoxShadowPlay extends React.Component {
    render() {
        return (
            <Windows>
                This contains a container
        </Windows>
        );
    }
}

export default BoxShadowPlay;
