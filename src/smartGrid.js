'use strict'

import { Card } from './components'

// FIXME: Only export what will be used by external components
export const SmartGridCell = {
  props: {
    backgroundColor: 'blue',
    border: 'medium solid red',
    height: 20,
    width: 20,
  },
  text: 'a',
}

export const SmartGridRow = {
  SmartGridCell: {},
}

export const SmartGrid = {
  SmartGridRow: {},
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
