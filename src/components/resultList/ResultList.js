import React from 'react'
import { useSelector } from 'react-redux'
import ResultTable from './ResultTable'

const ResultList = () => {
  const messages = useSelector(state => state.messages)
  const hasMessages = messages.length > 0
  const resultBody = (hasMessages)
    ? <ResultTable />
    : <div className="result-list__results">Сообщения ещё не отправлялись</div>

  return (
    <section className="result-list">
      <h1 className="result-list__h1">Отправленные сообщения</h1>
      {resultBody}
    </section>
  )
}

export default ResultList
