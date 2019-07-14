import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'
import { shortenString } from '../../redux/helpers'

const ResultTableItem = ({ date, subject, status }) => {
  const [statusString, classString] = ((value) => {
    if (value > -1) return ['В очереди', 'queue']
    if (value < -1) return ['Ошибка', 'error']
    return ['Отправлено', 'success']
  })(status)

  return (
    <div className="result-table__row">
      <span className="result-table__row-date">{date}</span>
      <span className="result-table__row-subject">{shortenString(subject, 70)}</span>
      <span className={classNames('result-table__row-status', classString)}>{statusString}</span>
    </div>
  )
}

ResultTableItem.propTypes = {
  date: propTypes.string.isRequired,
  subject: propTypes.string.isRequired,
  status: propTypes.number.isRequired,
}

export default ResultTableItem
