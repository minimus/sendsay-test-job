import React from 'react'
import Logo from './components/Logo'
import InputForm from './components/inputForm/InputForm'
import ResultList from './components/resultList/ResultList'

const App = () => (
  <article id="main" className="main">
    <Logo />
    <InputForm />
    <ResultList />
  </article>
)

export default App
