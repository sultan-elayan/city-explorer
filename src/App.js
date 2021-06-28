import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Alert from 'react-bootstrap/Alert'




export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      longitude: '',
      latitude: '',
      display: false,
      error: "",
      alert: false
    }
  }

  nameChangeHandler = (e) => {
    this.setState({
      displayName: e.target.value
    })
  }
  submitData = async (e) => {
    e.preventDefault()

    try {

      let axiosResponse = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.3bda2d41fe8feadb05c61e7ffe7be774&q=${this.state.displayName}&format=json`)
      this.setState({
        displayName: axiosResponse.data[0].display_name,
        longitude: axiosResponse.data[0].lon,
        latitude: axiosResponse.data[0].lat,
        display: true,
        alert: false
      })

    } catch (error) {
      this.setState({
        error: error.message,
        alert: true
      })
    }
  }


  render() {
    return (

      <>

        <div>
          {this.state.alert &&
            <Alert variant={'danger'}>
              Error: 'Wrong Input! Enter City Name'

            </Alert>
          }
        </div>
        <div id="image">

          <form onSubmit={this.submitData}>
            <h1>City Explorer</h1>
            <input type='text' placeholder="Enter Your City Name" onChange={(e) => { this.nameChangeHandler(e) }} required />
            <br />
            <br />
            <button>Search</button>
          </form>
      
            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.3bda2d41fe8feadb05c61e7ffe7be774&center=${this.state.latitude},${this.state.longitude}&zoom=10`} alt="sasa" />
    
          <h2>{this.state.displayName}</h2>
          <h2>{this.state.longitude}</h2>
          <h2>{this.state.latitude}</h2>
        </div>


      </>

    )
  }
}

export default App