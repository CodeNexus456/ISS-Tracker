
let url = "https://api.wheretheiss.at/v1/satellites/25544";

async function getISSInfo() {
  try {
    let responce = await axios.get(url);
  console.log(responce);

  document.querySelector(".para1").innerText = responce.data.latitude.toFixed(4)+" °N ";
  document.querySelector(".para2").innerText = responce.data.longitude.toFixed(4)+" °E ";
  document.querySelector(".para3").innerText = responce.data.timestamp + " s ";
  document.querySelector(".para4").innerText = responce.data.altitude.toFixed(2)+" km " ;
  document.querySelector(".para5").innerText = responce.data.velocity.toFixed(4) + " km/h ";
  document.querySelector(".para6").innerText = responce.data.visibility;
  document.querySelector(".para7").innerText = responce.data.footprint.toFixed(2) + " km ";
   document.querySelector(".para8").innerText = responce.data.solar_lat.toFixed(4) + " ° ";
   document.querySelector(".para9").innerText = responce.data.solar_lon.toFixed(4) + " ° ";

  } catch (error) {
    console.log(error);
  }
}

getISSInfo();