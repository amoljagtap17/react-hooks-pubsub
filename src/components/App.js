import React, { Fragment, useReducer } from 'react'
import reducer, { initialState } from '../redux/reducer'
import PublishMessage from './PublishMessage'
import MessageBoard from './MessageBoard'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('state', state)

  return (
    <Fragment>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage dispatch={dispatch} />
      <hr />
      <MessageBoard messages={state.messages} />
    </Fragment>
  )
}

export default App
