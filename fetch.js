let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeIssLocationFetched = document.querySelector( '#time')

let update = 10000
let maxFailedAttemps = 3

let issMarket 
let icon = L.icon({
    iconUrl:"iss.icon.png",
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

let map = L.map("iss-map"). setView([0, 0], 1)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)


iss(maxFailedAttemps) //call fuction one time start and then wait 10 secod to call our fuction 
//setInterval(iss, update)  // 10 seconds
function iss(attemps){
    if( attemps <=0) {
        alert('Failed to contact ISS server after several attemps.')

    }

fetch(url).then( res=> {  // res=response(is a function)
    return res.json()// response into json

}). then ( (issData) => {
    console.log(issData)
    
    let lat = issData.latitude
    let long = issData.longitude
     issLat.innerHTML = lat
     issLong.innerHTML= long 

     // we need to create a marker if dose'nt exist

     if(!issMarket){
        // we need to create a market

        issMarket = L.marker ([lat, long], {icon: icon}).addTo(map)  //inside {} we create an icon 
     } else { // if there is a marker should have to move
        issMarket.setLatLng([lat, long])
     }


     let now = Date ()
     timeIssLocationFetched.innerHTML= `This data was fetched at ${now}`

 
}). catch( err =>{
    attemps = attemps - 1 
    console.log('ERROR!',err)
}). finally ( () =>{
    setTimeout(iss.update, attemps)
})
}