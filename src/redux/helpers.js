const BYTES_5MB = 5242880
const BYTES_20MB = 20971520

export const checkInputFields = (name = '', mail = '') => {
  if ((name && mail) || (!name && !mail)) return [false, false]
  if (!name && mail) return [true, false]
  return [false, true]
}

export const isValidMail = mail => /^.+@.+$/.test(mail)

export const allowToSubmit = ({
  fromName, fromMail, toName, toMail, toSubject, toMessage,
}) => (
  !!fromName
    && !!fromMail
    && !!toName
    && !!toMail
    && !!toSubject
    && !!toMessage
)

const validkMimeType = (type) => {
  const types = [
    'application/x-compressed',
    'application/x-zip-compressed',
    'application/zip',
    'multipart/x-zip',
    'application/pdf',
    'application/msword',
    'application/excel',
    'image/jpeg',
    'image/gif',
    'image/png',
  ]

  return types.indexOf(type) > -1
}

export const checkFiles = (files) => {
  let filesSize = 0
  for (const file of files) {
    const { size, type } = file
    if (size >= BYTES_5MB) return 'Один или несколько файлов превышают допустимый размер'
    if (!validkMimeType(type)) return 'Один или несколько файлов имеют недопустимый формат'
    filesSize += size
  }
  if (filesSize > BYTES_20MB) return 'Общий размер вложения превышает допустимый размер'
  return ''
}

const arrayBufferToString = (arrayBuffer, decoderType = 'utf-8') => {
  const decoder = new TextDecoder(decoderType)
  return decoder.decode(arrayBuffer)
}

const readFileAsync = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onload = () => {
    const data = arrayBufferToString(reader.result)
    resolve({ name: file.name, data: window.btoa(unescape(encodeURIComponent(data))) })
  }
  reader.onerror = reject

  reader.readAsArrayBuffer(file)
})

export const processFiles = async files => Promise.all([...files].map(item => readFileAsync(item)))

export const shortenString = (str, len) => {
  if (str.length <= len) return str
  const out = str.slice(0, len + 1)
  const lastIdx = out.lastIndexOf(' ')
  return `${(lastIdx === -1) ? out : out.slice(0, lastIdx)}...`
}

export const fileNameParts = (fileName) => {
  const name = fileName.slice(0, fileName.lastIndexOf('.'))
  const ext = fileName.slice(fileName.lastIndexOf('.') + 1)
  return [name, ext]
}
