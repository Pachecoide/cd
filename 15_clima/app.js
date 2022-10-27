

const verClima= async()=>{
    let apikey="03bbb5b39e6be02952999570c07edb72";
    let divRes=document.querySelector("#res");
    if(navigator.geolocation){
        var success = async function(position){
        var latitud = position.coords.latitude,
            longitud = position.coords.longitude;
            console.log("Ltitud:"+latitud+",Longitud:"+longitud);
            let url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey}&units=metric&lang=es`;
            console.log(url);
            const api= await fetch(url);
            const data= await api.json();
            console.log(data);
            const urlIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
            divRes.innerHTML=`
            <p>${data.name}</p>
            <img src="${urlIcon}">
            <p>Temperatura:${data.main.temp}°C</p>
            <h2>${data.weather[0].description.toUpperCase()}</h2>
            <p>MAX:${data.main.temp_max}°C</p>
            <p>MIN:${data.main.temp_min}°C</p>
            <p>PRESION:${data.main.pressure}pda</p>
            <p>HUMEDAD:${data.main.humidity}</p>
            <p>VELOCIDAD DEL VIENTO:${data.wind.speed}k/s</p>
            `;
        }
        navigator.geolocation.getCurrentPosition(success, function(msg){
            console.error( msg );
        });
    }
}