import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})
export const desksAPI = {
  fetchDesks() {
    return instance.get<FetchDesksResponse>('v2/decks')
  },
  /*  addDeck(name: string) {
    return instance.post<Desk>('v1/decks', { name })
  },*/
  addDeck(params: AddDeckParams) {
    return instance.post<Desk>('v1/decks', params)
  },
}
export type AddDeckParams = {
  name: string
}
export type FetchDesksResponse = {
  items: Desk[]
  pagination: Pagination
}
export type Author = {
  id: string
  name: string
}
export type Desk = {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
