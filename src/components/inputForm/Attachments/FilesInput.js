import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INPUT_GETTING_FILES } from '../../../redux/actions'

const FilesInput = () => {
  const dispatch = useDispatch()

  return (
    <div className="input-form__files-input-holder">
      <div
        className="input-form__files-input"
        onDragEnter={(event) => {
          event.stopPropagation()
          event.preventDefault()
        }}
        onDragOver={(event) => {
          event.stopPropagation()
          event.preventDefault()
        }}
        onDrop={(event) => {
          event.stopPropagation()
          event.preventDefault()
          const dt = event.dataTransfer
          dispatch({ type: INPUT_GETTING_FILES, payload: dt.files })
        }}
      >
        <h1 className="input-form__h1">Бросайте файлы сюда, я ловлю</h1>
        <span>
        Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы.
        </span>
        <span>Размеры файла до 5 МБ.</span>
      </div>
    </div>
  )
}

export default FilesInput
