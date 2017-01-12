import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { top10Series, searchSeries } from '../actions/index';

class SearchFormShows extends Component {
	constructor(props) {
		super(props);

		this.state = { searchTerm: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		// dispatch actiona za top rated serije
		this.props.top10Series();
	}

	handleChange (event) {
		this.setState({ searchTerm: event.target.value });
	}
	handleSubmit (event) {
		event.preventDefault();
		
		// dispatch actiona za search serija
		this.props.searchSeries(this.state.searchTerm);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} value={this.state.searchTerm} className='form-control' type='text' placeholder='Search for a TV Show'/>
				</form>
			</div>
		);
	}
}

// dispatchamo akciju u props
function mapDispatchToProps (dispatch) {
	return bindActionCreators({top10Series, searchSeries}, dispatch);
}

export default connect (null ,mapDispatchToProps)(SearchFormShows);