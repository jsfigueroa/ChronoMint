import { CircularProgress } from 'material-ui'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Preloader.scss'

export default class Preloader extends PureComponent {
  static propTypes = {
    size: PropTypes.number,
  }

  render () {
    return (
      <div styleName='root' className='Preloader__root'>
        <CircularProgress size={this.props.size || 24} thickness={1.5} />
      </div>
    )
  }
}
