import { TextField } from 'material-ui'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Translate } from 'react-redux-i18n'
import AccountSelector from '../../components/AccountSelector/AccountSelector'
import styles from '../../components/stylesLoginPage'
import { getNetworkById, LOCAL_ID, providerMap } from '../../network/settings'
import web3Provider from '../../network/Web3Provider'
import networkService, { addError } from '../../redux/network/actions'

const mapStateToProps = (state) => ({
  selectedNetworkId: state.get('network').selectedNetworkId,
  providers: state.get('network').providers,
})

const mapDispatchToProps = (dispatch) => ({
  addError: (error) => dispatch(addError(error)),
  selectNetwork: (networkId) => networkService.selectNetwork(networkId),
  loadAccounts: () => networkService.loadAccounts(),
})

@connect(mapStateToProps, mapDispatchToProps)
class LoginMetamask extends PureComponent {
  componentWillMount () {
    web3Provider.setWeb3(window.web3)
    web3Provider.setProvider(window.web3.currentProvider)
    window.web3.version.getNetwork((error, currentNetworkId) => {
      if (error) {
        this.props.addError(<Translate value='LoginMetamask.wrongMetaMask' />)
      }
      this.props.selectNetwork(Math.min(+currentNetworkId, LOCAL_ID))
    })
  }

  render () {
    const { selectedNetworkId } = this.props
    const name = getNetworkById(selectedNetworkId, providerMap.metamask.id).name
      || <Translate value='LoginMetamask.notDefined' />
    return (
      <div>
        <TextField
          floatingLabelText={<Translate value='LoginMetamask.network' />}
          value={name}
          fullWidth
          {...styles.textField}
        />
        <AccountSelector onSelectAccount={() => this.props.onLogin()} />
      </div>
    )
  }
}

LoginMetamask.propTypes = {
  addError: PropTypes.func,
  selectNetwork: PropTypes.func,
  loadAccounts: PropTypes.func,
  selectedNetworkId: PropTypes.number,
  onLogin: PropTypes.func,
}

export default LoginMetamask
