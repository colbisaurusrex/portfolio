import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: 'Codystar';
  font-size: 40px;
  line-height: 30px;
  letter-spacing: 2px;
  transform: skewX(8deg);
  background-image: linear-gradient(to bottom, transparent 0%, transparent 45%, #faff00 45%, #faff00 55%, transparent 55%, transparent 100%);
`
const linkStyle = { textDecoration: 'none'}
const Header = ({ title }) => {
    return (
        <Link to="/" style={ linkStyle }>
            <H1>{ title }</H1>
        </Link>
    )
}

// TODO: Prop checking
export default Header