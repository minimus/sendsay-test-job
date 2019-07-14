import {
  BUTTON_DELETE_ATTACHMENT_CLICKED,
  BUTTON_FILES_CLICKED, BUTTON_SUBMIT_CLICKED,
  INPUT_FROM_MAIL,
  INPUT_FROM_NAME, INPUT_GETTING_FILES, INPUT_PROCESSING_FILES_FINISHED,
  INPUT_TO_MAIL,
  INPUT_TO_MESSAGE,
  INPUT_TO_NAME,
  INPUT_TO_SUBJECT, MESSAGE_SUBMIT_FINISHED, MESSAGE_SUBMIT_STARTED,
} from './actions'
import { allowToSubmit, checkFiles, formatDate } from './helpers'

const initialState = {
  fromName: '',
  fromMail: '',
  toName: '',
  toMail: '',
  toSubject: '',
  toMessage: '',
  readyToGetFiles: false,
  canSubmit: false,
  shouldSubmit: false,
  submitting: false,
  files: [],
  attachments: [],
  fileErrorFeedback: '',
  messages: [
    {
      date: '30 сентября',
      subject: 'Bla-bla-bla',
      status: 0,
      trackId: '8888',
    },
    {
      date: '30 декабря',
      subject: 'Тема письма, которая не поместилась в эту строку потому, что не поместилась',
      status: -1,
      trackId: '8889',
    },
    {
      date: '30 сентября',
      subject: 'Тема письма, которая не поместилась в эту строку потому, что как-то не так поместилась',
      status: -2,
      trackId: '8890',
    },
  ],
  queue: [],
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

    case INPUT_PROCESSING_FILES_FINISHED: {
      const attachments = [...state.attachments, ...action.payload]
      return { ...state, files: [], attachments }
    }

    case BUTTON_DELETE_ATTACHMENT_CLICKED: {
      const idx = action.payload
      const attachments = [...state.attachments]
      attachments.splice(idx, 1)
      return { ...state, attachments }
    }

    case BUTTON_SUBMIT_CLICKED:
      return { ...state, shouldSubmit: true }

    case MESSAGE_SUBMIT_STARTED:
      return { ...state, shouldSubmit: false, submitting: true }

    case MESSAGE_SUBMIT_FINISHED: {
      const messages = [...state.messages]
      const queue = [...state.queue]
      const { toSubject: subject } = state
      const date = formatDate(new Date())
      const { trackId = '', status = 0 } = action.payload
      queue.push(trackId)
      messages.push({
        date, subject, status, trackId,
      })

      return { ...state, messages }
    }

    default:
      return state
  }
}
