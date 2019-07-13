import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INPUT_FROM_MAIL, INPUT_FROM_NAME } from '../../redux/actions'
import { checkInputFields } from '../../redux/helpers'

const FromInputs = () => {
  const fromName = useSelector(state => state.fromName)
  const fromMail = useSelector(state => state.fromMail)

  const dispatch = useDispatch()

  const [invalidName, invalidMail] = checkInputFields(fromName, fromMail)

  return (
    <label className="input-form__label" htmlFor="message-from-name">
      От кого
      <div className="input-group">
        <input
          id="message-from-name"
          className="input-form__input form-control"
          type="text"
          placeholder="Имя"
          value={fromName}
          onChange={event => dispatch({ type: INPUT_FROM_NAME, payload: event.target.value })}
        />
        <input
          id="message-from-email"
          className="input-form__input form-control"
          type="text"
          placeholder="Email"
          value={fromMail}
          onChange={event => dispatch({ type: INPUT_FROM_MAIL, payload: event.target.value })}
        />
      </div>
      <div className="input-form__feedback-holder">
        <span className={`input-form__feedback-holder__invalid-name${invalidName ? ' invalid-data' : ''}`}>
          Имя не может быть пустым
        </span>
        <span className={`input-form__feedback-holder__invalid-mail${invalidMail ? ' invalid-data' : ''}`}>
          Email не может быть пустым
        </span>
      </div>
    </label>
  )
}

export default FromInputs
