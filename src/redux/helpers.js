const BYTES_5MB = 5242880
const BYTES_20MB = 20971520

export function checkInputFields(name = '', mail = '') {
  if ((name && mail) || (!name && !mail)) return [false, false]
  if (!name && mail) return [true, false]
  return [false, true]
}

export function isValidMail(mail) {
  return /^.+@.+$/.test(mail)
}

export function allowToSubmit({
  fromName, fromMail, toName, toMail, toSubject, toMessage,
}) {
  return (
    !!fromName
    && !!fromMail
    && !!toName
    && !!toMail
    && !!toSubject
    && !!toMessage
  )
}

function validkMimeType(type) {
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

export function checkFiles(files) {
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

function arrayBufferToString(arrayBuffer, decoderType = 'utf-8') {
  const decoder = new TextDecoder(decoderType)
  return decoder.decode(arrayBuffer)
}

function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = reject

    reader.readAsArrayBuffer(file)
  })
}

export async function processFiles(files) {
  const filesData = [...files]
  return Promise.all(filesData.map(item => readFileAsync(item)))
}
