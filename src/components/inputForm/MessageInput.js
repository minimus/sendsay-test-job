import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INPUT_TO_MESSAGE } from '../../redux/actions'

const MessageInput = () => {
  const toMessage = useSelector(state => state.toMessage)

  const dispatch = useDispatch()

  return (
    <label htmlFor="message-to-message" className="input-form__label">
      Сообщение
      <textarea
        className="input-form__textarea form-control"
        placeholder="Введите сообщение"
        value={toMessage}
        onChange={event => dispatch({ type: INPUT_TO_MESSAGE, payload: event.target.value })}
      />
    </label>
  )
}

export default MessageInput
