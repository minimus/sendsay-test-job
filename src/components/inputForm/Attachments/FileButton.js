import React from 'react'
import { useDispatch } from 'react-redux'
import { BUTTON_FILES_CLICKED } from '../../../redux/actions'

const FileButton = () => {
  const dispatch = useDispatch()

  return (
    <button
      type="button"
      className="input-form__file-button"
      onClick={() => dispatch({ type: BUTTON_FILES_CLICKED })}
    >
      <img src="images/paperclip.svg" alt="Прикрепить файл" />
      <span>Прикрепить файл</span>
    </button>
  )
}

export default FileButton
