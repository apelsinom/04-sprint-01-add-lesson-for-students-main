import { Dispatch } from 'redux'
import { AddDeckParams, desksAPI } from './decks-api.ts'
import { addDesksAC, setDesksAC } from './decks-reducer.ts'

export const fetchDesksTC = () => (dispatch: Dispatch) => {
  desksAPI.fetchDesks().then((res) => {
    dispatch(setDesksAC(res.data.items))
  })
}
export const addDeckTC = (params: AddDeckParams) => async (dispatch: Dispatch) => {
  return desksAPI.addDeck(params).then((res) => {
    dispatch(addDesksAC(res.data))
  })
}
