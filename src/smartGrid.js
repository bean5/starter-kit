'use strict'

import { Card } from './components'

const SmartGridCell = {
  state: { X: 0, Y: 0 },
  props: {
    backgroundColor: 'blue',
    borderRadius: '2px',
    gap: '10px',
    height: 20,
    width: 20,
  },
  text: (_el, state) => `${state.X},${state.Y}`,
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
