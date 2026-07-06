const API_KEY = "cb33a153568a915d482b7dec952fc101";

async function getWeather(){

const city=document.getElementById("city").value.trim();

if(city===""){
alert("Please enter city name.");
return;
}

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

try{

const response=await fetch(url);

const data=await response.json();

if(data.cod!="200"){
alert("City not found.");
return;
}

document.getElementById("cityName").innerText=data.name;

document.getElementById("temp").innerHTML=Math.round(data.main.temp)+"°C";

document.getElementById("condition").innerHTML=data.weather[0].main;

document.getElementById("humidity").innerHTML=data.main.humidity+"%";

document.getElementById("wind").innerHTML=data.wind.speed+" km/h";

document.getElementById("icon").src=
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

}

catch(error){

alert("Something went wrong.");

}

}