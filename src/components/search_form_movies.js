import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchMovie, top10Movies } from '../actions/index';



class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = { searchTerm : ''};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleImputChange = this.handleImputChange.bind(this);


		this.props.top10Movies();
	}

	handleImputChange (event) {
		this.setState({ searchTerm: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		// On submit call ajax action to fetch data
		this.props.searchMovie(this.state.searchTerm);
		this.setState( {searchTerm: ''} );
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' value={this.state.searchTerm} onChange={this.handleImputChange} className='form-control' placeholder='Search for Movies/TV Shows' />
			</form>
		);
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({searchMovie, top10Movies}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchForm);