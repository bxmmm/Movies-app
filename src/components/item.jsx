import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findMovieById, findSerieById } from '../actions/index';

 class Item extends Component {
 	findMovie(event) {
 		this.props.findMovieById(this.props.item.id);
 	}
 	findSerie(event) {
 		this.props.findSerieById(this.props.item.id);
 	}
	render() {
		if(this.props.FILM) {
			const url = `/movies/${this.props.item.id}`;
			return (
				<div className='col-md-6'>
				<Link onClick={this.findMovie.bind(this)} to={url}>
					<div className='movie'>
						<img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.props.item.poster_path}`}/>
						<h4>{this.props.name}</h4>
					</div>
				</Link>
			</div>
			);
		} else {
			const url = `/tvshows/${this.props.item.id}`;
			return (
				<div className='col-md-6'>
				<Link onClick={this.findSerie.bind(this)} to={url}>
					<div className='movie'>
						<img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${this.props.item.poster_path}`}/>
						<h4>{this.props.name}</h4>
					</div>
				</Link>
			</div>
			);
		}
		
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ findMovieById, findSerieById }, dispatch);
}

export default connect(null, mapDispatchToProps)(Item);