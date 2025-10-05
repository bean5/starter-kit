'use strict'

import { Card } from './components'

// FIXME: Only export what will be used by external components
export const SmartGridCell = {
  props: {
    col: '0',

    backgroundColor: 'blue',
    border: 'thin solid red',
    height: 20,
    width: 20,
  },
  text: '',
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
    .map((val, index) => ({})),
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
