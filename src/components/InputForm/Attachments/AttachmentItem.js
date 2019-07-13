import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import propTypes from 'prop-types'
import { BUTTON_DELETE_ATTACHMENT_CLICKED } from '../../../redux/actions'
import { fileNameParts, shortenString } from '../../../redux/helpers'

const AttachmentItem = ({ idx, name }) => {
  const dispatch = useDispatch()

  const normalizeName = (fileName) => {
    if (fileName.length < 30) return fileName
    const [fname, ext] = fileNameParts(fileName)
    return shortenString(fname, 30 - ext.length - 3) + ext
  }

  return (
    <div className="input-form__attachments__item">
      <img
        className="input-form__attachments__item-image"
        src="images/paperclip-big.svg"
        alt="attachment"
      />
      <span className="input-form__attachments__item-name">{normalizeName(name)}</span>
      <button
        type="button"
        className="input-form__attachments__item-delete"
        onClick={() => dispatch({ type: BUTTON_DELETE_ATTACHMENT_CLICKED, payload: idx })}
      >
        <img
          className="input-form__attachments__item-bin"
          src="images/bin.svg"
          alt="bin"
        />
        <span className="input-form__attachments__item-text">Удалить</span>
      </button>
    </div>
  )
}

AttachmentItem.propTypes = {
  idx: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
}

export default AttachmentItem
