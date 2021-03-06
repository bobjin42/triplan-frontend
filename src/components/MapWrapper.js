import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import { connect } from 'react-redux';

class MapWrapper extends Component {

  render() {
    const initialStart = [40.757951, -73.9856027]
    const allPlaces = this.props.places
    const schedualOrderIds = this.props.schedualPlaces;
    const positions = [];
    const markers = [];
    const targetName = [];
    const targetPlace = schedualOrderIds.map(id => {
      return allPlaces.find(place => {
        return place.api_id === id;
      })
    })

    targetPlace.forEach((place, index) => {
      positions.push([Number(place.lat), Number(place.lng)])
      targetName.push(place.name)
      markers.push(L.icon({
        iconUrl: require(`../icon/marker/${index + 1}.PNG`),
        iconSize: [40,40]
      }))
    })

    return (
      <div id="mapid">
        <Map center={positions.length === 0 ? initialStart : positions[0]} zoom={12}>
         <TileLayer
           url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
           attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
         />
       {positions.map((position, index) => {
           return (
             <Marker key={index} position={position} icon={markers[index]}>
                <Popup>{targetName[index]}</Popup>
            </Marker>
           )
         })}
       </Map>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return{
    schedualPlaces: state.placeReducer.schedualPlaces,
    places: state.placeReducer.places
  }
}

export default connect(mapStateToProps)(MapWrapper);




// url='https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png'
// attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
