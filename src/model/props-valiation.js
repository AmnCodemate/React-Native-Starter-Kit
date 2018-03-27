import PropTypes from 'prop-types'

/**
 * This file contains Data model. PropTypes exports a range of validators that can be 
 * used to make sure the data you receive is valid
 */

export const helloModel =
    PropTypes.shape({
    hello: PropTypes.string,
  })

export const asyncState = PropTypes.oneOf(['Not Loading', 'Loading', 'Success', 'Error'])

export default {
  helloModel,
  asyncState,
}