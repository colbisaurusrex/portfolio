import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout.js'
import About from '../components/About.jsx'
import Title from '../components/Title.jsx'
import Navigation from '../components/Navigation.jsx'

const Container = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  flex-direction: row;
`

const Divider = styled.div`
  margin: 50px 0px 50px 0px;
  border-right: 1px solid;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <Title />
      <Divider />
      <About />
    </Container>
  </Layout>
)

export default IndexPage
