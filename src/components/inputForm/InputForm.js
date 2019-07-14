import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ToInputs from './ToInputs'
import FromInputs from './FromInputs'
import Subject from './SubjectInput'
import Message from './MessageInput'
import Attachments from './Attachments/AttachList'
import FileButton from './Attachments/FileButton'
import SubmitButton from './SubmitButton'
import FilesInput from './Attachments/FilesInput'
import { MESSAGE_SUBMIT_FINISHED, MESSAGE_SUBMIT_STARTED } from '../../redux/actions'
import { sendMessage } from '../../redux/helpers'

const InputForm = () => {
  const readyToGetFiles = useSelector(state => state.readyToGetFiles)
  const shouldSubmit = useSelector(state => state.shouldSubmit)
  const currentState = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    if (shouldSubmit) {
      dispatch({ type: MESSAGE_SUBMIT_STARTED })

      sendMessage(currentState)
        .then(data => dispatch({ type: MESSAGE_SUBMIT_FINISHED, payload: data }))
        .catch(err => dispatch({ type: 'MESSAGE_SUBMIT_ERROR', payload: err }))
    }
  }, [shouldSubmit, currentState, dispatch])

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
