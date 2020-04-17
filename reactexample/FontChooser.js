class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {hidden: true, bold:false, mySize: parseInt(this.props.size)};
    }
	

	handleClick(){

		if (this.state.hidden == true ){
			this.setState({hidden:false});
		}
		else{
			this.setState({hidden:true});
			this.setState({mySize:parseInt(this.props.size)});
		}
	}

	handleChange(){
		this.setState({bold:!this.state.bold});
	}

	handleMouseClickI(){

		if (this.state.mySize < this.props.max)
		this.setState({mySize:this.state.mySize+1});

	}

	handleMouseClickD(){
		
		if (this.state.mySize > this.props.min)
		this.setState({mySize:this.state.mySize-1});

	}



    render() {

		var ishidden = "none";
		var isBold = "normal";
		var myColor = "black";

		if (this.props.max==this.state.mySize )
		myColor= "red";

		if (this.props.min==this.state.mySize )
		myColor= "red";

		if (this.state.hidden == false)
		ishidden= "inline";

		isBold=this.state.bold == true ? "bold": "normal";


	return(

	       <div>
	       <input style ={{display:ishidden}} onClick={this.handleChange.bind(this)} type="checkbox" id="boldCheckbox"/>
	       <button style ={{display:ishidden}} onClick={this.handleMouseClickD.bind(this)} id="decreaseButton">-</button>
	       <span style ={{display:ishidden}} id="fontSizeSpan">{this.state.mySize}</span>
	       <button style ={{display:ishidden}} onClick={this.handleMouseClickI.bind(this)} id="increaseButton">+</button>
	       <span style = {{fontWeight:isBold, fontSize:this.state.mySize, color: myColor}} onClick={this.handleClick.bind(this)}  id="textSpan">{this.props.text}</span>
	       </div>
	);
    }
}

