var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var apiKey = "&appid=a9a5e7a9970b73a11c12571aefb9c017";
var weatherApi = "http://api.openweathermap.org/data/2.5/weather?zip=55068,us&units=imperial";

var Weather = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm/>
        <WeatherMessage/>
      </div>

    );
  }
});

module.exports = Weather;
