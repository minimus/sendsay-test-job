import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INPUT_TO_MAIL, INPUT_TO_NAME } from '../../redux/actions'
import { checkInputFields } from '../../redux/helpers'

const ToInputs = () => {
  const toName = useSelector(state => state.toName)
  const toMail = useSelector(state => state.toMail)

  const dispatch = useDispatch()

  const [invalidName, invalidMail] = checkInputFields(toName, toMail)

  return (
    <label className="input-form__label" htmlFor="message-to-name">
      Кому
      <div className="input-group">
        <input
          id="message-to-name"
          className="input-form__input form-control"
          type="text"
          placeholder="Имя"
          value={toName}
          onChange={event => dispatch({ type: INPUT_TO_NAME, payload: event.target.value })}
        />
        <input
          id="message-to-email"
          className="input-form__input form-control"
          type="text"
          placeholder="Email"
          value={toMail}
          onChange={event => dispatch({ type: INPUT_TO_MAIL, payload: event.target.value })}
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

export default ToInputs
