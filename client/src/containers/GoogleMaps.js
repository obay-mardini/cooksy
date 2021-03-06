import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// eslint-disable-next-line
const geocoder = new google.maps.Geocoder();

class Map extends Component {
  constructor(props){
    super(props)

    this.getCoordinates=this.getCoordinates.bind(this);
    this.state = {location: null, zoom: 12}
  }

  componentDidMount() {
    this.getCoordinates(`${this.props.address}, ${this.props.city}, ${this.props.state}`)
  }


  getCoordinates (address, callback) {
    let coordinates;
    geocoder.geocode({address: address}, function (results, status) {
      if (status === "OK") {
        let coordObj = results[0].geometry.location;
        coordinates = ({ lat: coordObj.lat(), lng: coordObj.lng() })
        this.setState({location: coordinates})
      }
    }.bind(this))
  }

  render() {
    if (this.state.location === null) {
      return <div>Loading...</div>
    }
    return (
      <GoogleMap
        defaultZoom={this.state.zoom}
        defaultCenter={this.state.location}
      >
        { this.state.location && <Marker position={this.state.location} /> }
      </GoogleMap>
    )
  }
}


export default withGoogleMap(Map);
