import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useAppDispatch } from '../../../app/store.ts'
import { fetchDesksTC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { selectDesks } from '../decks-selectors.ts'
import { useSelector } from 'react-redux'

export const DecksList = () => {
  const desks = useSelector(selectDesks)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDesksTC())
  }, [])
  return <ul className={s.list}>{desks && desks.map((desk) => <DeckItem key={desk.id} deck={desk} />)}</ul>
}
