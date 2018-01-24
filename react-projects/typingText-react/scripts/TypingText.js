class TypingText extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			text: this.props.text,
			typingSpeed: this.props.typingSpeed,
			typingCount: 0,
			blinkingCursor: this.props.blinkingCursor
		}
		this.typing = this.typing.bind(this);
		this.tick = this.tick.bind(this);
	}
	componentDidMount(){
		this.typingInterval = setInterval(this.tick, this.state.typingSpeed);
	}
	tick(){
		var typingCount = this.state.typingCount + 1;
		var text = this.state.text;
		this.setState({
			typingCount: typingCount
		});
		if (typingCount >= text.length) {
			clearInterval(this.typingInterval);
		}
		this.typing;
	}
	typing(text){
		var typingCount = this.state.typingCount;
		return (
			<div className="typing-text">
				{text.slice(0, typingCount)} <span>|</span>
			</div>
		);
	}
	render(){
		return(
			<div>
				{this.typing(this.state.text)}
			</div>
		);
	}
}