import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import './ChronoBankLogo.scss'

class ChronoBankLogo extends PureComponent {
  static propTypes = {
    version: PropTypes.string,
  }
  render () {
    const { version } = this.props
    return (
      <a href='https://chronobank.io' styleName='root'>
        <div styleName='img' />
        <div styleName='text'>
          <span styleName='chrono'>Chrono</span>
          <span styleName='bank'>bank.io</span>
          {version && <sup styleName='version'>{version}</sup>}
        </div>
      </a>
    )
  }
}

export default ChronoBankLogo
