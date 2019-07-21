import produce from 'immer'
import { NEW_MESSAGE, SET_USERNAME } from './types'

export const initialState = {
  messages: [],
  username: 'anonymous'
}

const reducer = produce((draft, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      draft.messages.push(action.item)
      return
    case SET_USERNAME:
      draft.username = action.username
      return
    default:
      return
  }
})

export default reducer
