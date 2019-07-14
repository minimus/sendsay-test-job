import React from 'react'
import { useSelector } from 'react-redux'
import ToInputs from './ToInputs'
import FromInputs from './FromInputs'
import Subject from './SubjectInput'
import Message from './MessageInput'
import Attachments from './Attachments/AttachList'
import FileButton from './Attachments/FileButton'
import SubmitButton from './SubmitButton'
import FilesInput from './Attachments/FilesInput'

const InputForm = () => {
  const readyToGetFiles = useSelector(state => state.readyToGetFiles)

  return (
    <section className="input-form form-group">
      <h1 className="input-form__h1">Отправлялка сообщений</h1>
      <FromInputs />
      <ToInputs />
      <Subject />
      <Message />
      <Attachments />
      <FileButton />
      <SubmitButton />
      {readyToGetFiles && <FilesInput />}
    </section>
  )
}

export default InputForm
