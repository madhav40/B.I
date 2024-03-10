var inputvalue =document.querySelector('#cityinput')
var btn        =document.querySelector('#add')
var city       =document.querySelector('#cityoutput')
var desciption =document.querySelector('#description')
var temp       =document.querySelector('#temp')
var wind       =document.querySelector('#wind')
apik="1eb6de4f8f12c070f03c4215b50ddd36"
function convertion(val)
{
    return(val-273).toFixed(3)
}
btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputvalue.value+ '&appid='+apik )
    .then(res =>res.json())
    
    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temperature= data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML=`weather of <span>${nameval}<span>`
            temp.innerHTML=`Temperature: <span>${ convertion(temperature)} C</span>`
            desciption.innerHTML= `Sky condition: <span>${descrip}<span>`
            wind.innerHTML= `Wind speed: <span>${wndspeed} km/h <span>`
        })
        .catch(err=> alert('you entered Wrong City Name'))
})