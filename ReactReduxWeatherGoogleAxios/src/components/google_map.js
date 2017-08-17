import React ,{Component} from 'react';


class GoogleMap extends Component{

    componentDidMount(){
        new google.maps.Map(this.refs.map,{
            zoom:12,
            center:{ 
                lat:this.props.lat,
                lng:this.props.lon
            }
        });

    }
    render(){

        {/**we can now use  this.refs.map as in the componentDidMount .It shows where to put the component  */}
        return <div ref="map" />;
    }


}

export default GoogleMap;