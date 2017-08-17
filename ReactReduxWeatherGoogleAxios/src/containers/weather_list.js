import React ,{Component} from 'react';
import {connect } from 'react-redux';
import {Sparklines,SparklinesLine} from 'react-sparklines';
import {Chart} from '../components/chart';
import GoogleMap from '../components/google_map'


class WeatherList extends Component{

    renderWeather(cityData){

        //const temps = cityData.list.map((weather) => weather.main.temp);
        const temps = cityData.list.map(function(weather){
            return weather.main.temp;
        });
        const pressures  = cityData.list.map(function(weather){
            return weather.main.pressure;
        });
        const humidities  = cityData.list.map(function(weather){
            return weather.main.humidity;
        });

        const {lon,lat} = cityData.city.coord;

        console.log('temps are :',temps);

        return (

              <tr key={cityData.city.name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td width="25%"><Chart data={temps} color="orange" units="K"/></td>
                <td width="25%"><Chart data={pressures} color="green" units="hPa"/></td>
                <td width="25%"><Chart data={humidities} color="grey" units="%" /></td>
              </tr>
        );
    }

    
    render(){
        return(
            <table className="table table-hover">

               <thead>
                 <tr>
                   <th width="25%">City</th>
                   <th width="25%" >Temperature (K)</th>
                   <th width="25%">Pressure (hPa)</th>
                   <th width="25%">Humidity (%)</th>

                 </tr>
               </thead>

               <tbody>
                
                 {this.props.weather.map((cityData) => this.renderWeather(cityData))}

                
               </tbody>

            </table>

        );

    }
}

function mapStateToProps(state){

    return {
        weather:state.weather
    }

}

//connect our component to the redux state .
export default connect(mapStateToProps)(WeatherList);