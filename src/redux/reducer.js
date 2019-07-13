import {
  BUTTON_FILES_CLICKED, BUTTON_SUBMIT_CLICKED,
  INPUT_FROM_MAIL,
  INPUT_FROM_NAME, INPUT_GETTING_FILES,
  INPUT_TO_MAIL,
  INPUT_TO_MESSAGE,
  INPUT_TO_NAME,
  INPUT_TO_SUBJECT,
} from './actions'
import { allowToSubmit, checkFiles } from './helpers'

const initialState = {
  fromName: '',
  fromMail: '',
  toName: '',
  toMail: '',
  toSubject: '',
  toMessage: '',
  readyToGetFiles: false,
  canSubmit: false,
  files: [],
  attachments: [],
  fileErrorFeedback: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case INPUT_FROM_NAME: {
      const fromName = action.payload
      const canSubmit = allowToSubmit({ ...state, fromName })
      return { ...state, fromName, canSubmit }
    }

    case INPUT_FROM_MAIL: {
      const fromMail = action.payload
      const canSubmit = allowToSubmit({ ...state, fromMail })
      return { ...state, fromMail, canSubmit }
    }

    case INPUT_TO_NAME: {
      const toName = action.payload
      const canSubmit = allowToSubmit({ ...state, toName })
      return { ...state, toName, canSubmit }
    }

    case INPUT_TO_MAIL: {
      const toMail = action.payload
      const canSubmit = allowToSubmit({ ...state, toMail })
      return { ...state, toMail, canSubmit }
    }

    case INPUT_TO_SUBJECT: {
      const toSubject = action.payload
      const canSubmit = allowToSubmit({ ...state, toSubject })
      return { ...state, toSubject, canSubmit }
    }

    case INPUT_TO_MESSAGE: {
      const toMessage = action.payload
      const canSubmit = allowToSubmit({ ...state, toMessage })
      return { ...state, toMessage, canSubmit }
    }

    case BUTTON_FILES_CLICKED:
      return { ...state, readyToGetFiles: true }

    case INPUT_GETTING_FILES: {
      const fileErrorFeedback = checkFiles(action.payload)
      return {
        ...state,
        files: (!fileErrorFeedback) ? action.payload : [],
        fileErrorFeedback,
        readyToGetFiles: false,
      }
    }

    case BUTTON_SUBMIT_CLICKED:
      return state

    default:
      return state
  }
}
