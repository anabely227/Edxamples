class FontChooser extends React.Component {

    constructor(props) {
	super(props);

    this.state ={hidden: 'true'};
    }
	
	handleclick(){
		if (this.state.hidden == 'true'){
			this.setState ({hidden: 'false'});
		}
		else{
			this.setState ({hidden: 'true'});
		}
	}

    render() {
		
		var myHidden = this.state.hidden;

	return(
	       <div>
	       <input style={{hidden: myHidden}} onClick={this.handleclick.bind(this)} type="checkbox" id="boldCheckbox" hidden='true'/>
	       <button id="decreaseButton" hidden='true'>-</button>
	       <span id="fontSizeSpan" hidden='true'>{this.props.size}</span>
	       <button id="increaseButton" hidden='true'>+</button>
	       <span id="textSpan">{this.props.text}</span>
	       </div>
	);
    }
}

