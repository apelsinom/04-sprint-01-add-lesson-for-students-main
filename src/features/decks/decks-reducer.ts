import { Desk } from './decks-api.ts'

const initialState = {
  decks: [] as Desk[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DESKS':
      return { ...state, decks: action.desks }
    default:
      return state
  }
}
export const setDesksAC = (desks: Desk[]) => ({ type: 'SET-DESKS', desks }) as const

type DecksActions = ReturnType<typeof setDesksAC>
