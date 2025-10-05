'use strict'

import { Card } from './components'

const SmartGridXY = {
  state: { X: 0, Y: 0 },
  props: {
    backgroundColor: 'blue',
    border: 'thin solid gray',
    height: 20,
    width: 20,
  },
  text: (_el, state) => `${state.X},${state.Y}`,
}

const SmartGridX = {
  state: { X: 0 },
  props: {

    display: 'flex',
    gap: '16px',
  },
  childExtend: SmartGridXY,
  ...Array(12)
    .fill()
    .map((val, index) => ({
      state:
      {
        X: 0,
        Y: index,
      }
    })),
}

const SmartGrid = {
  props: {
    gap: '16px',
  },
  childExtend: SmartGridX,
  ...Array(6)
    .fill()
    .map((val, index) => ({
      state: {
        X: index
      }
    })),
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
