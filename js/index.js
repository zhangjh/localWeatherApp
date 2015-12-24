function myFun(result){
  var cityName = result.name.split("市")[0];
  $.ajax({
    url: "http://api.map.baidu.com/telematics/v3/weather?location=" + cityName + "&output=json&ak=E577a29e33bc8df7619f6c364501fd09",
    dataType: "jsonp",
    callback: "callback",
    success: function(ret){
      console.log(ret);
      //今天天气
      var container = ["#today","#next1","#next2","#next3"];
      var result = ret.results[0];
      var weather_data = result.weather_data;
      
      //城市、风力
      $("#location").html(result.currentCity);
      $("#weather").html(result.weather_data[0].weather);
      $("#wind").html(result.weather_data[0].wind);
      
      //天气情况
      for(var i in weather_data){
          $(container[i] + " img").attr("src",weather_data[i].dayPictureUrl);
          $(container[i] + " .temp").html(weather_data[i].temperature);
      }
    }
  });
}

var myCity = new BMap.LocalCity();
myCity.get(myFun);