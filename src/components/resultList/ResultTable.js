import React from 'react'
import { useSelector } from 'react-redux'
import TableHeader from './ResultTableHeader'
import TableItem from './ResultTableItem'

const ResultTable = () => {
  const messages = useSelector(state => state.messages)

  return (
    <div className="result-list__results">
      <TableHeader />
      {messages.map((item, idx) => (
        <TableItem
          key={idx.toString()}
          subject={item.subject}
          date={item.date}
          status={item.status}
        />
      ))}
    </div>
  )
}

export default ResultTable
