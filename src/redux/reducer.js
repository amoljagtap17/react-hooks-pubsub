import produce from 'immer'
import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS } from './types'

export const initialState = {
  messages: [],
  username: 'anonymous',
  reactionsMap: {}
}

const REACTION_TYPES = REACTION_OBJECTS.map(
  REACTION_OBJECT => REACTION_OBJECT.type
)

const reducer = produce((draft, action) => {
  if (REACTION_TYPES.includes(action.type)) {
    const { messageId } = action.item
    const messageReactions = draft.reactionsMap[messageId]

    if (messageReactions) {
      draft.reactionsMap[messageId].push(action.item)
    } else {
      draft.reactionsMap[messageId] = [action.item]
    }

    return
  }

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
