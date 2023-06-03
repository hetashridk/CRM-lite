// my APIKey is "b4ed94adc674507878b0aeb7f93e988b";
$(document).ready(function(){
  //event listener on search button
$("#searchbtn").on("click",function(){
  //get value in input search value
  var searchCity = $("#search-value").val();
  $("search-value").val(" ");
  weatherDashboard(searchCity);
  weatherForecast(searchCity);
  // canadianholidays();
});

//The keypress event is fired when a key that produces a character value is pressed down.
$("#searchbtn").keypress(function(event){
  var keycode = (event.keycode ? event.keycode : event.which);
  if(keycode === 13)
  {
    weatherDashboard(searchCity);
    weatherForecast(searchCity);
    // canadianholidays();
  }
})


//weatherDashboard function
function weatherDashboard(searchCity){
  //fetch weather api
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=b4ed94adc674507878b0aeb7f93e988b")
  .then(function(response){
    return response.json();
  })
 
  .then(function(data){
    if(previousWeatherSearch.indexOf(searchCity) === -1){
      previousWeatherSearch.push(searchCity);
      localStorage.setItem("previousWeatherSearch",JSON.stringify(previousWeatherSearch));
      createRow(searchCity);
    }

  });
}