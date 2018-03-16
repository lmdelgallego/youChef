import React, { Component } from 'react';
import * as Animated from "animated/lib/targets/react-dom";

import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';

import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ShoppingCard from 'material-ui/svg-icons/action/shopping-cart';
import logo from '../images/logo_header.png';

class Header extends Component {
	
	render() {
		console.log(this.props)
		const btnBack = (this.props.back) ? <IconButton><ArrowBack/></IconButton> : null;

		return (
			<AppBar
	          className="app-bar"
	          title={<img src={logo} />}
	          titleStyle={{alignContent: 'center'}}
	          iconElementLeft={btnBack}
						onLeftIconButtonClick={ (this.props.back) ? ()=>{ this.props.history.goBack(); } : null }
						showMenuIconButton={this.props.back}
	          iconElementRight={<IconButton style={{ padding: 0 }}><Badge className="badgeShopping" badgeContent={4} badgeStyle={{top: -5, right: -5, width:18, height:18, color: this.props.muiTheme.palette.primary1Color, padding:0}}><ShoppingCard/></Badge></IconButton>}
	        />
		);
	}
}


export default Header;