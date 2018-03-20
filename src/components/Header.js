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
		let totalQuantity = 0;
		Object.keys(this.props.cart.quantityById).map((key,index)=>{
			console.log(key, index);
			totalQuantity += this.props.cart.quantityById[key];
		})
		
		return (
			<AppBar
	          className="app-bar"
	          title={<img src={logo} />}
	          titleStyle={{alignContent: 'center'}}
	          iconElementLeft={btnBack}
						onLeftIconButtonClick={ (this.props.back) ? ()=>{ this.props.history.goBack(); } : null }
						showMenuIconButton={this.props.back}
						iconElementRight={<IconButton style={{ padding: 0 }}><Badge className="badgeShopping" badgeContent={totalQuantity} badgeStyle={{top: -5, right: -5, width:18, height:18, color: this.props.muiTheme.palette.primary1Color, padding:0}}><ShoppingCard/></Badge></IconButton>}
						onRightIconButtonClick={ ()=>{ this.props.history.push('/cart') }}
	        />
		);
	}
}


export default Header;