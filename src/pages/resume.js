import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
const H1 = styled.h1`
  font-family: 'Abril Fatface';
  font-size: 40px;
  line-height: 30px;
`
const Resume = () => (
  <Layout>
    <H1>
      Using Gatsby To Build A Portfolio
    </H1>
    <div>
      <p style={{ fontFamily: 'Overpass Mono', lineHeight: '30px'}}>
        This portfolio is a static site, not a full blown app. In the past when I have built static sites, I have utilized Jekyll, a ruby based generator, in combination with GitHub Pages. It's a great generator, but since then I have spent countless hours coding Javscript/React in production. Naturally, when I decided to build this portfolio I looked for ways to utilize my current skillset.
      </p>
      <p style={{ fontFamily: 'Overpass Mono', lineHeight: '30px'}}>
        Gatsby is Node.js based. I first heard of Gatsby at a React conference in San Francisco. I was really excited to discover dynamic content in a static site. I had never thought of utilizing a framework like React, Angular or Vue for this purpose. Gatsby would allow me to do that. And it is lightning fast because it is PWA. Oh, and GraphQL too. I have never used GraphQL, so Gatsby also presented the opportunity to learn.
      </p>
    </div>
    <br/>
    <img src="~/src/images/unsplash_forest.jpg"/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume