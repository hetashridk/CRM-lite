// var APIkey = "3fc619e2b6b7dda6c371bb7186f492ab";
var location = $("#Location");
var APIkey = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=3fc619e2b6b7dda6c371bb7186f492ab&units=imperial";



  function weatherForecast(location) {
 
    fetch(APIkey)
    .then(function(response){
      return response.json();
    })

    .then(function(response){
      return response.json();
    })

  .then(function (data) {
    console.log(data);
    // $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");

    //loop to create a new card for 5 days pull data image from search
    for (var i = 0; i < data.list.length; i++) {

      if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {

        var titleFive = $("<h3>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString());
        var imgFive = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");
        var colFive = $("<div>").addClass("col-md-2.5");
        var cardFive = $("<div>").addClass("card bg-primary text-white");
        var cardBodyFive = $("<div>").addClass("card-body p-2");
        var humidFive = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");
        var tempFive = $("<p>").addClass("card-text").text("Temperature: " + data.list[i].main.temp + " °F");
        var windFive = $("<p>").addClass("card-text").text("Wind: " + data.list[i].wind.speed + " MPH");

        //merge together and put on page
        colFive.append(cardFive.append(cardBodyFive.append(titleFive, imgFive, tempFive, humidFive,windFive)));
        //append card to column, body to card, and other elements to body
        $("#forecast .row").append(colFive);
      }
    }
  });
}




   
  