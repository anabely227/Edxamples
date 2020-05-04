import React, { Component } from 'react';

class ListItem extends Component {

  constructor(props) {
	super(props);
	this.state = { color: 'black',onClick:false };
    }

  handleClick() {
    // Implement this function!

      this.setState({color:'gray'});
      console.log('color handleClick after:'+this.state.color);
  }

  handleChange(){
		this.setState({bold:!this.state.onClick});
	}


  render() {
    var item = this.props.item;
    var name = item.name;
    var myColor= this.state.color;

    let txt_name =this.state.onClick ? 'black':'gray';
    console.log('color render :'+this.state.color);


    return (
	    <span className={txt_name} onClick={this.handleClick.bind(this)} style={{color:myColor }}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

