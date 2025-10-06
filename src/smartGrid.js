'use strict'

import { Card } from './components'

const selection = {
  X: 0,
  Y: 0,
}

const SmartGridCell = {
  state: { X: 0, Y: 0 },
  Box: {
    props: {
      background: 'blue',
      borderRadius: '2px',
      gap: '10px',
      boxSize: "A A",
    },
    text: (e, t) => "{{X}},{{Y}}",
  },
  on: {
    click: (e, t, i) => {
      selection.X = i.X
      selection.Y = i.Y
    }
  },
}

const SmartGridRow = {
  props: {
    display: 'flex',
    gap: '20px',
  },
  state: { X: 0 },
  childExtend: SmartGridCell,
  ...Array(6)
    .fill()
    .map((_val, index) => ({
      state:
      {
        X: 0,
        Y: index,
      }
    })),
}

const SmartGrid = {
  childExtend: SmartGridRow,
  ...Array(3)
    .fill()
    .map((_val, index) => ({
      props: {
        gap: '2px',
      },
      state: {
        X: index,
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
      H3: (e, t) => `Selection Coordinates: ${selection.X},${selection.Y}`,
    },
    right: {
      H3: (e, t) => `Total cells selected: ${(selection.X + 1) * (selection.Y + 1)}`,
    },
  },
}
