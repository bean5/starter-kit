'use strict'

import { Card } from './components'

const SmartGridCell = {
  state: { X: 0, Y: 0 },
  Box: {
    props: {
      background: 'blue',
      borderRadius: '2px',
      gap: '10px',
      boxSize: "A A",
    },
    text: (_e, t) => `${t.X},${t.Y}`,
  },
  on: {
    click: (e, t, i) => {
      i.update({
        "X": i.X + 1,
        "Y": i.Y + 1,
      })
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
  state: { selectedX: 0, selectedY: 0 },
  extend: Card,

  title: 'Smart Grid',
  subTitle: 'Hover and click is supported',
  content: SmartGrid,
  footer: {
    left: {
      H3: (el, state) => `Selection Coordinates: ${state.selectedX},${state.selectedY}`,
    },
    right: {
      H3: (el, state) => `Total cells selected: ${(state.selectedX + 1) * (state.selectedY + 1)}`,
    },
  },
}
