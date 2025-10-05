'use strict'

import { Card } from './components'

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
