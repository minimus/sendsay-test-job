import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import {  } from './redux/actions'
import InputForm from './components/InputForm/InputForm'

export default function App() {
  // const list = useSelector(state => state.list)
  // const dispatch = useDispatch()

  /* useEffect(() => {
    if (list === null) {
      dispatch({ type: TODO_LIST_LOAD })
    }
  }, [list, dispatch]) */

  return (
    <article id="main" className="main">
      <InputForm />
    </article>
  )
}
