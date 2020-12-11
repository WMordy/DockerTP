var SendData = ()=>{
    let PlayerName = document.getElementById("name")
let speed = document.getElementById("speed")
let drible = document.getElementById("drible")
let physic = document.getElementById("physic")
let link = document.getElementById("link")
if(PlayerName.value != "" & speed.value != "" & drible.value != "" & physic.value != "" & link.value != ""){
    console.log(PlayerName.value)
  postData('/pl ', {
  'name':PlayerName.value,
  'speed': speed.value,
  'drible': drible.value,
  'physic':physic.value ,
  'link' : link.value
})
  .then(data => {

    console.log("sended"); 
  });
    PlayerName.value = ""
speed.value = ""
drible.value = ""
physic.value = ""
link.value = ""
}
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', 
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
  }
 