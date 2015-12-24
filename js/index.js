function myFun(result){
  var cityName = result.name.split("市")[0];
  $.ajax({
    url: "http://api.map.baidu.com/telematics/v3/weather?location=" + cityName + "&output=json&ak=E577a29e33bc8df7619f6c364501fd09",
    dataType: "jsonp",
    callback: "callback",
    success: function(ret){
      console.log(ret);
      //今天天气
      $("#today > .icon > img").attr("src",ret.results[0].weather_data[0].dayPictureUrl); 
      $("#today > .temp").html(ret.results[0].weather_data[0].temperature);
      $("#location").html(ret.results[0].currentCity);
      $("#weather").html(ret.results[0].weather_data[0].weather);
      $("#wind").html(ret.results[0].weather_data[0].wind);
      //未来天气
      $("#next1 >.icon > img").attr("src",ret.results[0].weather_data[1].dayPictureUrl);
      $("#next1 > .temp").html(ret.results[0].weather_data[1].temperature);
      $("#next2 >.icon > img").attr("src",ret.results[0].weather_data[2].dayPictureUrl);
      $("#next2 > .temp").html(ret.results[0].weather_data[2].temperature);
      $("#next3 >.icon > img").attr("src",ret.results[0].weather_data[3].dayPictureUrl);
      $("#next3 > .temp").html(ret.results[0].weather_data[3].temperature);
    }
  });
}

var myCity = new BMap.LocalCity();
myCity.get(myFun);