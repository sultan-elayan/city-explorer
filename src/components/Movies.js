import React, { Component } from 'react'

class Movies extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image_url}  alt={this.props.released_on} />
                <p>popularity : {this.props.popularity} </p>
                <p>released_on : {this.props.released_on}</p>
                <p>total_votes : {this.props.total_votes}</p>
                <p>average_votes : {this.props.average_votes}</p>     
            </div>
        )
    }
}

export default Movies