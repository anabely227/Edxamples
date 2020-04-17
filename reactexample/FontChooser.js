class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {hidden: true};
    }
	

	handleClick(){

		if (this.state.hidden == true )
			this.setState({hidden:false});
		else
			this.setState({hidden:true});
	}

    render() {

		var ishidden = "none";

		if (this.state.hidden == false)
		ishidden= "inline";


	return(

	       <div>
	       <input style ={{display:ishidden}} type="checkbox" id="boldCheckbox"/>
	       <button style ={{display:ishidden}} id="decreaseButton">-</button>
	       <span style ={{display:ishidden}} id="fontSizeSpan">{this.props.size}</span>
	       <button style ={{display:ishidden}} id="increaseButton">+</button>

	       <span onClick={this.handleClick.bind(this)}  id="textSpan">{this.props.text}</span>
	       </div>
	);
    }
}

