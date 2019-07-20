import React, { useReducer, useEffect } from 'react'
import reducer, { initialState } from './redux/reducer'
import { newMessage } from './redux/actions'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    setInterval(() => {
      dispatch(newMessage({ text: 'some test', username: 'AJ' }))
    }, 5000)
  }, [])

  console.log('state', state)

  return <h1>React App!</h1>
}

export default App
