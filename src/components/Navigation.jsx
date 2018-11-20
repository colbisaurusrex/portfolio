import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 300px;
    max-width: 400px;
`

const NavItem = styled.span`
    font-family: Roboto;
    font-size: 20px;

    &:hover {
        background-image: linear-gradient(to bottom, transparent 0%, transparent 45%, orange 45%, orange 55%, transparent 55%, transparent 100%);
    }
`

const linkStyle = { textDecoration: 'none', color: 'black' }
const Navigation = () => {
    return (
        <Container>
            <Link to="/resume/" style={ linkStyle }>
                <NavItem>Resume</NavItem>
            </Link>
            <Link to="/projects/" style={ linkStyle }>
                <NavItem>Projects</NavItem>
            </Link>
            <Link to="/blog/" style={ linkStyle }>
                <NavItem>Blog</NavItem>
            </Link>
        </Container>
    )
}

// TODO: Prop checking
export default Navigation