import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BUTTON_SUBMIT_CLICKED } from '../../redux/actions'

const SubmitButton = () => {
  const canSubmit = useSelector(state => state.canSubmit)
  const dispatch = useDispatch()

  return (
    <div>
      <input
        type="button"
        className="input-form__submit-button"
        disabled={!canSubmit}
        value="Отправить"
        onClick={() => dispatch({ type: BUTTON_SUBMIT_CLICKED })}
      />
    </div>
  )
}

export default SubmitButton
