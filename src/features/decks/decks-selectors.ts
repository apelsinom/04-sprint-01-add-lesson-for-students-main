import { AppRootState } from '../../app/store.ts'

export const selectDesks = (state: AppRootState) => state.decksReducer.decks
