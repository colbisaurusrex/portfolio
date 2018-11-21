import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Fader from '../components/Fader.jsx'

const TitleWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Name = styled.div`
  font-family: 'Playfair Display', sans-serif;
  font-weight: bold;
  font-size: 80px;
`

const FaderWrapper = styled.div`
  font-family: Vollkorn;
  font-weight: 600;
  font-style: italic;
  font-size: 30px;
  color: #ffe54c;
`

const Title = () => {
    return (
    <TitleWrapper>
        <div>
          <Name>
            <div style={{ color: '#ffb300' }}>
              Colby
            </div>
            <div style={{ color: '#c68400'}}>
              Barthelmess
            </div>
          </Name>
          <FaderWrapper>
            <Fader>
                <div>front end developer</div>
            </Fader>
          </FaderWrapper>
        </div>
      </TitleWrapper>
    )
}

export default Title