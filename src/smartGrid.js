'use strict'

import { Card } from './components'

// FIXME: Only export what will be used by external components
export const SmartGridCell = {
  props: {
    col: '0',

    backgroundColor: 'blue',
    border: 'thin solid gray',
    height: 20,
    width: 20,
  },
  text: 'a',
}

export const SmartGridRow = {
  props: {
    row: '0',

    display: 'flex',
    gap: '16px',
  },
  childExtend: SmartGridCell,
  ...Array(12)
    .fill()
    .map((val, index) => ({ col: index.toString() })),
}

export const SmartGrid = {
  props: {
    gap: '16px',
  },
  childExtend: SmartGridRow,
  ...Array(6)
    .fill()
    .map((val, index) => {
      return {
        props: {
          row: index.toString()
        }
      }
    }),
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
