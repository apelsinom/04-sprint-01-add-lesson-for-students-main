import { Dispatch } from 'redux'
import { desksAPI } from './decks-api.ts'
import { setDesksAC } from './decks-reducer.ts'

export const fetchDesksTC = () => (dispatch: Dispatch) => {
  desksAPI.fetchDesks().then((res) => {
    dispatch(setDesksAC(res.data.items))
  })
}
