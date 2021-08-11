import Api from '../Api'
import Logger from '../Logger'
import { getType, isArray, isBrowser, isInt, isObject, isString } from '../utils'

/**
 * Class FileMigration
 */
class FileMigration {
  attributes = {}
  options = {}

  constructor(attributes = {}, options = {}) {
    Object.entries(attributes).forEach(([key, value]) => {
      const normalizedKey = key.replace('?', '')

      this.attributes[normalizedKey] = value

      Object.defineProperty(this, normalizedKey, { value, writable: false })
    })

    this.options = { ...options }
  }

  isLoaded = () => !!this.attributes.id
  // int64 # File migration ID
  getId = () => this.attributes.id

  // string # Source path This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  getPath = () => this.attributes.path

  // string # Destination path
  getDestPath = () => this.attributes.dest_path

  // int64 # Number of files processed
  getFilesMoved = () => this.attributes.files_moved

  // int64 # Total number of files to process
  getFilesTotal = () => this.attributes.files_total

  // string # The type of operation
  getOperation = () => this.attributes.operation

  // string # Region
  getRegion = () => this.attributes.region

  // string # Status
  getStatus = () => this.attributes.status

  // string # Link to download the log file for this migration.
  getLogUrl = () => this.attributes.log_url


  // Parameters:
  //   id (required) - int64 - File Migration ID.
  static find = async (id, params = {}, options = {}) => {
    if (!isObject(params)) {
      throw new Error(`Bad parameter: params must be of type object, received ${getType(params)}`)
    }

    params['id'] = id

    if (!params['id']) {
      throw new Error('Parameter missing: id')
    }

    if (params['id'] && !isInt(params['id'])) {
      throw new Error(`Bad parameter: id must be of type Int, received ${getType(id)}`)
    }

    const response = await Api.sendRequest(`/file_migrations/${params['id']}`, 'GET', params, options)

    return new FileMigration(response?.data, options)
  }

  static get = (id, params = {}, options = {}) =>
    FileMigration.find(id, params, options)
}

export default FileMigration
