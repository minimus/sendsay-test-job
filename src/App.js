import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import {  } from './redux/actions'
import InputForm from './components/inputForm/InputForm'
import Logo from './components/Logo'

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
      <Logo />
      <InputForm />
    </article>
  )
}
