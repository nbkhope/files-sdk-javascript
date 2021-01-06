import Api from '../Api'
import Logger from '../Logger'
import { getType, isArray, isBrowser, isInt, isObject, isString } from '../utils'

/**
 * Class InboxUpload
 */
class InboxUpload {
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
  getInboxRegistration = () => this.attributes.inbox_registration

  // string # Upload path This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  getPath = () => this.attributes.path

  // date-time # Upload date/time
  getCreatedAt = () => this.attributes.created_at


  // Parameters:
  //   cursor - string - Used for pagination.  Send a cursor value to resume an existing list from the point at which you left off.  Get a cursor from an existing list via the X-Files-Cursor-Next header.
  //   per_page - int64 - Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  //   inbox_registration_id - int64 - InboxRegistration ID
  //   inbox_id - int64 - Inbox ID
  static list = async (params = {}, options = {}) => {
    if (params['cursor'] && !isString(params['cursor'])) {
      throw new Error(`Bad parameter: cursor must be of type String, received ${getType(cursor)}`)
    }

    if (params['per_page'] && !isInt(params['per_page'])) {
      throw new Error(`Bad parameter: per_page must be of type Int, received ${getType(per_page)}`)
    }

    if (params['inbox_registration_id'] && !isInt(params['inbox_registration_id'])) {
      throw new Error(`Bad parameter: inbox_registration_id must be of type Int, received ${getType(inbox_registration_id)}`)
    }

    if (params['inbox_id'] && !isInt(params['inbox_id'])) {
      throw new Error(`Bad parameter: inbox_id must be of type Int, received ${getType(inbox_id)}`)
    }

    const response = await Api.sendRequest(`/inbox_uploads`, 'GET', params, options)

    return response?.data?.map(obj => new InboxUpload(obj, options)) || []
  }

  static all = (params = {}, options = {}) =>
    InboxUpload.list(params, options)
}

export default InboxUpload
