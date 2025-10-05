'use strict'

import { Card } from './components'

export const SmartGrid = {
  props: {
    backgroundColor: 'gray',
    border: 'medium solid red',
    height: 20,
    width: 20,
  },
}

const Box = {
  Row: {}
}

const Row = {
  Cell: {}
}

const Cell = {
  props: {
    backgroundColor: 'gray',
    border: 'medium solid red',
    height: 20,
    width: 20,
  },
  text: 'aaaa'
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
