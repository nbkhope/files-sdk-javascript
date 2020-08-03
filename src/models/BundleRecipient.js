import Api from '../Api'
import Logger from '../Logger'
import { getType, isArray, isBrowser, isInt, isObject, isString } from '../utils'

/**
 * Class BundleRecipient
 */
class BundleRecipient {
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

  // string # The recipient's company.
  getCompany = () => this.attributes.company

  // string # The recipient's name.
  getName = () => this.attributes.name

  // string # A note sent to the recipient with the bundle.
  getNote = () => this.attributes.note

  // string # The recipient's email address.
  getRecipient = () => this.attributes.recipient

  // date-time # When the Bundle was shared with this recipient.
  getSentAt = () => this.attributes.sent_at


  // Parameters:
  //   user_id - int64 - User ID.  Provide a value of `0` to operate the current session's user.
  //   page - int64 - Current page number.
  //   per_page - int64 - Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
  //   action - string - Deprecated: If set to `count` returns a count of matching records rather than the records themselves.
  //   bundle_id (required) - int64 - List recipients for the bundle with this ID.
  static list = async (params = {}, options = {}) => {
    if (!params['bundle_id']) {
      throw new Error('Parameter missing: bundle_id')
    }

    if (params['user_id'] && !isInt(params['user_id'])) {
      throw new Error(`Bad parameter: user_id must be of type Int, received ${getType(user_id)}`)
    }

    if (params['page'] && !isInt(params['page'])) {
      throw new Error(`Bad parameter: page must be of type Int, received ${getType(page)}`)
    }

    if (params['per_page'] && !isInt(params['per_page'])) {
      throw new Error(`Bad parameter: per_page must be of type Int, received ${getType(per_page)}`)
    }

    if (params['action'] && !isString(params['action'])) {
      throw new Error(`Bad parameter: action must be of type String, received ${getType(action)}`)
    }

    if (params['bundle_id'] && !isInt(params['bundle_id'])) {
      throw new Error(`Bad parameter: bundle_id must be of type Int, received ${getType(bundle_id)}`)
    }

    const response = await Api.sendRequest(`/bundle_recipients`, 'GET', params, options)

    return response?.data?.map(obj => new BundleRecipient(obj, options)) || []
  }

  static all = (params = {}, options = {}) =>
    BundleRecipient.list(params, options)
}

export default BundleRecipient