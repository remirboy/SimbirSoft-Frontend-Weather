import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

state = {
  image: undefined,
  city: undefined,
  min_temp:undefined,
  max_temp: undefined,
  temp: undefined,
  feels_like: undefined,
  windy_speed: undefined,
  visibility: undefined,
  clouds: undefined
}

getWeather = async () => {
      const url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kazan,ru&appid=3ea9ff78ed5852fa82da8ebfc049f548&units=metric`);
      const data = await url.json();
      this.setState({
        city: data.name,
        image: data.weather[0]['icon'],
        temp: data.main.temp,
        min_temp: data.main.temp_min,
        max_temp: data.main.temp_max,
        feels_like: data.main.feels_like,
        windy_speed: data.wind.speed,
        visibility: data.visibility,
        clouds: data.clouds.all
       })
    }

render(){
  this.getWeather();
  const iconUrl = "http://openweathermap.org/img/w/" + this.state.image+ ".png";
  return (
    <div className="App">
      <header className="App-header">
        <p>
           It's weather-web application in React
        </p>
        <div id="logo">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <div id="main">
        <table id="content">
        <tbody>
            <th id="theme">
                Information
            </th>  
            <th>
            <img src={iconUrl} alt={this.state.description} />
            </th>
        <tr>
            <th class="field">Your city is:</th>
            <td class="value">
                {this.state.city}
            </td>
        </tr>
        <tr>
            <th class="field">Tempurature(now):</th>
            <td class="value">
            {this.state.temp}
            </td>
        </tr>
        <tr>
            <th class="field">Feels like:</th>
            <td class="value">
            {this.state.feels_like}
            </td>
        </tr>
        <tr>
            <th class="field">High:</th>
            <td class="value">
            {this.state.max_temp}
            </td>
        </tr>
        <tr>
            <th class="field">Low:</th>
            <td class="value">
            {this.state.min_temp}
            </td>
        </tr>
        <tr>
            <th class="field">Visibility:</th>
            <td class="value">
            {this.state.visibility}
            </td>
        </tr>
        <tr>
            <th class="field">Clouds:</th>
            <td class="value">
            {this.state.clouds}
            </td>
        </tr>
        
        <tr>
            <th class="field">Wind speed(mi/hr):</th>
            <td class="value">
              {this.state.windy_speed}
            </td>
        </tr>
        </tbody>
</table>
      </div>
    </div>
  );
}
}
export default App;
