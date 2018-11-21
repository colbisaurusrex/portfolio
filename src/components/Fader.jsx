import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    -webkit-animation: fadein 2s;
    -moz-animation: fadein 2s;
    -ms-animation: fadein 2s;
    -o-animation: fadein 2s;
    animation: fadein 2s;

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-moz-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-webkit-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-ms-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @-o-keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`

const Fader = ({ children }) => {
    return (
        <Wrapper>
            { children }
        </Wrapper>
    )
}

export default Fader