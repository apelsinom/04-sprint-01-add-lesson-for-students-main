import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDesks } from './DeckItem/useFetchDesks.ts'

export const DecksList = () => {
  const { decks } = useFetchDesks()
  return (
    <ul className={s.list}>
      {decks.map((desk) => (
        <DeckItem key={desk.id} deck={desk} />
      ))}
    </ul>
  )
}
