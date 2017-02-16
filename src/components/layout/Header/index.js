import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import SearchIcon from 'material-ui/svg-icons/action/search';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import {white} from 'material-ui/styles/colors';

import SearchBox from './SearchBox';
import HeaderActions from './HeaderActions';

const style = {
    appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        zIndex: 1400
    },
    title: {
        fontSize: 20,
        height: 56,
        maxHeight: 56
    },
    iconsRightContainer: {
        marginLeft: 20
    }
};

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            searchOpen: false,
            noticesOpen: false
        }
    }

    toggleSearch = () => {
        this.setState({searchOpen: !this.state.searchOpen});
    };

    toggleNotices = () => {
        this.setState({noticesOpen: !this.state.noticesOpen});
    };

    render() {
        const {handleChangeRequestNavDrawer} = this.props;
        const {searchOpen} = this.state;

        return (
            <AppBar
                style={style.appBar}
                titleStyle={style.title}
                title={searchOpen ? <SearchBox /> : 'ChronoMint'}
                iconElementLeft={
                      <IconButton onClick={handleChangeRequestNavDrawer}>
                          <Menu color={white} />
                      </IconButton>
                }
                iconElementRight={
                    <div style={style.iconsRightContainer}>
                        <IconButton onClick={this.toggleSearch}>
                            <SearchIcon color={white} />
                        </IconButton>

                        <IconButton onClick={this.toggleNotices}>
                            <NotificationsIcon color={white} />
                        </IconButton>

                        <HeaderActions />
                    </div>
                }
            />
        );
    }
}

Header.propTypes = {
    handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;
