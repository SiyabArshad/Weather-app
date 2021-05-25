const form = document.querySelector(".top-banner form");
const input1=document.querySelector('#input1')
const msg=document.querySelector('.msg')
let inputVal=''
const city=document.querySelector('.cities')
form.addEventListener("submit", e => {
  e.preventDefault();
  inputVal = input1.value;
  if(inputVal.length===0)
  {
    alert('Enter valid country name')
  }
  else
  {
    input1.value=''
   displaydata(inputVal)
  }
  });
const displaydata=(countryNames)=>{
  city.innerHTML=''
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryNames}&appid=06da3cef019dd5ffb88dc49ca33860d3`;
   fetch(url)
   .then(response => response.json())
   .then(data => {
     const { main, sys,weather,name} = data
     const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
  weather[0]["icon"]
}.svg`;
     city.insertAdjacentHTML('beforeend',`
     <li>
         <div class="card">
                   <div class='card-body'>
                   <h2 class="city-name" data-name="${name},${sys.country}">
                   <span>${name}</span>
                   <sup>${sys.country}</sup>
                 </h2>
                     <div class="city-temp">${Math.round(main.temp)-273}<sup>°C</sup></div>
                     </div>
                     <figure>
                     <img class="city-icon" src=${icon}></img>
                  <figcaption>${weather[0]["description"]}</figcaption>
                   </figure>
                 </div>
               </li>
     `)
  }).catch(() => {
    msg.textContent = "Please search for a valid city 😩";
    });
}