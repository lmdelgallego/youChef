import React, { Component } from 'react';
import {RaisedButton , FlatButton} from "material-ui";
import muiThemeable from 'material-ui/styles/muiThemeable';

import logo from '../images/logo_header.png';

import './Home.css'
import bgImage from "../images/Background.png";

class Home extends Component {

  render() {
    return (
      <div className="containerHome" style={style.App}>
        <div className="content">
          <img src={logo} alt="logo" />
          <p><strong>El chef eres tú!</strong><br/>Recibe en tu casa las recetas e ingredientes para cocinar deliciosos platos de forma rápida, fácil y devertida. Bon appetite!</p>
          <div className="actions">
            <RaisedButton label="ORDENA UNA RECETA AHORA" 
            onClick={()=>{ this.props.history.push('/products') }}
            labelColor={this.props.muiTheme.palette.primary1Color} fullWidth={true} style={{marginBottom: '10px'}}/>
            <FlatButton label="COMO FUNCIONA YOUCHEF?" fullWidth={true}/>
          </div>
        </div>    
      </div>
    );
  }
}

const style = {
  App:{
    backgroundImage: `url(${bgImage})`,
  }
}
export default muiThemeable()(Home);;