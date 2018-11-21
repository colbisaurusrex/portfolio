import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Vollkorn;
`

const About = () => {
    return (
    <TextWrapper>
        <div>
          <p>
            Lorem ipsum dolor amet jean shorts pinterest thundercats edison bulb, actually mlkshk literally. +1 literally la croix intelligentsia godard messenger bag DIY lyft. Literally chillwave distillery, poutine normcore disrupt paleo mixtape seitan. Gochujang lomo street art humblebrag woke everyday carry meh, raw denim poutine etsy meditation hella shaman banh mi.
          </p>
          <p>
            Everyday carry fanny pack beard coloring book crucifix letterpress brooklyn keffiyeh occupy cornhole austin umami art party. Chillwave poutine locavore ethical 8-bit woke bushwick. Craft beer deep v intelligentsia, vice salvia chartreuse listicle meditation forage jianbing pork belly man bun. Bitters vaporware authentic, typewriter meditation artisan etsy prism pok pok ennui air plant +1 ramps truffaut. Ennui PBR&B portland air plant, typewriter blue bottle poutine shaman offal cold-pressed.
          </p>
          <p>
            Quinoa biodiesel pop-up williamsburg post-ironic locavore pug craft beer brooklyn blue bottle poutine shaman. Post-ironic migas humblebrag, selfies fam venmo scenester tote bag celiac palo santo poke salvia PBR&B retro. Austin ugh fashion axe church-key green juice raw denim. Jianbing butcher polaroid sartorial typewriter waistcoat, trust fund echo park ennui meggings cornhole. Tbh disrupt organic, farm-to-table ethical vaporware leggings thundercats ugh af.
          </p>
        </div>
      </TextWrapper>
    )
}

export default About