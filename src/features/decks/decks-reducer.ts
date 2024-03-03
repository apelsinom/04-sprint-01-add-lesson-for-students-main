import { Desk } from './decks-api.ts'

const initialState = {
  decks: [] as Desk[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DESKS':
      return { ...state, decks: action.decks }
    case 'ADD-DESKS':
      return { ...state, decks: [action.deck, ...state.decks] }
    default:
      return state
  }
}
export const setDesksAC = (decks: Desk[]) => ({ type: 'SET-DESKS', decks }) as const
export const addDesksAC = (deck: Desk) => ({ type: 'ADD-DESKS', deck }) as const

type DecksActions = ReturnType<typeof setDesksAC> | ReturnType<typeof addDesksAC>
