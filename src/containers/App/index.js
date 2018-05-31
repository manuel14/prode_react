import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Competition} from '../competition';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		return(
			<div className="Prode">
				<Competition competitions={this.state.competitions}/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

