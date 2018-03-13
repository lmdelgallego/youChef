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
	constructor(props){
        super(props);
        this.state = {
            product: {},
            animate: new Animated.Value(0)
        }
    }
	render() {
		const goBackStyle = {
			transform: Animated.template`
				translate3d(${this.state.animate.interpolate({
				inputRange: [0, 1],
				outputRange: ["-24px", "0px"]
			})},0,0)
			`,
			opacity: Animated.template`${this.state.animate}`
		};
		return (
			<AppBar
	          className="app-bar"
	          title={<img src={logo} />}
	          titleStyle={{alignContent: 'center'}}
	          iconElementLeft={<IconButton><ArrowBack/></IconButton>}
	          onLeftIconButtonClick={()=>{ this.props.history.goBack(); }}
	          iconElementRight={<IconButton style={{ padding: 0 }}><Badge className="badgeShopping" badgeContent={4} badgeStyle={{top: -5, right: -5, width:18, height:18, color: this.props.muiTheme.palette.primary1Color, padding:0}}><ShoppingCard/></Badge></IconButton>}
	        />
		);
	}
}


export default muiThemeable()(Header);