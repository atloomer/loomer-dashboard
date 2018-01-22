// Get and Display Weather in #weather
  $.simpleWeather({
    location: '',
    // WOEID for Wenatchee, WA
    woeid: '2516408',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

var d = new Date();
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var date = document.getElementById("date");
var time = document.getElementById("time");

function getDate() {
    date.innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

// Get and Display Date and Time
var d = new Date();
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var date = document.getElementById("date");
var time = document.getElementById("time");

function getDate() {
    date.innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

function timer() {
    setTimeout(timer, 1000);
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours <= 11 ? 'am' : 'pm';
    var strTime = [hours % 12,
                  (minutes < 10 ? "0" + minutes : minutes)
                  ].join(':') + ampm;
    time.innerHTML = strTime;
    setTimeout(timer, 1000);
}

getDate();
timer();

// Get time of day and display data accordingly
function getTimeOfDayContent() {
      var currentTime = new Date().getHours();
      if (5 <= currentTime&&currentTime < 12) {
        document.getElementById('greeting').innerHTML = "Good Morning, Alex";
        document.getElementById('app').style.backgroundImage = "url('https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb')";
      }
      if (12 <= currentTime&&currentTime < 16) {
        document.getElementById('greeting').innerHTML = "Good Afternoon, Alex";
        document.getElementById('app').style.backgroundImage = "url('https://images.pexels.com/photos/698333/pexels-photo-698333.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb')";
      }
      if (16 <= currentTime&&currentTime <= 24) {
        document.getElementById('greeting').innerHTML = "Good Evening, Alex";
        document.getElementById('app').style.backgroundImage = "url('https://images.pexels.com/photos/141645/nature-stars-night-sky-141645.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb')";
      }
}

getTimeOfDayContent();