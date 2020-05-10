/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'emotion-theming'
import { Box } from 'rebass'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const theme = {
  fonts: {
    body: '"Rajdhani", Courier, Arial, system-ui, sans-serif',
    heading: '"Carter One", Arial, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 18, 32, 48, 64
  ],
  colors: {
    primary: '#101E2C',
    secondary: '#7A7293',
    accent: '#4A3A70',
    action: '#2F1755',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    },
  },
  text: {
    body: {
      color: 'primary',
      fontFamily: 'body',
      fontSize: 2,
      fontWeight: '500',
      lineHeight: '1.4',
    },
    heading: {
      color: 'accent',
      fontSize: 4,
      fontWeight: 400,
    },
    label: {
      color: 'secondary',
      fontFamily: 'body',
      fontSize: 0,
      fontWeight: '700',
      lineHeight: '1.4',
      textTransform: 'uppercase'
    },
    small: {
      fontFamily: 'body',
      fontSize: 0,
      lineHeight: '1.4',
    },
    subHead: {
      color: 'accent',
      fontSize: 3,
      fontWeight: 400,
    },
  },
  variants: {
    linkButton: {
      bg: 'action',
      borderRadius: '3px',
      color: 'white',
      fontFamily: 'body',
      fontSize: 1,
      fontWeight: '700',
      px: 2,
      py: 1,
      textDecoration: 'none',
    }
  }
}


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
