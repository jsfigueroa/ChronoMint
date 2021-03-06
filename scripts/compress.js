const file_system = require('fs')
const archiver = require('archiver')

const source = process.argv[2]
const destination = process.argv[3]

if (!source || !destination) {
  // eslint-disable-next-line
  console.log(`
  Wrong arguments
  usage: node compress SOURCE_FOLDER DESTINATION_FILE_NAME`)
  process.exit(-1)
}

const output = file_system.createWriteStream(destination)
const archive = archiver('zip')

output.on('close', function () {
  // eslint-disable-next-line
  console.log(`
  ${archive.pointer()} total bytes
  Archive '${destination}' created successfully.`)
})

archive.on('error', function (err) {
  // eslint-disable-next-line
  console.error(err)
  throw err
})

archive.pipe(output)
archive.directory(`${source}/`)
archive.finalize()
