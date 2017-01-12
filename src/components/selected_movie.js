import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { ukini } from '../actions/index';

class SelectedMovie extends Component {
	constructor(props) {
		super(props);
	}
	componentWillUnmount() {
		// dispatch actiona da foundmovie stavi ko null bugfix 
		this.props.ukini();
	}
	render() {
		if(!this.props.foundMovie && !this.props.foundSerie) {
			return (
					<div></div>
			);
		}
		if(this.props.foundMovie) {
			return (
				<div className='col-md-6 col-md-offset-3'>
					<div className='movie'>
						<img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.props.foundMovie.poster_path}`}/>
						<h4>{this.props.foundMovie.title}</h4>
						<p>{this.props.foundMovie.overview}</p>
					</div>
				</div>
			);
		}
		return (
			<div className='col-md-6 col-md-offset-3'>
				<div className='movie'>
					<img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.props.foundSerie.poster_path}`}/>
					<h4>{this.props.foundSerie.name}</h4>
					<p>{this.props.foundSerie.overview}</p>
				</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		foundMovie: state.foundMovie,
		foundSerie: state.foundSerie
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ ukini }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedMovie);