'use strict'

import { Flex, Link } from 'smbls'

export const Header = {
  extend: Flex,
  props: {
    minWidth: '100%',
    padding: 'Z B',
    align: 'center space-between'
  },

  Flex: {
    props: { gap: 'C' },
    childExtend: {
      extend: Link,
      props: ({ props }) => ({
        textDecoration: window.location.pathname === props.href ? 'underline' : 'none'
      })
    },
    Text_logo: { href: '/', text: 'Hello!' },
    Text_about: { href: '/about', text: 'About' },
    Text_grid: { href: '/grid', text: 'Grid' }
  },

  ThemeSwitcher: {}
}

export const ThemeSwitcher = {
  extend: Flex,
  props: { gap: 'A2' },
  childExtend: {
    props: (element, state) => ({
      active: state.globalTheme === element.key,
      cursor: 'pointer',
      '.active': {
        fontWeight: '900'
      }
    }),
    on: {
      click: (event, element, state) => {
        state.update({ globalTheme: element.key })
      }
    }
  },
  dark: { text: 'Dark' },
  light: { text: 'Light' },
  midnight: { text: 'Midnight' }
}

export const Card = {
  props: { gap: 'A2' },

  title: { H1: 'title' },
  subTitle: { H3: 'subtitle' },
  content: 'content',

  footer: {
    props: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    left: {
      H3: 'footer content',
    },
    right: {
      H3: 'footer content right',
    }
  },
}

export const SmartGrid = {
  title: 'main goes here',
}

export const CardSmartGrid = {
  extend: Card,
  title: 'Smart Grid',
  subTitle: 'Hover and click is supported',
  content: SmartGrid,
  footer: {
    left: {
      H3: 'info left',
    },
    right: {
      H3: 'info right',
    },
  },
}

export const Footer = {
  props: {
    padding: 'Z B',
    order: 9
  }
}
