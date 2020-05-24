/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'emotion-theming'
import { Box } from 'rebass'
import { useStaticQuery, graphql } from "gatsby"
import Footer from './Footer'

import Header from "./header"

const baseColors = {
  cream: '#FEFAE6',
  navy: '#12293F',
  teal: '#71A6A3',
  turquoise: '#32A6B8',
  white: '#FAFEFF',
}
 
const colors = {
  primary: baseColors.teal,
  secondary: baseColors.cream,
  tertiary: baseColors.white,
  accent: baseColors.turquoise,
  action: baseColors.turquoise,
  inverted: baseColors.navy,
  backgrounds: {
    main: baseColors.navy,
  }
}

const theme = {
  fonts: {
    body: '"Signika", system-ui, sans-serif',
    heading: '"IM Fell English SC", Arial, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 18, 24, 32, 48, 64
  ],
  colors,
  buttons: {
    primary: {
      bg: 'primary',
      color: 'inverted',
      textTransform: 'uppercase',
    },
    outline: {
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
      color: 'primary',
      textTransform: 'uppercase',
    },
  },
  spacing: [0, 6, 12, 18, 24],
  text: {
    body: {
      color: 'primary',
      fontFamily: 'body',
      fontSize: 2,
      fontWeight: '500',
      lineHeight: '1.4',
    },
    heading: {
      color: 'tertiary',
      fontSize: 5,
      fontWeight: 400,
    },
    label: {
      color: 'accent',
      fontFamily: 'body',
      fontSize: 0,
      fontWeight: '700',
      lineHeight: '1.4',
      textTransform: 'uppercase'
    },
    small: {
      color: 'accent',
      fontFamily: 'body',
      fontSize: 0,
      fontWeight: 400,
    },
    subHead: {
      color: 'tertiary',
      fontFamily: 'heading',
      fontSize: 3,
      fontWeight: 400,
      textTransform: 'uppercase'
    },
    value: {
      color: 'secondary',
      fontFamily: 'body',
      fontSize: 0,
      lineHeight: '1.4',
    },
    
  },
  variants: {
    linkButton: {
      bg: 'action',
      border: '2px solid transparent',
      borderRadius: '3px',
      color: 'inverted',
      display: 'inline-block',
      fontFamily: 'body',
      fontSize: 0,
      fontWeight: '700',
      px: 2,
      py: 1,
      textDecoration: 'none',
      textTransform: 'uppercase',
      '&:focus': {
        borderColor: 'orange'
      }
    }
  },
}

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }

  body {
    background: ${colors.backgrounds.main};
    color: ${colors.primary};
  }
  
  * {
    box-sizing: border-box;
  }
`

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
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box as="main" p={3}>{children}</Box>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
