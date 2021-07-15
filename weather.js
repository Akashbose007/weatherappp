let locat = document.getElementById("locat");
let icon =document.getElementById("temperature-icon");
let temperaturevalue =document.getElementById("temperature-value");
let climate=document.getElementById("climate");
let iconphoto;
const searchinput=document.getElementById("search-input");
const searchbutton=document.getElementById("search-button");



searchbutton.addEventListener('click' , (e)=>{

e.preventDefault();
getweather(searchinput.value);
searchinput.value='';


});

const getweather=async (city)=>
{
   try{

    

    const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c5733f902f70fa4b4ded9d09e4ba85f`
   
   
   );
   const data=await response.json();
   const{name}=data;
   const{feels_like}=data.main;
   const{id,main}=data.weather[0];

   locat.textContent=name;
   climate.textContent=main;
   temperaturevalue.textContent=Math.round(feels_like-273);   

}

 catch(error)
 {
     alert("city not found");
 }

};















window.addEventListener("load",()=>{

let long;
let lat;

if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition((position)=>
    
       { lat=position.coords.latitude;
        long=position.coords.longitude;
        
        const proxy="https://cors-anywhere.herokuapp.com/";
        const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6c5733f902f70fa4b4ded9d09e4ba85f`

        fetch(api).then ((response)=>
        {
            return response.json();
        })
        .then (data=>{
            const{name}=data;
            const{feels_like}=data.main;
            const{id,main}=data.weather[0];

            locat.textContent=name;
            climate.textContent=main;
            temperaturevalue.textContent=Math.round(feels_like-273);
        }) 
    }
        )}
})  