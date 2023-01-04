const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a1da5dc69mshe0371447c33e2adp13f5d2jsn107d13d4d358',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{

cityName.innerHTML=city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {


		console.log(response)
		cloud_pct.innerHTML=response.cloud_pct;
feels_like.innerHTML=response.feels_like;
humidity.innerHTML=response.humidity;
max_temp.innerHTML=response.max_temp;
min_temp.innerHTML=response.min_temp;
sunrise.innerHTML=response.sunrise;
sunset.innerHTML=response.sunset;
temp.innerHTML=response.temp;

wind_speed.innerHTML=response.wind_speed;
})
	.catch(err => console.error(err));
}
getWeather("Delhi")

submit.addEventListener('click',(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {


		console.log(response)
		aa.innerHTML=response.cloud_pct;
ab.innerHTML=response.feels_like;
ac.innerHTML=response.humidity;
ad.innerHTML=response.max_temp;
ae.innerHTML=response.min_temp;
af.innerHTML=response.sunrise;
ag.innerHTML=response.sunset;
ah.innerHTML=response.temp;
aj.innerHTML=response.wind_speed;
ai.innerHTML=response.wind_speed;
})
wdelhi.addEventListener('click',()=>{
	getWeather("Delhi")
})
wpatna.addEventListener('click',()=>{
	getWeather("Patna")
})
wbangalore.addEventListener('click',()=>{
	getWeather("Bengaluru")
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {


		console.log(response)
		ba.innerHTML=response.cloud_pct;
bb.innerHTML=response.feels_like;
bc.innerHTML=response.humidity;
bd.innerHTML=response.max_temp;
be.innerHTML=response.min_temp;
bf.innerHTML=response.sunrise;
bg.innerHTML=response.sunset;
bh.innerHTML=response.temp;
bj.innerHTML=response.wind_speed;
bi.innerHTML=response.wind_speed;
})	

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {


		console.log(response)
		ca.innerHTML=response.cloud_pct;
cb.innerHTML=response.feels_like;
cc.innerHTML=response.humidity;
cd.innerHTML=response.max_temp;
ce.innerHTML=response.min_temp;
cf.innerHTML=response.sunrise;
cg.innerHTML=response.sunset;
ch.innerHTML=response.temp;
cj.innerHTML=response.wind_speed;
ci.innerHTML=response.wind_speed;
})	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
	.then(response => response.json())
	.then(response => {


		console.log(response)
		da.innerHTML=response.cloud_pct;
db.innerHTML=response.feels_like;
dc.innerHTML=response.humidity;
dd.innerHTML=response.max_temp;
de.innerHTML=response.min_temp;
df.innerHTML=response.sunrise;
dg.innerHTML=response.sunset;
dh.innerHTML=response.temp;
dj.innerHTML=response.wind_speed;
di.innerHTML=response.wind_speed;
})