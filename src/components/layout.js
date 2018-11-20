import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    // <link href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Bevan|Changa+One|Lilita+One|Playfair+Display:400,900|Poller+One|Rufina|Titan+One|Zilla+Slab+Highlight:700" rel="stylesheet"></link>
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <style>{'body { background-color: #fafafa; }'}</style>
          <html lang="en" />
        </Helmet>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ alignSelf: 'center'}}>
            <Header title={ data.site.siteMetadata.title } />
          </div>
          <div style={{ alignSelf: 'center'}}>
            <Navigation />
          </div>
          </div>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          { children }
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
