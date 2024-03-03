import { useSelector } from 'react-redux'
import { selectDesks } from '../../decks-selectors.ts'
import { useAppDispatch } from '../../../../app/store.ts'
import { useEffect } from 'react'
import { fetchDesksTC } from '../../decks-thunks.ts'

export const useFetchDesks = () => {
  const dispatch = useAppDispatch()
  const decks = useSelector(selectDesks)
  useEffect(() => {
    dispatch(fetchDesksTC())
  }, [dispatch])
  return {
    decks,
  }
}
