import produce from 'immer'
import { NEW_MESSAGE } from './types'

export const initialState = {
  messages: []
}

const reducer = produce((draft, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      draft.messages.push(action.item)
      return
    default:
      return
  }
})

export default reducer
