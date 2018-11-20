import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout.js'

const GlobalStyle = createGlobalStyle`
  h1 {
    font-family: 'Abril Fatface';
    font-size: 80px;
    line-height: 30px;
  }
`


const IndexPage = () => (
  <Layout>
    <div></div>
  </Layout>
)

export default IndexPage
