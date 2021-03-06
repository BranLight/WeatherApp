# Weather App
A simple web application for displaying city weather data using the AccuWeather API. This project helped with my understanding of JavaScript fetch requests and request handling as well as asynchronous task flow and handling JSON data. This is part of a course on JavaScript from Sean Pelling on Udemy.


![weatherAppPreview](https://user-images.githubusercontent.com/63391309/90373575-bb64f400-e037-11ea-88ac-a98651616373.png)


### How does this application work?

In the forecast.js file located under the scripts folder I've created a key variable and two ansynchronous functions for getting the city the user asked for and the current weather conditions of that city. The key variable stores the API key you can get from creating an account here (https://developer.accuweather.com/) and then creating an app under the "My Apps" section. This is needed for the API to verify that you're authorized to make requests through their API to prevent malicious or abusive use. The "getCity()" function makes a fetch request using the cities search component of the API which requires the API key and the city name to search for.

This simply returns JSON data containing all matching cities of that name with important information such as the country the city is located in, the time zone, geoposition and more. It's important to note that this application currently operates on the assumption that the first matched city is correct and obviously that's not always the case as many cities around the world share the same name. I would like to make this information more accurate to the user input in the future, possibly by requesting the country name the city is located as well. Moving on, the only data I need to get the current conditions is the city code which is used for the current conditions component of the api. This returns more JSON data containing important condition information such as temperature, time of day and the weather. This information is gathered and used by the app.js file under the same scripts directory to update the card with a relevant background (day/night) as well as a relevant icon for what the weather is like and the temperature in fahrenheit.
