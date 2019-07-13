import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INPUT_TO_SUBJECT } from '../../redux/actions'

const SubjectInput = () => {
  const toSubject = useSelector(state => state.toSubject)

  const dispatch = useDispatch()

  return (
    <label className="input-form__label" htmlFor="message-to-subject">
      Тема письма
      <input
        id="message-to-subject"
        className="input-form__input form-control"
        type="text"
        placeholder="Тема"
        value={toSubject}
        onChange={event => dispatch({ type: INPUT_TO_SUBJECT, payload: event.target.value })}
      />
    </label>
  )
}

export default SubjectInput
