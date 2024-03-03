import { Dispatch } from 'redux'
import { desksAPI, Desk } from './decks-api.ts'

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
const setDesksAC = (desks: Desk[]) => ({ type: 'SET-DESKS', desks }) as const
export const fetchDesksTC = () => (dispatch: Dispatch) => {
  desksAPI.fetchDesks().then((res) => {
    dispatch(setDesksAC(res.data.items))
  })
}
type DecksActions = ReturnType<typeof setDesksAC>
