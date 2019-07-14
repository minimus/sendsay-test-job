import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  INPUT_PROCESSING_FILES_FINISHED,
  INPUT_PROCESSING_FILES_STARTED,
} from '../../../redux/actions'
import { processFiles } from '../../../redux/helpers'
import AttItem from './AttachmentItem'

const AttachList = () => {
  const fileErrorFeedback = useSelector(state => state.fileErrorFeedback)
  const files = useSelector(state => state.files)
  const attachments = useSelector(state => state.attachments)
  const dispatch = useDispatch()

  useEffect(() => {
    if (files.length) {
      dispatch({ type: INPUT_PROCESSING_FILES_STARTED })

      processFiles(files)
        .then(data => dispatch({
          type: INPUT_PROCESSING_FILES_FINISHED,
          payload: data,
        }))
        .catch((e) => {
          console.log(e)
        })
    }
  }, [files, dispatch])

  return (
    <div className="input-form__attachments">
      {fileErrorFeedback && <span className="input-form__files-feedback">{fileErrorFeedback}</span>}
      {attachments.map((item, idx) => <AttItem key={idx.toString()} name={item.name} idx={idx} />)}
    </div>
  )
}

export default AttachList
